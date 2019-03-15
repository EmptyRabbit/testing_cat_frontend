import React, { Component } from 'react';
import { Icon } from 'antd';
import styles from "./index.less";

class Menu extends Component {
    render() {
        console.log({styles})
        return (
            <div>
                <div className={styles.block}>
                    <Icon type="form"></Icon>
                    <p>开始测试</p>
                </div>
            </div>
        )
    }
}


export default Menu;