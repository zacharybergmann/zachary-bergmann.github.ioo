import React, { Component } from 'react';

const blogs = [
  {
    title: 'Using TravisCI for continuous integration to GitHub organizations',
    publishedDate: 'June 6, 2017',
    image: '',
    file: 'travis_ci_continuous_gh.md',
  },
  {
    title: 'Using Sequelize ORM to manage relationships in a PostgreSQL database',
    publishedDate: 'May 30, 2017',
    image: '',
    file: './blogs/sequelize_w_postgres.md',
  },
];

export default class Blog extends Component {
  render() {
    return (
      <div className='Blog'>
        <h1>Zachary's Blogs</h1>

        <p>
          Blogs Blogs Blogs Marvin is internal project by <a href='https://work.co'>Work & Co</a>.
          We love React and use it a lot. So Marvin is meant to be a starting point
          for our React projects. But as we love open source too, it is publicly
          available for anyone interested in using it.
        </p>
        <p>
          Visit documentation
          on <a href='https://github.com/workco/react-redux-webpack2-boilerplate'>GitHub</a>
        </p>
      </div>
    );
  }
}
