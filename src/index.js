import dva from 'dva';
import './index.css';
// import initData from './initDemoData/index';

// 1. Initialize
const app = dva({
    // initialState: initData,
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

/**
 * 下面两种模式都运行.
 * products_1: 在 effects 处理完逻辑之后, 在reducer里修改state.
 * 
 * products_2: 在 effects 里接收/传递参数, 在reducer里处理逻辑并修改 state
 */
app.model(require('./models/products_1').default);// 可以运行
// app.model(require('./models/products_2').default); // 可以运行


app.model(require('./models/login').default);
app.model(require('./models/todoList').default);
app.model(require('./models/count').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
