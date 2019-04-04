import React, { Component } from 'react';
import { Button, Input } from 'antd';
import styles from "./index.less";

class ApiConfig extends Component {
    render() {
        return (
            <div style={{ border: '1px solid rgb(235, 236, 236)' }}>
                <div className={styles.linkconfig}>串联链路</div>
                <div className={styles.head}>
                    <div style={{ width: '5%' }}>
                        <span>icon</span>
                    </div>
                    <div style={{ width: '15%' }}>
                        <Input placeholder="输入" style={{ width: '100%', border: '0px' }} />
                    </div>
                    <div style={{ width: '15%' }}>
                        <span>icon</span>
                    </div>
                    <div style={{ width: '15%' }}>
                        <span>url</span>
                    </div>
                    <div style={{ width: '50%', }}>
                        <div style={{ float: 'right' }}>
                            <Button className={styles.iconButton} icon='delete'></Button>
                            <Button className={styles.iconButton} icon='down'></Button>
                        </div>
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