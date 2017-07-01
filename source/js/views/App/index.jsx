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

export const blogs = [
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

export const projects = [
  {
    name: 'LangSnap',
    deployedUrl: 'http://www.github.com',
    image: './images/bargainhound.jpg',
    description: 'A customizable language learning experience focused on transitioning from phrases to fluency',
  },
  {
    name: 'Bargain Hound',
    deployedUrl: 'http://bargainhound.zacharybergmann.com',
    image: './images/bargainhound.jpg',
    description: 'Identifying publicly traded stocks that may be a bargain',
  },
  {
    name: 'Spork',
    deployedUrl: 'http://www.github.com',
    image: './images/spork.jpg',
    description: 'Sharing leftovers with friends to create delicious meals with a social atmosphere'
  },
  {
    name: 'PickUp',
    deployedUrl: 'http://pickup.zacharybergmann.com',
    image: './images/pickup_how_to.jpg',
    description: 'An internet and text interface for joining and creating pick-up sports games',
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <BrowserRouter>
          <div style={ style } className='App'>
            <Menu />
            <div className='Page'>
              <Switch>
                <Route exact path={ publicPath } component={ Dashboard } />
                <Route exact path={ routeCodes.BLOG } component={ Blog } />
                <Route path={ routeCodes.ABOUT } component={ About } />
                <Route path={ routeCodes.PROJECTS } component={ Projects } />
                <Route path={ routeCodes.BLOGSTORY } component={ BlogStory } />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
