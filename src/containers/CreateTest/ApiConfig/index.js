import React, { Component } from 'react';
import { Button, Input, Tabs } from 'antd';
import styles from "./index.less";
import BaseConfig from './BaseConfig/index';

const TabPane = Tabs.TabPane;


class ApiConfig extends Component {
    initBase = {
        name: ""
    };
    constructor() {
        super();
        this.state = {
            bases: [this.initBase]
        }
    }
    addBaseConfig = () => {
        this.setState({ bases: [...this.state.bases, this.initBase] })
    }

    render() {
        return (
            <div style={{ border: '1px solid rgb(235, 236, 236)' }}>
                <div className={styles.linkconfig}>
                    串联链路
                </div>
                {/* url配置 */}
                {this.state.bases.map((row, index) => <BaseConfig key={index} />)}
                {/* 新增url按钮 */}
                <div style={{ padding: '10px 0 10px 0' }}>
                    <Button onClick={() => this.addBaseConfig()} >Primary</Button>
                </div>
            </div >
        )
    }
};

export default ApiConfig;