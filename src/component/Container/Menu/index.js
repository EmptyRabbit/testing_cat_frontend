import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;


class MenuSide extends Component {
    render() {
        return (
            <Menu
                mode="inline"
                // defaultSelectedKeys={['11']}
                defaultOpenKeys={['sub1','sub2']}
                style={{ height: '100%' }}
            >
                <SubMenu key="sub1" title={<span><Icon type="form" />创建测试</span>}>
                    <Menu.Item key="11">快速测试
                        <Link to={'/create'}></Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="form" />测试管理</span>}>
                    <Menu.Item key="21">测试场景
                        <Link to={'/scene'}></Link>
                    </Menu.Item>
                    <Menu.Item key="22">测试报告
                        <Link to={'/report'}></Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}


export default MenuSide;