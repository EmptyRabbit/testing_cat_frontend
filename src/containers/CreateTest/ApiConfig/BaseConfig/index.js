import React, { Component } from 'react';
import { Input, Button, Tabs, Select, Icon, Form } from 'antd';
import styles from "./index.less";
const TabPane = Tabs.TabPane;
const Option = Select.Option;

class BaseConfig extends Component {
    constructor() {
        super();
        this.state = {
            isShowDetail: false
        }
    }
    handMouseEnter = (e) => {

    }
    handClick = () => {
        this.setState({
            isShowDetail: !this.state.isShowDetail
        })
    }

    render() {
        const { isShowDetail } = this.state;
        return (
            <div className={`${styles.markGet} ${styles.outer}`}>
                <div className={styles.head} onMouseEnter={this.handMouseEnter.bind(this)}>
                    <div style={{ width: '5%' }}>
                        <Icon type="plus"></Icon>
                    </div>
                    <div style={{ width: '20%' }}>
                        <Input placeholder="请输入API名称" style={{ width: '100%', border: '0px' }} />
                    </div>
                    <div style={{ width: '10%' }}>
                        <span></span>
                    </div>
                    <div style={{ width: '15%' }} onClick={() => this.handClick()}>
                        <span> 请配置压测api</span>
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
                                <div style={{ margin: '0 0 10px 0' }}>
                                    <span className={styles.star}>*</span>
                                    测试url
                                </div>
                                <div>
                                    <Input type="textarea" style={{ height: '80px' }} size='large'></Input>
                                </div>
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

export default BaseConfig;