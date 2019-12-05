import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      mdx(frontmatter: { type: { eq: "social" } }) {
        frontmatter {
          facebookId
          twitterId
          linkedInId
          instagramId
          mediumId
          githubId
        }
      }
    }
  `);
  const social = data.mdx.frontmatter;

  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="widget-area">
              <div className="widget widget_text">
                <p>
                  <Link to="/" className="mini-logo">
                    <img
                      src="/img/zeiq-logo-offblack.png"
                      width="144"
                      height="43"
                      alt="zeiq"
                    />
                  </Link>
                </p>
              </div>
              <div className="widget widget_nav_menu">
                <nav>
                  <ul>
                    <li>
                      <a
                        href={social.facebookId}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href={social.twitterId}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href={social.linkedInId}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href={social.instagramId}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href={social.mediumId}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Medium
                      </a>
                    </li>
                    <li>
                      <a
                        href={social.githubId}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
