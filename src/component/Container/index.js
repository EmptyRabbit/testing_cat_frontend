import React, {Component} from 'react';
import {Layout} from 'antd';
import Head from './Head/index';
import Menu from './Menu/index'

const {Header, Content, Footer} = Layout;


class Container extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <Head/>
                </Header>

                <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                    <Menu/>
                </Content>

                <Footer>
                    Footer
                </Footer>
            </Layout>
        )

    }
}

export default Container;