import React, {Component} from 'react';
import styles from './Count.css';
import { connect } from 'dva';
import { Button,Icon} from 'antd';

class Count extends Component{

    componentDidMount = () => {
    }

    // 调用 "effect" 里的 count/addInEffect 方法.
    // 再用 put 方法调用 reducers里的方法
    addCountCallEffect(){
        this.props.dispatch({
            type: 'count/addInEffect'
        });
    }
    // 直接调用 'reducers' 里的 count/add 方法.
    addCountCallReducers(){
        this.props.dispatch({
            type: 'count/add'
        });
    }

    // 调用 "effect" 里的 count/addInEffect 方法.
    // 再用 put 方法调用 reducers里的方法
    minusCountCallEffect(){
        this.props.dispatch({
            type:'count/minusInEffect'
        })
    }
    // 直接调用 'reducers' 里的 count/minus 方法.
    minusCountCallReducers(){
        this.props.dispatch({
            type:'count/minus'
        })
    }

    // 调用 'effect' 里的 count/clearRecordInEffect 方法.
    clearRecord(){
        this.props.dispatch({
            type:'count/clearRecordInEffect'
        });
    }

    // 直接调用 'reducers' 里的 count/clearCurrent 方法.
    clearCurrent(){
        this.props.dispatch({
            type:'count/clearCurrent'
        });
    }
    
    clearBoth(){
        this.props.dispatch({
            type:'count/clearBothInEffect',
        });
    }
    clearBothDirect(){
        this.props.dispatch({
            type:'count/clear',
        });
    }

    render(){
        const count = this.props.count;
        return (
            <div className={styles.normal}>
                <Button type="default" block>Highest Record:{count.record}</Button>
                <Button type="default" block>Current counter:{count.current}</Button>
                <div style={{marginTop:"10px"}}>
                    <Button type="primary" icon="plus-circle" onClick={() => this.addCountCallEffect()}>增加 by effect</Button>
                    <span style={{paddingLeft:'10px'}}></span>
                    <Button type="primary" icon="plus-circle" onClick={() => this.addCountCallReducers()}>增加 by reducers</Button>
                    <span style={{paddingLeft:'10px'}}></span>
                    <Button type="primary" icon="minus-circle" onClick={() => this.minusCountCallEffect()}>减少</Button>
                    <span style={{paddingLeft:'10px'}}></span>
                    <Button type="primary" icon="minus-circle" onClick={() => this.minusCountCallReducers()}>减少</Button>
                    <span style={{paddingLeft:'10px'}}></span>
                    <Button type="danger" icon="redo-circle" onClick={() => this.clearRecord()}><Icon type="redo" theme="outlined" />重置record</Button>
                    <span style={{paddingLeft:'10px'}}></span>
                    <Button type="danger" icon="redo-circle" onClick={() => this.clearCurrent()}><Icon type="redo" theme="outlined" />重置current</Button>
                    <span style={{paddingLeft:'10px'}}></span>
                    <Button type="danger" icon="redo-circle" onClick={() => this.clearBoth()}><Icon type="redo" theme="outlined" />重置全部</Button>
                    <span style={{paddingLeft:'10px'}}></span>
                    <Button type="danger" icon="redo-circle" onClick={() => this.clearBothDirect()}><Icon type="redo" theme="outlined" />重置全部</Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        count: state.count,
    }
}
const _count = connect(mapStateToProps)(Count)

export default _count;