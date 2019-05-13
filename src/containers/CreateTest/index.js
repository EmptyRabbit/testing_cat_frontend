import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { Tabs } from 'antd';
import ApiConfig from './ApiConfig/index';
import { postTestConfig } from '../../api/index';
import { withRouter } from 'react-router-dom';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class CreateTest extends Component {

    /* 
    apiChilren结构：
    [
        {
            key:0,
            bases:{
                0:baseConfig1,
                2:baseConfig2
            }
        }
    ] 
    */

    apiChildren = []

    //遍历校验各个config获取配置数据
    getSaveData = () => {
        let data = [];
        this.apiChildren.map((row, index) => {
            let route = { key: row.key, bases: [] }
            for (let base in row.bases) {
                let obj = row.bases[base];
                obj.props.form.validateFields((err, values) => {
                    if (!err) {
                        route.bases.push(Object.assign({ key: obj.props.index }, values))
                    }
                });
            }

            if (route.bases.length > 0) {
                data.push(route);
            }
        })
        return data;
    }

    save = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let name = values.testName;
                let datas = this.getSaveData();
                //若有数据，保存
                if (datas.length > 0) {
                    postTestConfig({ name: name, data: datas }).then(data => {
                        console.log(data)
                    })
                }
            }
        });
    }

    onRef = (routeId, index, ref) => {
        let routeChild = this.apiChildren.filter((row, index) => row.key === routeId)
        let baseChild = { key: routeId, bases: { [index]: ref } }
        if (routeChild.length === 0) {
            this.apiChildren.push(baseChild);
        }
        else {
            routeChild[0].bases = { ...routeChild[0].bases, ...{ [index]: ref } }
        }
    }

    onDelRef = (routeId, index) => {
        let routeChild = this.apiChildren.filter((row, index) => row.key === routeId)
        delete routeChild[0].bases[index]
    }

    render() {
        console.log(this.props)
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{ position: 'relative' }}>
                <div >
                    <div>
                        <span style={{ fontSize: 16, lineHeight: '3em' }}>创建测试</span>
                        <div style={{ position: 'absolute', top: '6px', right: '0px' }}>
                            <Button onClick={this.save}>保存</Button>
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

const WrapCreateTest = withRouter(Form.create({})(CreateTest));

export default WrapCreateTest;