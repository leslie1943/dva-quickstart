import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button, Form, Input} from 'antd';
import styles from './LoginStyles';
const FormItem = Form.Item;

const Login = ({
    login,
    dispatch,
    form:{
        getFieldDecorator,
        validateFieldsAndScroll
    }
}) => {
    const { loginLoading} = login;
    let uri = 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png';
    function handleOK (){
        validateFieldsAndScroll((err,value) =>{
            if(err){
                return;
            }
            console.info('[In path routes]:');
            console.info(value);
            dispatch({type: 'login/login', payload: value});
        })
    }
    return (
        <div style={styles.login}>
            <div style={styles.loginView}>

                <div style={styles.loginHead}>
                    <img style={styles.loginImg} src={uri} alt="test"/>
                    <span style={styles.loginText}>Dva Login Test</span>
                </div>

                 <div style={styles.loginBody}>
                    <form style={{width: '80%'}}>
                        <FormItem hasFeedback>
                            {getFieldDecorator('username',{
                                rules:[{required: true}]
                            })(<Input size="large" onPressEnter={handleOK} placeholder="用户名"></Input>)}
                        </FormItem>

                        <FormItem hasFeedback>
                            {getFieldDecorator('password',{
                                rules:[{required: true, hasFeedback:true}]
                            })(<Input size="large" type="password" onPressEnter={handleOK} placeholder="密码"></Input>)}
                        </FormItem>

                        <Button style={styles.loginButton} type="primary" size="large" onClick={handleOK} loading={loginLoading}>登录</Button>
                    </form>
                 </div>
            </div>
        </div>
    )
};

Login.propTypes = {
    form: PropTypes.object,
    login: PropTypes.object,
    dispatch: PropTypes.func,
}
  
export default connect(({login}) => ({login}))(Form.create()(Login));
