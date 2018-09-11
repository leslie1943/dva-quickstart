/**
 * dva通过model的概念把一个领域的模型管理起来,包含
 *  【💗💗 reducers (VUEX里的 mutation) ====>>>>> 处理数据 】同步更新 state 的 reducers: key/value形式的格式定义reducer.用于处理同步操作，唯一可以修改state的地方，有action触发.格式为 
 *              (state,action) => newState
 *                      或者
 *              [(state,action) => newState,enhancer]    尽量制作state的数据返回,不做逻辑
 *  【💗💗 effects (VUEX里的action) ====>>>>> 接收数据 】 处理异步逻辑的effects
 *  【💗💗 subsriptions ====>>>>> 监听数据 】以key/value的格式定义subsription, subscription是订阅，用于订阅一个数据源，然后根据需要dispatch相应的action.在app.start()时被执行,数据源可以是当前的时间,服务器的websocket连接,keyboard输入,geolocation变化,history路由变化的等等
 *   格式为 ({dispatch,history},done) => unlistenFunction
 */
export default {
  namespace: "products", //表示在全局state上的key
  state:{}, // 初始值
  reducers: { // 接收action,同步更新state.
    delete(state, {payload: id}) {
      return state.filter(item => item.id !== id)
    },
  },
  /*
  effects:{
    *save({payload:todo},{put,call}){
         // 调用saveTodoToServer，成功后触发'add' action 保存到state
         yield call(saveTodoToServer,todo);
         yield put({type:'add',payload: todo});
         yield put(routerRedux.push('/main')); //路由跳转
      }
  }

  put 用来发起一条action.
  call 以异步的方式调用函数.
  select 从 state 中获取相关的数据
  take 获取发送的数据
  */
}
// 在 index.js 里载入.
