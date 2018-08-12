import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layout/BasicLayout';
import ArticleShow from './routes/ArticleShow';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BasicLayout} />
        <Route path="/article/:query" component={ArticleShow} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
