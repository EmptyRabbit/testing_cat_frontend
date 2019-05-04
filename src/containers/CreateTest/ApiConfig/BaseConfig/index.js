import React, { Component } from 'react';
import { Input, InputNumber, Button, Tabs, Select, Icon, Form, Radio } from 'antd';
import styles from "./index.less";
import { FORMERR } from 'dns';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const Option = Select.Option;

class BaseConfigContent extends Component {
    constructor() {
        super();
        this.state = {
            isShowBody: false,
            isShowRaw: false,
            isShowDetail: false,
            method: 'GET',
            url: '请配置压测API'
        }
    }

    componentDidMount() {
        this.props.onRef(this.props.index, this);
    }

    componentWillUnmount() {
        this.props.onDelRef(this.props.index);
    }

    handleSelChange = (value, name) => {
        let { isShowbody } = this.state;
        isShowbody = value === 'POST' ? true : false;

        this.setState({
            [name]: value,
            isShowBody: isShowbody,
        });
    }

    handleTypeChange = (e) => {
        let { isShowRaw } = this.state;
        isShowRaw = e.target.value === 'raw' ? true : false;

        this.setState({
            isShowRaw: isShowRaw,
        });
    }

    handleChange = (e) => {
        const { target } = e;
        this.setState({ [target.id]: [target.value || '请配置压测API'] })
    }

    handClick = (e) => {
        this.setState({
            isShowDetail: !this.state.isShowDetail
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { isShowDetail, isShowBody } = this.state;
        const { method, url } = this.state;

        const headerContent = (
            <Form>
                <FormItem>
                    {getFieldDecorator("header", {
                        initialValue: "{}",
                        rules: [
                            { message: '请输入Header' }
                        ],
                    })(
                        <Input
                            type="textarea"
                            style={{ height: '80px' }}
                            size='large'>
                        </Input>
                    )}
                </FormItem>
            </Form>
        )

        const baseConfigUrl = (
            <Form>
                <FormItem label="测试URL">
                    {getFieldDecorator("url", {
                        rules: [
                            { type: 'url', message: '请输入有效的URL' },
                            { required: true, message: '请输入URL' }
                        ],
                    })(
                        <Input
                            type="textarea"
                            style={{ height: '80px' }}
                            onChange={(e) => this.handleChange(e, 'url')}
                            size='large'>
                        </Input>
                    )}
                </FormItem>
            </Form>
        )

        const baseConfigMethod = (
            <Form>
                <FormItem label="请求方式" style={{ marginRight: '30px' }}>
                    {getFieldDecorator("method", {
                        initialValue: 'GET',
                    })(
                        <Select onChange={(e) => this.handleSelChange(e, 'method')}>
                            <Option value="GET">GET</Option>
                            <Option value="POST">POST</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="超时时间">
                    {getFieldDecorator("timeout", {
                        initialValue: 5000,
                        rules: [
                            { required: true, message: '超时时间不可空' }
                        ],
                    })(
                        <InputNumber placeholder='ms'>
                        </InputNumber>
                    )}
                </FormItem>
            </Form>
        )

        let bodyContentOuter = null;
        if (isShowBody) {
            const bodyType = (
                <Form>
                    <FormItem label="Content-Type" style={{ margin: '0 100px 10px 0' }}>
                        {getFieldDecorator('content_type', {
                            initialValue: 'x-www-form-urlencode',
                        })(
                            <Radio.Group onChange={(e) => this.handleTypeChange(e)}>
                                <Radio value="x-www-form-urlencode">x-www-form-urlencode</Radio>
                                <Radio value="raw">raw</Radio>
                            </Radio.Group>
                        )}
                    </FormItem>
                    {
                        this.state.isShowRaw &&
                        <FormItem>
                            {getFieldDecorator('raw_type', {
                                initialValue: 'JSON',
                            })(
                                <Select style={{ width: '200px' }}>
                                    <Option value="JSON">JSON(application/json)</Option>
                                    <Option value="TEXT">TEXT(text/plain)</Option>
                                </Select>
                            )}
                        </FormItem>
                    }
                </Form>
            )

            const bodyContent = (
                <Form>
                    <FormItem >
                        {getFieldDecorator("body_content", {
                            rules: [
                                { required: true, message: '请输入body内容' }
                            ],
                        })(
                            <Input
                                type="textarea"
                                style={{ height: '80px', width: '100%' }}
                                size='large'>
                            </Input>
                        )}
                    </FormItem>
                </Form >
            )

            const bodyContentTab = (
                < TabPane tab="body定义" key="2">
                    <div className={styles.baseMethod} style={{ margin: 0 }}>
                        {bodyType}
                    </div>
                    {bodyContent}
                </TabPane>
            )

            bodyContentOuter = bodyContentTab;
        }


        return (
            <div className={`${styles.outer} ${method === 'GET' ? styles.markGet : styles.markPost}`}>
                <div className={styles.middle}>
                    <div className={styles.head}>
                        <div style={{ width: '5%' }}>
                            <span> <Icon type="plus"></Icon></span>
                        </div>
                        <div style={{ widht: '20%' }}>
                            <Form layout="inline">
                                <FormItem style={{ margin: 0 }}>
                                    {
                                        getFieldDecorator("apiname",
                                            {
                                                rules: [{ required: true, message: '请输入API名称' }],
                                            })(
                                                <Input
                                                    placeholder="请输入API名称"
                                                    style={{ width: '100%', border: '0px' }} >
                                                </Input>
                                            )}
                                </FormItem>
                            </Form>
                        </div>
                        <div style={{ width: '10%' }} className={method === 'GET' ? styles.get : styles.post} >
                            <span>{method}</span>
                        </div>
                        <div style={{ width: '15%' }} onClick={this.handClick}>
                            <span>{url}</span>
                        </div>
                        <div style={{ width: '50%', }}>
                            <div style={{ float: 'right' }}>
                                <Button className={styles.iconButton} icon='delete' onClick={() => this.props.deleteConfig(this.props.index)}></Button>
                                <Button className={styles.iconButton} icon='down' onClick={this.handClick}></Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* API具体配置TAB */}
                <div className={styles.detail} style={{ display: isShowDetail ? 'block' : 'none' }}>
                    <div style={{ padding: '10px 3% 0 7%' }}>
                        <Tabs defaultActiveKey="1">
                            {/* 基本请求信息 */}
                            <TabPane tab="基本请求信息" key="1">
                                {baseConfigUrl}
                                <div className={styles.baseMethod}>
                                    {baseConfigMethod}
                                </div>
                            </TabPane>
                            {/* body */}
                            {bodyContentOuter}
                            {/* header */}
                            <TabPane tab="Header定义" key="3">
                                {headerContent}
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div >
        )
    }
}

const BaseConfig = Form.create({})(BaseConfigContent);
export default BaseConfig;