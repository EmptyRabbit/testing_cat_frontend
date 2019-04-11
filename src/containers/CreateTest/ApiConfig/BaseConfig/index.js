import React, { Component } from 'react';
import { Input, InputNumber, Button, Tabs, Select, Icon, Form } from 'antd';
import styles from "./index.less";
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const Option = Select.Option;

class BaseConfigContent extends Component {
    constructor() {
        super();
        this.state = {
            isShowDetail: false
        }
    }

    componentDidMount() {
        this.props.onRef(this.props.index, this);
    }

    componentWillUnmount() {
        this.props.onDelRef(this.props.index);
    }

    handClick = (e) => {
        this.setState({
            isShowDetail: !this.state.isShowDetail
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { isShowDetail } = this.state;
        const method = 'GET';

        return (
            <div className={` ${styles.outer} ${method === 'GET' ? styles.markGet : styles.markPost}`}>
                <div className={styles.middle}>
                    <div className={styles.head}>
                        <div style={{ width: '5%' }}>
                            <span> <Icon type="plus"></Icon></span>
                        </div>
                        <div style={{ widht: '20%' }}>
                            <Form layout="inline">
                                <FormItem style={{ margin: 0 }}>
                                    {
                                        getFieldDecorator("name_" + this.props.index,
                                            {
                                                rules: [{ required: true, message: '请输入API名称' }]
                                            })(
                                                <Input
                                                    placeholder="请输入API名称"
                                                    style={{ width: '100%', border: '0px' }} >
                                                </Input>
                                            )}
                                </FormItem>
                            </Form>
                        </div>
                        <div style={{ width: '10%' }}>
                            <span>{method}</span>
                        </div>
                        <div style={{ width: '15%' }} onClick={this.handClick}>
                            <span>请配置压测api</span>
                        </div>
                        <div style={{ width: '50%', }}>
                            <div style={{ float: 'right' }}>
                                <Button className={styles.iconButton} icon='delete' onClick={() => this.props.deleteConfig(this.props.index)}></Button>
                                <Button className={styles.iconButton} icon='down' onClick={this.handClick}></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.detail} style={{ display: isShowDetail ? 'block' : 'none' }}>
                    <div style={{ padding: '10px 3% 0 7%' }}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="基本请求信息" key="1">
                                <Form>
                                    <FormItem label="测试URL">
                                        {getFieldDecorator("url_" + this.props.index, {
                                            rules: [
                                                { type: 'url', message: '请输入有效的URL' },
                                                { required: true, message: '请输入URL' }
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
                                <div className={styles.baseMethod}>
                                    <Form>
                                        <FormItem label="请求方式" style={{ marginRight: '30px' }}>
                                            {getFieldDecorator("method_" + this.props.index, { initialValue: 'GET' })(
                                                <Select>
                                                    <Option value="GET">GET</Option>
                                                    <Option value="POST">POST</Option>
                                                </Select>
                                            )}
                                        </FormItem>
                                        <FormItem label="超时时间">
                                            {getFieldDecorator("timeout_" + this.props.index, {
                                                initialValue: 5000,
                                                rules: [
                                                    { required: true, message: '超时时间不可空' }
                                                ],
                                            })(<InputNumber placeholder='ms'></InputNumber>)}
                                        </FormItem>
                                    </Form>
                                </div>
                            </TabPane>
                            <TabPane tab="Header定义" key="2">其他配置</TabPane>
                            <TabPane tab="body定义" disabled key="4"></TabPane>
                            <TabPane tab="Tab 3" disabled key="3">Tab 3</TabPane>
                        </Tabs>
                    </div>
                </div>
            </div >
        )
    }
}

const BaseConfig = Form.create({})(BaseConfigContent);
export default BaseConfig;