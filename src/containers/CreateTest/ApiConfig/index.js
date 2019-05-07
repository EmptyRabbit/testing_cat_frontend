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
                    routeId={props.index}
                    key={row.key}
                    index={row.key}
                    deleteConfig={props.deleteConfig}
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

    constructor() {
        super();
        this.state = {
            routes: [{
                key: 0,
                bases: []
            }]
        }
    }

    componentDidMount() {
        this.setState({
            maxBaseKey: 0,
            routes: [
                {
                    key: 0,
                    bases: [
                        {
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
                        }
                    ]
                }
            ]
        })
    }
    addApiConfig = () => {
        let routes = [...this.state.routes];
        const route = {
            key: routes[routes.length - 1].key + 1,
            bases: []
        }
        this.setState({
            routes: [...routes, { ...route }]
        })
    }

    addBaseConfig = routeId => {
        const initBase = {
            key: this.state.maxBaseKey + 1,
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
        let routes = [...this.state.routes];
        const route = this.state.routes.filter((row, index) => row['key'] === routeId)
        const bases = [...route[0].bases, { ...initBase }]
        routes.map((row, index) => {
            if (row.key === routeId) {
                row.bases = bases;
            }
        })
        this.setState({
            maxBaseKey: this.state.maxBaseKey + 1,
            routes: routes
        });
    }

    deleteConfig = (key, routeId) => {
        let routes = [...this.state.routes];
        routes.map((row, index) => {
            if (row.key === routeId) {
                row.bases = row.bases.filter((r, i) => r.key != key);
            }
        })
        this.setState({ routes: routes })

    }

    renderApiConfig = () => {
        return (
            <div>
                {this.state.routes.map((row, index) =>
                    (<RouteConfig
                        key={row.key}
                        index={row.key}
                        bases={row.bases}
                        deleteConfig={this.deleteConfig}
                        onRef={this.props.onRef}
                        onDelRef={this.props.onDelRef}
                        addBaseConfig={this.addBaseConfig}
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
                    <div onClick={this.addApiConfig}>
                        <span>+添加串联链路</span>
                    </div>
                </div>
            </div>
        )
    }
};

export default ApiConfig;