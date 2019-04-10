import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import styles from "./index.less";
import BaseConfig from './BaseConfig/index';

class ApiConfig extends Component {
    initBase = {
        key: 0,
        name: "",
        url: "",
        method: "GET",
        timeout: 5000,
        header: [],
        body: {
            'content-type': 'x-www-form-urlencode',
            'content': []
        }
    };

    constructor() {
        super();
        this.state = {
            bases: [{ ...this.initBase }]
        }
    }
    addBaseConfig = () => {
        this.initBase.key += 1
        this.setState({ bases: [...this.state.bases, { ...this.initBase }] })
    }

    deleteConfig = i => {
        this.setState(
            {
                bases: this.state.bases.filter((row, index) => {
                    return row.key !== i;
                })
            }
        )

    }

    render() {
        return (
            <div style={{ border: '1px solid rgb(235, 236, 236)' }}>
                <div className={styles.linkconfig}>
                    <div style={{ width: '40px' }}>
                        <Icon type="plus"></Icon>
                    </div>
                    <div style={{ lineHeight: '40px' }}>
                        <span>串联链路</span>
                    </div>
                </div>
                {/* url配置 */}
                {this.state.bases.map((row, index) =>
                    <BaseConfig
                        key={row.key}
                        index={row.key}
                        deleteConfig={this.deleteConfig}
                        onRef={this.props.onRef}
                        onDelRef={this.props.onDelRef}
                    />
                )}
                {/* 新增url按钮 */}
                <div style={{ padding: '10px 0 10px 0' }}>
                    <Button onClick={() => this.addBaseConfig()} >Primary</Button>
                </div>
            </div >
        )
    }
};

export default ApiConfig;