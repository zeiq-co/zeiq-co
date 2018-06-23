import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import BlogFeaturedImage from '../components/BlogFeaturedImage';
import BlogList from '../components/BlogList';

export default class News extends React.Component {
  render() {
    const { data } = this.props;
    const { contentfulBlog: blog } = data;
    const { edges: blogs } = data.allContentfulBlogItem;
    // console.log(blogs);
    return (
      <div>
        <Helmet title="Blog | Zeiq" />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row blog-listing no-sidebar">
              <BlogFeaturedImage blog={blog} />
              <BlogList blogs={blogs} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export const query = graphql`
  query BlogQuery {
    contentfulBlog {
      featuredImage {
        file {
          url
        }
      }
      title
      description {
        description
      }
    }
    allContentfulBlogItem {
      edges {
        node {
          id
          image {
            file {
              url
            }
          }
          title
          description {
            description
          }
        }
      }
    }
  }
`;
