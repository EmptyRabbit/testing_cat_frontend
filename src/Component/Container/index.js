import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import Head from './Head/index';

const {Header, Content, Footer} = Layout;

const SubMenu = Menu.SubMenu;

class Container extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <Head/>
                </Header>
            </Layout>
        )

    }
}

export default Container;