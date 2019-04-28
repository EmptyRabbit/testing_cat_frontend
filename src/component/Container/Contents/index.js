import React, { Component } from 'react';
import { Layout } from 'antd';
import MenuSide from '../Menu/index';
import WrapCreateTest from '../../../containers/CreateTest/index';

const { Header, Content, Sider } = Layout;

class InnerContent extends Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <WrapCreateTest />
            </div>
        );
    }
}

class Contents extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }} >
                <Sider width={200} style={{ background: '#9b9b9b' }} >
                    <MenuSide />
                </Sider>
                <Layout>
                    <Content style={{ background: '#fff', padding: 24, margin: 0 }}>
                        <InnerContent />
                    </Content>
                </Layout>
            </Layout >
        )
    }
}

export default Contents;