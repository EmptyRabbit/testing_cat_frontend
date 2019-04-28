import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { Tabs } from 'antd';
import ApiConfig from './ApiConfig/index';
import styles from "./index.less";
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class CreateTest extends Component {
    apiChildren = {};

    //遍历校验各个config获取配置数据
    getSaveData = () => {
        let data = [];
        for (let apiChild in this.apiChildren) {
            let obj = this.apiChildren[apiChild];
            obj.props.form.validateFields((err, values) => {
                if (!err) {
                    data.push(Object.assign({ key: obj.props.index }, values))
                }
            });
        }

        return data
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {};
        let name = '';
        this.props.form.validateFields((err, values) => {
            if (!err) {
                name = values.testName;
                data = this.getSaveData();
            }
        });
        console.log(data);

    }

    onRef = (index, ref) => {
        this.apiChildren = Object.assign(this.apiChildren, { [index]: ref });
    }

    onDelRef = (index) => {
        delete this.apiChildren[index]
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{ position: 'relative' }}>
                <div >
                    <div>
                        <span style={{ fontSize: 16, lineHeight: '3em' }}>创建测试</span>
                        <div style={{ position: 'absolute', top: '6px', right: '0px' }}>
                            <Button onClick={this.handleSubmit}>保存</Button>
                        </div>
                    </div>
                    <div style={{ margin: '15px 0 0 0' }}>
                        <Form layout="inline">
                            <FormItem label="场景名">
                                {getFieldDecorator('testName', {
                                    rules: [
                                        {
                                            required: true, message: '请输入场景名',
                                        }
                                    ],
                                })(<Input placeholder="请输入场景名" style={{ minWidth: 350, maxWidth: 350 }} />)}
                            </FormItem>
                        </Form>
                    </div>
                    <div>
                        <Tabs style={{ margin: '15px 0 0 0' }} defaultActiveKey="1">
                            <TabPane tab="场景配置" key="1">
                                <ApiConfig
                                    onRef={this.onRef}
                                    onDelRef={this.onDelRef}
                                />
                            </TabPane>
                            <TabPane tab="定时配置" key="2">其他配置</TabPane>
                            <TabPane tab="Tab 3" disabled key="3">Tab 3</TabPane>
                        </Tabs>
                    </div>
                </div >
            </div>
        );
    }
}

const WrapCreateTest = Form.create({})(CreateTest);

export default WrapCreateTest;