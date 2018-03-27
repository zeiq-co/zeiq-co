import React from 'react';
import Link from 'gatsby-link';
import BlogFeaturedImage from '../components/BlogFeaturedImage';
import BlogList from '../components/BlogList';

export default class Blog extends React.Component {
  render() {
    return (
      <main id="content" className="white-background">
        <div className="container">
          <div className="row blog-listing no-sidebar">
            <BlogFeaturedImage />
            <BlogList />
          </div>
        </div>
      </main>
    );
  }
}
