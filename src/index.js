import dva from 'dva';
import './index.css';
import initData from './initDemoData/index';

// 1. Initialize
const app = dva({
    initialState: initData,
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);
app.model(require('./models/login').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
