import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import styles from "./index.less";
const { SubMenu } = Menu;


class MenuSide extends Component {
    render() {
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                <SubMenu key="sub1" title={<span><Icon type="form" />subnav 1</span>}>
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}


export default MenuSide;