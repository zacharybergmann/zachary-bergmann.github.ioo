import React from 'react';
import Markdown from 'react-markdown';
import { blogs } from 'views/App';

const BlogStory = (props) => {
  const blogId = props.match.params.id;
  console.log(props, 'this is the blog id');
  return (
    <div>
      <Markdown source={ blogs.filter(blog => blog.id === blogId)[0] } />
    </div>

  );
};

export default BlogStory;
