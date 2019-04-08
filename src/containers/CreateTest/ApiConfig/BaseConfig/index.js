import React, { Component } from 'react';
import { Input, Button, Tabs } from 'antd';
import styles from "./index.less";
const TabPane = Tabs.TabPane;

class BaseConfig extends Component {
    constructor() {
        super();
        this.state = {
            isShowDetail: false
        }
    }
    handClick = () => {
        this.setState({
            isShowDetail: !this.state.isShowDetail
        })
    }

    render() {
        const { isShowDetail } = this.state;

        return (
            <div>
                <div className={styles.head}>
                    <div style={{ width: '5%' }}>
                        <span>icon</span>
                    </div>
                    <div style={{ width: '15%' }}>
                        <Input placeholder="输入" style={{ width: '100%', border: '0px' }} />
                    </div>
                    <div style={{ width: '15%' }}>
                        <span>icon</span>
                    </div>
                    <div style={{ width: '15%' }}>
                        <span>url</span>
                    </div>
                    <div style={{ width: '50%', }}>
                        <div style={{ float: 'right' }}>
                            <Button className={styles.iconButton} icon='delete'></Button>
                            <Button className={styles.iconButton} icon='down' onClick={() => this.handClick()}></Button>
                        </div>
                    </div>
                </div>
                <div className={styles.detail} style={{ display: isShowDetail ? 'block' : 'none' }}>
                    <div style={{ margin: '0 1% 0 4%' }}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="基本请求信息" key="1">
                                <p>*测试url</p>
                                <div>
                                    <Input size='large'></Input>
                                </div>
                                <div>
                                    <span>请求方式</span>
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