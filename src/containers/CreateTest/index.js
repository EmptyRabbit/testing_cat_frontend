import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { Tabs } from 'antd';
import ApiConfig from './ApiConfig/index';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class CreateTest extends Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.validateFields());
    };
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div >
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <div>
                        <span style={{ fontSize: 16, lineHeight: '3em' }}>创建测试</span>
                        <div style={{ position: 'absolute', top: '6px', right: '0px' }}>
                            <Button>保存</Button>
                        </div>
                    </div>
                    <div style={{ margin: '15px 0 0 0' }}>
                        <FormItem layout="inline" label="场景名">
                            <Input placeholder="请输入场景名" style={{ minWidth: 350 }}
                                {...getFieldProps('userName')} />
                        </FormItem>
                    </div>
                    <div>
                        <Tabs style={{ margin: '15px 0 0 0' }} defaultActiveKey="1">
                            <TabPane tab="场景配置" key="1">
                                <ApiConfig />
                            </TabPane>
                            <TabPane tab="其他配置" key="2">其他配置</TabPane>
                            <TabPane tab="Tab 3" disabled key="3">Tab 3</TabPane>
                        </Tabs>
                    </div>
                </Form >
            </div >
        );
    }
}

const WrapCreateTest = Form.create({})(CreateTest);

export default WrapCreateTest;