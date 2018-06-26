import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import PostContent from '../components/PostContent';
import PostFeaturedImage from '../components/PostFeaturedImage';
import RecommendedReads from '../components/RecommendedReads';
import AuthorInfo from '../components/AuthorInfo';
import PostShare from '../components/PostShare';

export default class Post extends React.Component {
  render() {
    return (
      <div>
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <PostFeaturedImage />
              </div>
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <PostContent />
                <div className="row post-footer">
                  <PostShare />
                  <div className="col-12">
                    <div className="sep" />
                  </div>
                  <RecommendedReads />
                  <AuthorInfo />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
