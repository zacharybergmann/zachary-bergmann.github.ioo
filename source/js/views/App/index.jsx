import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from 'views/Dashboard';
import Blog from 'views/Blog';
import Projects from 'views/Projects';
import About from 'views/About';
import Menu from 'components/Global/Menu';
import BlogStory from 'views/BlogStory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const publicPath = '/';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: '#3f51b5',
  },
});

const style = {
  backgroundColor: '#888888',
  height: '600px',
};

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
  BLOG: `${ publicPath }blog`,
  PROJECTS: `${ publicPath }projects`,
  BLOGSTORY: `${ publicPath }blogstory/:id`,
};

const blogs = [
  {
    id: 1,
    title: 'Something about TravisCI',
    location: '../../../assets/blogs/travis_ci.md',
  },
  {
    id: 2,
    title: 'Sequelize Story or Something like that',
    location: '../../../assets/blogs/sequelize.md',
  },
];

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <BrowserRouter>
          <div style={ style } className='App'>
            <Menu />
            <div className='Page'>
              <Switch>
                <Route exact path={ publicPath } component={ Dashboard } />
                <Route path={ routeCodes.BLOG } component={ Blog } />
                <Route path={ routeCodes.ABOUT } component={ About } />
                <Route path={ routeCodes.PROJECTS } component={ Projects } />
                <Route path={ routeCodes.BLOGSTORY } component={ BlogStory } blogs={ blogs } />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
