import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {Button} from 'antd';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to Epro!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        {/* <li>To get started, edit <code>src/index.js</code> and save to reload.</li> */}
        <Button><li><a href="#/login">Login in</a></li></Button>
        <span style={{paddingLeft:'10px'}}></span>
        <Button><li><a href="#/count">count</a></li></Button>
        <span style={{paddingLeft:'10px'}}></span>
        <Button><li><a href="#/products">products</a></li></Button>
        <span style={{paddingLeft:'10px'}}></span>
        <Button><li><a href="#/todoList">To do list</a></li></Button>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
