import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Login from './routes/Login';
import TodoList from './routes/TodoList';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={IndexPage} />
        {/* path: url, component: 加载的页面组件 */}
        <Route path="/products" exact component={Products} />
        <Route path="/todoList" exact component={TodoList}></Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
