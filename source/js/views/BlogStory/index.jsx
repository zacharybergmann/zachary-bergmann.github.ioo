import React from 'react';
import Markdown from 'react-markdown';

const BlogStory = (props) => {
  const blogId = props.match.params.id;
  return (
    <div>
      <Markdown src={ props.blogs.filter(blog => blog.id === blogId)[0].location } />
    </div>

  );
};

export default BlogStory;
