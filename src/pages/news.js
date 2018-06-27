import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import BlogFeaturedImage from '../components/BlogFeaturedImage';
import BlogList from '../components/BlogList';
import Seo from '../components/Seo';
import config from '../config';

export default class News extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: blogs } = data.allMediumPost;
    const blog = data.mediumPost;
    // console.log(blogs);
    return (
      <div>
        <Seo
          title="News"
          description="Read about the techs we use!"
          url={config.siteUrl}
          image="http://www.zeiq.co/img/zeiq-logo-offblack.png"
        />
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
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          virtuals {
            subtitle
            totalClapCount
            previewImage {
              imageId
            }
          }
          author {
            name
          }
          createdAt
          updatedAt
        }
      }
    }
    mediumPost {
      title
      uniqueSlug
      virtuals {
        subtitle
        previewImage {
          imageId
        }
      }
    }
  }
`;
