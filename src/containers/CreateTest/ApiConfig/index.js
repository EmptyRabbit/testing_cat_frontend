import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import styles from "./index.less";
import BaseConfig from './BaseConfig/index';

const RouteConfig = (props) => {
    return (
        <div style={{ border: '1px solid rgb(235, 236, 236)', margin: '0 0 10px 0' }}>
            <div className={styles.linkconfig}>
                <div style={{ width: '40px' }}>
                    <Icon type="plus"></Icon>
                </div>
                <div style={{ lineHeight: '40px' }}>
                    <span>串联链路</span>
                </div>
            </div>
            {/* url配置 */}
            {props.bases.map((row, index) =>
                <BaseConfig
                    data={row}
                    routeId={props.index}
                    key={row.key}
                    index={row.key}
                    deleteConfig={props.deleteConfig}
                    addBaseConfig={props.addBaseConfig}
                    onRef={props.onRef}
                    onDelRef={props.onDelRef}
                />
            )}
            {/* 新增url按钮 */}
            <div style={{ padding: '10px 0 10px 0' }}>
                <Button onClick={() => props.addBaseConfig(props.index)} >新增</Button>
            </div>
        </div >
    )
}

class ApiConfig extends Component {

    renderApiConfig = () => {
        return (
            <div>
                {this.props.data.map((row, index) =>
                    (<RouteConfig
                        key={row.key}
                        index={row.key}
                        bases={row.bases}
                        deleteConfig={this.props.deleteConfig}
                        onRef={this.props.onRef}
                        onDelRef={this.props.onDelRef}
                        addBaseConfig={this.props.addBaseConfig}
                    />)
                )}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderApiConfig()}
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <div onClick={this.props.addApiConfig}>
                        <span>+添加串联链路</span>
                    </div>
                </div>
            </div>
        )
    }
};

export default ApiConfig;