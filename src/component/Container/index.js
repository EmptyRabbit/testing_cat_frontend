import React, { Component } from 'react';
import { Layout } from 'antd';
import Head from './Head/index';
import Routes from '../../routes';

const { Header } = Layout;


class Container extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <Head />
                </Header>
                <Routes />
            </Layout >
        )
    }
}

export default Container;