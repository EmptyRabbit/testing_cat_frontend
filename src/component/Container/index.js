import React, { Component } from 'react';
import { Layout } from 'antd';
import Head from './Head/index';
import MenuSide from './Menu/index';

const { Header, Content, Sider, Footer } = Layout;


class Container extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <Head />
                </Header>
                <Layout style={{ minHeight: '100vh' }} >
                    <Sider width={200} style={{ background: '#9b9b9b' }} >
                        <MenuSide />
                    </Sider>
                    <Layout>
                        <Content style={{ background: '#fff', padding: 24, margin: 0 }}>

                        </Content>
                        {/* <Footer >
                            Ant Design ©2016 Created by Ant UED
                        </Footer> */}
                    </Layout>
                </Layout>
            </Layout>
        )

    }
}

export default Container;