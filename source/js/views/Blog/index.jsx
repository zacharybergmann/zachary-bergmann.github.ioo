import React, { Component } from 'react';
import BlogPost from 'views/BlogPost';
import { blogs } from 'views/App';

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const blogs = [
    //   {
    //     id: 1,
    //     title: 'Something about TravisCI',
    //     location: '../../../assets/blogs/travis_ci.md',
    //   },
    //   {
    //     id: 2,
    //     title: 'Sequelize Story or Something like that',
    //     location: '../../../assets/blogs/sequelize.md',
    //   },
    // ];
    return (
      <div className='Blog'>
        <h1>Zachary's Blogs</h1>
        { console.log(this.props.blogs, 'this is the props in the blogs comp') }
        { blogs.map(blog => <BlogPost blog={ blog } key={ blog.title } />) }
      </div>
    );
  }
}
