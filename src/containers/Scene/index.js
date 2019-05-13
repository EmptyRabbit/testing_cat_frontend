import React, { Component } from 'react';
import { Input, Table } from 'antd';
import styles from "./index.less";
import { getTestList } from '../../api/index';
import { Link } from 'react-router-dom';


const Search = Input.Search;

export default class Screen extends Component {
    constructor() {
        super();
        this.state = { data: {} };
    }

    componentWillMount() {
        getTestList('').then(data => {
            data.columns.push({
                'title': '操作',
                'dataIndex': 'operate',
                'key': 'operate',
                'render': (Text, Record) => (
                    <span>
                        <Link to={'/create/' + '2/'} activeClassName='active'>XXXX</Link>
                    </span>
                )
            })
            this.setState({ data: data })
        })
    }

    render() {
        const { columns } = this.state.data;
        const { datas } = this.state.data;

        return (
            <div>
                <div>
                    <span className={styles.title}>场景列表</span>
                </div>
                <div className={styles.line}></div>
                <div>
                    <div>
                        <Search
                            placeholder="请按照场景名搜索"
                            onSearch={value => console.log(value)}
                            enterButton
                            style={{ width: '30%', minWidth: 300 }}
                        />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Table
                            columns={columns}
                            dataSource={datas}
                        />
                    </div>
                </div>
            </div>
        )
    }

}