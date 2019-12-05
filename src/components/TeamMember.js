import React from 'react';
import Img from 'gatsby-image';

const TeamMember = ({ data }) => (
  <div className="col-md-6 col-lg-4">
    <div className="team-member">
      <Img fluid={data.frontmatter.featuredImage.childImageSharp.fluid} />
      <div className="team-member-details">
        <h4>{data.frontmatter.title}</h4>
        <p>{data.frontmatter.position}</p>
        <p className="social-links">
          <a
            href={data.frontmatter.twitterId}
            className="social-link saulticon"
            target="_blank">
            twitter
          </a>
          <a
            href={data.frontmatter.linkedInId}
            className="social-link saulticon"
            target="_blank">
            linkedin
          </a>
          <a
            href={data.frontmatter.instagramId}
            className="social-link saulticon"
            target="_blank">
            instagram
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default TeamMember;
