import React from 'react';
import Link from 'gatsby-link';
import BlogItem from './BlogItem';

const BlogList = ({ blogs }) => (
  <div className="col-12">
    <div
      className="grid clearfix"
      data-masonry="{ &quot;itemSelector&quot;: &quot;.grid-item&quot;, &quot;columnWidth&quot;: &quot;.grid-sizer&quot;, &quot;gutter&quot;: &quot;.gutter-sizer&quot;, &quot;percentPosition&quot;: true, &quot;transitionDuration&quot;: &quot;0.3s&quot; }"
    >
      {blogs.map(blog => <BlogItem key={blog.node.id} data={blog.node} />)}
      <div className="grid-sizer" />
      <div className="gutter-sizer" />
    </div>
    <p className="text-center">
      <a href="#" className="button white big">
        Load more posts&hellip;
      </a>
    </p>
  </div>
);

export default BlogList;
