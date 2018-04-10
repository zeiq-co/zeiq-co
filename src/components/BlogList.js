import React from 'react';
import Link from 'gatsby-link';
import BlogItem from './BlogItem';

const BlogList = ({blogs}) => (
  <div className="col-12">
    <div
      className="grid clearfix"
      data-masonry="{ &quot;itemSelector&quot;: &quot;.grid-item&quot;, &quot;columnWidth&quot;: &quot;.grid-sizer&quot;, &quot;gutter&quot;: &quot;.gutter-sizer&quot;, &quot;percentPosition&quot;: true, &quot;transitionDuration&quot;: &quot;0.3s&quot; }"
    >
      {blogs.map (blog => <BlogItem key={blog.node.id} data={blog.node} />)}
      {/* <article className="grid-item post has-thumbnail">
        <Link to="/post" className="feature-image-link">
          <img src="tmp/sample-post.png" alt="" />
        </Link>
        <div className="post-details">
          <h4>
            <a href="post.html">
              Customer Journey Maps - What They Are and How to Build One
            </a>
          </h4>
          <p>
            Designing past mobile or desktop interaction boundaries and into
            the&hellip;
          </p>
          <p className="meta clearfix">
            <a href="#" className="author-link">
              Mike Spencer
            </a>{' '}
            <a href="post.html" className="read-more">
              Details <i className="saulticon-arrow-forward" />
            </a>
          </p>
        </div>
      </article>
      <article className="grid-item post has-thumbnail">
        <a href="post.html" className="feature-image-link">
          <img src="tmp/sample-post.png" alt="" />
        </a>
        <div className="post-details">
          <h4>
            <a href="post.html">How to Build an Effective Design Framework</a>
          </h4>
          <p>
            With our top of the line execution &amp; as an innovative team we
            take a broad&hellip;
          </p>
          <p className="meta clearfix">
            <a href="#" className="author-link">
              Rory Thompson
            </a>{' '}
            <a href="post.html" className="read-more">
              Details <i className="saulticon-arrow-forward" />
            </a>
          </p>
        </div>
      </article>
      <article className="grid-item post has-thumbnail">
        <a href="post.html" className="feature-image-link">
          <img src="tmp/sample-post.png" alt="" />
        </a>
        <div className="post-details">
          <h4>
            <a href="post.html">
              Evolving Emojis: Designing for the New Face of Messaging
            </a>
          </h4>
          <p>
            Information is easy to access at a fast rate through the use
            of&hellip;
          </p>
          <p className="meta clearfix">
            <a href="#" className="author-link">
              Rory Thompson
            </a>{' '}
            <a href="post.html" className="read-more">
              Details <i className="saulticon-arrow-forward" />
            </a>
          </p>
        </div>
      </article>
      <article className="grid-item post has-thumbnail">
        <a href="post.html" className="feature-image-link">
          <img src="tmp/sample-post.png" alt="" />
        </a>
        <div className="post-details">
          <h4>
            <a href="post.html">
              Prototyping with Real Data - A Framer Tutorial
            </a>
          </h4>
          <p>
            To reach the maximum potential of digital marketing firms use social
            media&hellip;
          </p>
          <p className="meta clearfix">
            <a href="#" className="author-link">
              Rory Thompson
            </a>{' '}
            <a href="post.html" className="read-more">
              Details <i className="saulticon-arrow-forward" />
            </a>
          </p>
        </div>
      </article>
      <article className="grid-item post has-thumbnail">
        <a href="post.html" className="feature-image-link">
          <img src="tmp/sample-post.png" alt="" />
        </a>
        <div className="post-details">
          <h4>
            <a href="post.html">
              Creating Mind-bending Illustrations with Sketch and Looper in No
              Time
            </a>
          </h4>
          <p>
            Through this a business can create a system in which they are able
            to pinpoint behavioral patterns&hellip;
          </p>
          <p className="meta clearfix">
            <a href="#" className="author-link">
              Rory Thompson
            </a>{' '}
            <a href="post.html" className="read-more">
              Details <i className="saulticon-arrow-forward" />
            </a>
          </p>
        </div>
      </article>
      <article className="grid-item post has-thumbnail">
        <a href="post.html" className="feature-image-link">
          <img src="tmp/sample-post.png" alt="" />
        </a>
        <div className="post-details">
          <h4>
            <a href="post.html">
              A Product Designer's Guide to Competitive Analysis
            </a>
          </h4>
          <p>
            Yet brands must be careful not to be excessive on the use of this
            type of marketing, as well as solely&hellip;
          </p>
          <p className="meta clearfix">
            <a href="#" className="author-link">
              Mike Spencer
            </a>{' '}
            <a href="post.html" className="read-more">
              Details <i className="saulticon-arrow-forward" />
            </a>
          </p>
        </div>
      </article>
      <article className="grid-item post has-thumbnail">
        <a href="post.html" className="feature-image-link">
          <img src="tmp/sample-post.png" alt="" />
        </a>
        <div className="post-details">
          <h4>
            <a href="post.html">A Rant against Pretty Designs</a>
          </h4>
          <p>
            Designing past mobile or desktop interaction boundaries and into
            the&hellip;
          </p>
          <p className="meta clearfix">
            <a href="#" className="author-link">
              Rory Thompson
            </a>{' '}
            <a href="post.html" className="read-more">
              Details <i className="saulticon-arrow-forward" />
            </a>
          </p>
        </div>
      </article>
      <article className="grid-item post has-thumbnail">
        <a href="post.html" className="feature-image-link">
          <img src="tmp/sample-post.png" alt="" />
        </a>
        <div className="post-details">
          <h4>
            <a href="post.html">
              Design for Emotion to Increase User Engagement
            </a>
          </h4>
          <p>
            In the past, storing it would’ve been a problem but new technologies
            have eased the burden&hellip;
          </p>
          <p className="meta clearfix">
            <a href="#" className="author-link">
              Mike Spencer
            </a>{' '}
            <a href="post.html" className="read-more">
              Details <i className="saulticon-arrow-forward" />
            </a>
          </p>
        </div>
      </article>
      <article className="grid-item post has-thumbnail">
        <a href="post.html" className="feature-image-link">
          <img src="tmp/sample-post.png" alt="" />
        </a>
        <div className="post-details">
          <h4>
            <a href="post.html">
              How to Create Custom Loading Animations to Decrease Bounce Rates
            </a>
          </h4>
          <p>
            Data comes in all types of formats, from structured, numeric data in
            traditional databases&hellip;
          </p>
          <p className="meta clearfix">
            <a href="#" className="author-link">
              Rory Thompson
            </a>{' '}
            <a href="post.html" className="read-more">
              Details <i className="saulticon-arrow-forward" />
            </a>
          </p>
        </div>
      </article> */}
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
