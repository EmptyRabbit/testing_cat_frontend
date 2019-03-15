import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';


class Head extends Component {

    render() {
        return (
            <div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">开始测试</Menu.Item>
                    <Menu.Item key="2">测试详情</Menu.Item>
                </Menu>
            </div>

        )
    }
}

export default Head;