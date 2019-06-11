import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import styles from "./index.less";
import BaseConfig from './BaseConfig/index';

const RouteConfig = (props) => {
    return (
        <div className={styles.route}>
            <div className={styles.linkconfig}>
                <div style={{ width: '40px' }}>
                    <Icon type="plus"></Icon>
                </div>
                <div style={{ lineHeight: '40px' }}>
                    <span>串联链路</span>
                </div>
            </div>
            {/* api配置 */}
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
            {/* 新增api按钮 */}
            <div className={styles.addapi}>
                <Button onClick={() => props.addBaseConfig(props.index)} >新增</Button>
            </div>
        </div >
    )
}

class CaseConfig extends Component {

    render() {
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
                <div className={styles.addroute}>
                    <div onClick={this.props.addRouteConfig}>
                        <span>+添加串联链路</span>
                    </div>
                </div>
            </div>
        )
    }
};

export default CaseConfig;