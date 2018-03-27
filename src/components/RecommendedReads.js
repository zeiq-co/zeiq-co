import React from 'react';
import Link from 'gatsby-link';

const RecommendedReads = () => (
  <div className="other-posts col-12 extra-margin-bottom">
    <h5>Recommended reads</h5>
    <div className="owl-carousel owl-thumbs-2">
      <div className="thumb">
        <a href="post.html">
          <img src="tmp/sample-post.png" alt="" />
          <span className="info">
            <span className="overlay" />
            <span className="text">
              Customer Journey Maps - What They Are and How to Build One
            </span>
            <i className="saulticon-arrow-forward" />
          </span>
        </a>
      </div>
      <div className="thumb">
        <a href="post.html">
          <img src="tmp/sample-post.png" alt="" />
          <span className="info">
            <span className="overlay" />
            <span className="text">
              Evolving Emojis: Designing for the New Face of Messaging
            </span>
            <i className="saulticon-arrow-forward" />
          </span>
        </a>
      </div>
      <div className="thumb">
        <a href="post.html">
          <img src="tmp/sample-post.png" alt="" />
          <span className="info">
            <span className="overlay" />
            <span className="text">
              A Product Designer's Guide to Competitive Analysis
            </span>
            <i className="saulticon-arrow-forward" />
          </span>
        </a>
      </div>
    </div>
  </div>
);

export default RecommendedReads;
