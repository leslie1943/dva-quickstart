import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
// import Products from './routes/Products';
import Login from './routes/Login';
import TodoList from './routes/TodoList';
import Count from './routes/Count';
import Products from './routes/Products';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* path: url, component: 加载的页面组件 */}

        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/todoList" exact component={TodoList}></Route>
        <Route path="/count" exact component={Count}></Route>
        <Route path="/products" exact component={Products}></Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
