import React, { Component } from 'react';
import { Input, Button, Tabs, Select, Icon, Form } from 'antd';
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

        return (
            <div className={`${styles.markGet} ${styles.outer}`}>
                <div className={styles.head}>
                    <div style={{ width: '5%', height: '100%', flex: '0 0 5%' }}>
                        <div >
                            <Icon type="plus"></Icon>
                        </div>
                    </div>
                    <div style={{ widht: '20%' }}>
                        <Form layout="inline">
                            <FormItem>
                                {
                                    getFieldDecorator("name" + this.props.index,
                                        {
                                            rules: [{ required: true, message: '请输入API名称' }]
                                        })
                                        (<Input placeholder="请输入API名称" style={{ width: '100%', border: '0px' }} />)
                                }
                            </FormItem>
                        </Form>
                    </div>
                    {/* <div style={{ width: '10%' }}>
                        <span></span>
                    </div> */}
                    <div style={{ width: '15%' }} onClick={this.handClick}>
                        <div>
                            <span> 请配置压测api</span>
                        </div>
                    </div>
                    <div style={{ width: '50%', }}>
                        <div style={{ float: 'right' }}>
                            <Button className={styles.iconButton} icon='delete' onClick={() => this.props.deleteConfig(this.props.index)}></Button>
                            <Button className={styles.iconButton} icon='down' onClick={() => this.handClick()}></Button>
                        </div>
                    </div>
                </div>
                <div className={styles.detail} style={{ display: isShowDetail ? 'block' : 'none' }}>
                    <div style={{ padding: '10px 3% 0 7%' }}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="基本请求信息" key="1">
                                <Form>
                                    <FormItem label="测试URL">
                                        {getFieldDecorator("url" + this.props.index, {
                                            rules: [
                                                {
                                                    type: 'url', message: '请输入有效的URL',
                                                },
                                                {
                                                    required: true, message: '请输入URL',
                                                }
                                            ],
                                        })(<Input type="textarea" style={{ height: '80px' }} size='large'></Input>)}
                                    </FormItem>
                                </Form>
                                <div className={styles.baseMethod}>
                                    <div>
                                        <label>请求方式</label>
                                        <Select defaultValue="GET" style={{ width: 120 }}>
                                            <Option value="GET">GET</Option>
                                            <Option value="POST">POST</Option>
                                        </Select>
                                    </div>
                                    <div>
                                        <label>
                                            <span className={styles.star}>*</span>
                                            超时时间
                                        </label>
                                        <Input style={{ width: '80px' }} defaultValue='5000' placeholder='ms'></Input>
                                    </div>
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