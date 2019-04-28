import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';


class Head extends Component {

    render() {
        return (
            <div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">
                        <Link to={'/'}>开始测试</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={'/detail'}>测试详情</Link>
                    </Menu.Item>
                </Menu>
            </div>

        )
    }
}

export default Head;