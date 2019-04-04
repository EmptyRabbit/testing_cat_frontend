import React, { Component } from 'react';
import { Button, Input } from 'antd';
import styles from "./index.less";

class ApiConfig extends Component {
    render() {
        return (
            <div style={{ border: '1px solid rgb(235, 236, 236)' }}>
                <div className={styles.linkconfig}>串联链路</div>
                
                <div className={styles.head}>
                    <div>
                        <span>icon</span>
                    </div>
                    <div>
                        <Input placeholder="输入" style={{ width: '100%', border: '0px' }} />
                    </div>
                    <div>
                        <span>icon</span>
                    </div>
                    <div>
                        <span>url</span>
                    </div>
                    <div style={{flex:'0 0 16.68%',position:'relative', width: '100%', float: 'right' }}>
                        <Button></Button>
                    </div>
                </div>
                <div style={{ padding: '10px 0 10px 0' }}>
                    <Button>Primary</Button>
                </div>
            </div >
        )
    }
};

export default ApiConfig;