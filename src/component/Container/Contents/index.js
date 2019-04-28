import React, { Component } from 'react';
import { Layout } from 'antd';
import MenuSide from '../Menu/index';
import { Route } from 'react-router-dom';
import WrapCreateTest from '../../../containers/CreateTest/index';

const { Content, Sider } = Layout;

class Contents extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }} >
                <Sider width={200} style={{ background: '#9b9b9b' }} >
                    <MenuSide />
                </Sider>
                <Layout>
                    <Content style={{ background: '#fff', padding: 24, margin: 0 }}>
                        <div>
                            <Route path="/create" component={WrapCreateTest} />
                            <Route path="/scene" component={() => { return (<div>test1</div>) }} />
                            <Route path="/report" component={() => { return (<div>test2</div>) }} />
                        </div>
                    </Content>
                </Layout>
            </Layout >
        )
    }
}

export default Contents;