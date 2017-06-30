import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from 'views/Dashboard';
import Blog from 'views/Blog';
import Projects from 'views/Projects';
import About from 'views/About';
import NotFound from 'views/NotFound';
import Menu from 'components/Global/Menu';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
  BLOG: `${ publicPath }blog`,
  PROJECTS: `${ publicPath }projects`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Menu />
          <div className='Page'>
            <Switch>
              <Route exact path={ publicPath } component={ Dashboard } />
              <Route path={ routeCodes.BLOG } component={ Blog } />
              <Route path={ routeCodes.ABOUT } component={ About } />
              <Route path={ routeCodes.PROJECTS } component={ Projects } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
