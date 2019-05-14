import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { Tabs } from 'antd';
import ApiConfig from './ApiConfig/index';
import { postTestConfig, getTestConfig } from '../../api/index';
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

    constructor() {
        super();
        this.state = {
            name: '',
            projectID: -1,
            maxBaseKey: 0,
            data: [
                {
                    key: 0,
                    bases: [
                        {
                            key: 0,
                            name: "",
                            url: "",
                            method: "GET",
                            timeout: 5000,
                            header: [],
                            body: {
                                'content-type': 'x-www-form-urlencode',
                                'content': []
                            }
                        }
                    ]
                }
            ]
        };
    }

    componentWillMount() {
        const { projectID } = this.props.match.params;
        if (projectID != undefined) {
            getTestConfig(projectID).then(data => {
                this.setState({ ...data });
            })
        }
    }

    addApiConfig = () => {
        let routes = [...this.state.data];
        const route = {
            key: routes[routes.length - 1].key + 1,
            bases: []
        }
        this.setState({
            routes: [...routes, { ...route }]
        })
    }

    deleteConfig = (key, routeId) => {
        let routes = [...this.state.data];
        routes.map((row, index) => {
            if (row.key === routeId) {
                row.bases = row.bases.filter((r, i) => r.key != key);
            }
        })
        this.setState({ data: routes })
    }

    addBaseConfig = routeId => {
        const initBase = {
            key: this.state.maxBaseKey + 1,
            name: "",
            url: "",
            method: "GET",
            timeout: 5000,
            header: [],
            body: {
                'content-type': 'x-www-form-urlencode',
                'content': []
            }
        };
        let routes = [...this.state.data];
        const route = this.state.data.filter((row, index) => row['key'] === routeId)
        const bases = [...route[0].bases, { ...initBase }]
        routes.map((row, index) => {
            if (row.key === routeId) {
                row.bases = bases;
            }
        })
        this.setState({
            maxBaseKey: this.state.maxBaseKey + 1,
            data: routes
        });
    }

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
                let name = values.projectName;
                let datas = this.getSaveData();
                //若有数据，保存
                if (datas.length > 0) {
                    console.log(datas);
                    // postTestConfig({ name: name, data: datas }).then(data => {
                    //     console.log(data)
                    // })
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
        const { getFieldDecorator } = this.props.form;
        console.log('test', this.state.data)
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
                                {getFieldDecorator('projectName', {
                                    rules: [
                                        {
                                            required: true, message: '请输入场景名',
                                        }
                                    ],
                                    initialValue: this.state.name,
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
                                    data={this.state.data}
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