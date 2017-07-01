import React, { Component } from 'react';
import BlogPost from 'views/BlogPost';

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
    return (
      <div className='Blog'>
        <h1>Zachary's Blogs</h1>
        { blogs.map(blog => <BlogPost blog={ blog } key={ blog.title } />) }
      </div>
    );
  }
}
