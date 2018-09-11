/**
 * dva通过model的概念把一个领域的模型管理起来,包含
 *  【💗 reducers (VUEX里的 mutation) ====>>>>> 处理数据 】同步更新(commit) state 的 reducers: key/value形式的格式定义reducer.用于处理同步操作，唯一可以修改state的地方，有action触发.格式为 
 *              (state,action) => newState
 *                      或者
 *              [(state,action) => newState,enhancer]    尽量制作state的数据返回,不做逻辑
 *  【💗 effects (VUEX里的action) ====>>>>> 接收数据 】 处理异步逻辑的effects
 *  【💗 subsriptions ====>>>>> 监听数据 】以key/value的格式定义subsription, subscription是订阅，用于订阅一个数据源，然后根据需要dispatch相应的action.在app.start()时被执行,数据源可以是当前的时间,服务器的websocket连接,keyboard输入,geolocation变化,history路由变化的等等
 *   格式为 ({dispatch,history},done) => unlistenFunction
 * 
 *  put 用来发起一条action.
 *  call以异步的方式调用函数.
 *  select从state中获取相关的数据
 *  take获取发送的数据
 */
import { routerRedux } from 'dva/router';

// 可以替换成为 某个api的方法名,执行后台操作
const delay = timeout => new Promise(resolve => setTimeout(resolve,timeout));

export default {
    namespace: 'login', //表示在全局state上的key
    state:{
        loginLoading: false, // 初始值
        user: "",
        pwd: "",
    },
    subscriptions: {
        setup({ dispatch, history }) {
        },
    },
    effects:{
        *login({payload},{call,put}){
            yield put({type: 'showLoginLoading', payload:{user: payload.username,pwd: payload.password}});

            // 'delay' 可以替换成为 某个api的方法名,执行后台操作
            // 同时可以定义返回值，实现逻辑操作.
            // const res = yield call('api_method_name')
            // if(res.status){}else{}
            yield call(delay,payload, 2000); // call 以异步的方式调用函数
            yield put ({type: 'hideLoginLoading', payload:{user: payload.username,pwd: payload.password}});

            yield call(delay,payload, 2000);
            yield put(routerRedux.push('/products'));
        }
    },
    reducers:{
        showLoginLoading(state,payload){
            console.info('[In path models]:showLoginLoading');
            console.info(state);
            console.info(payload);
            return {
                loginLoading: true,
                user: payload.user,
                pwd: payload.pwd,
            }
        },
        hideLoginLoading(state,payload){
            console.info('[In path models]:hideLoginLoading');
            console.info(state);
            console.info(payload);
            return {
                loginLoading: false,
                user: payload.user,
                pwd: payload.pwd,
            }
        },
    }
};