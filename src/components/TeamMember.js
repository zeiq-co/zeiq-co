import React from 'react';
import Img from 'gatsby-image';

const TeamMember = ({ data }) => (
  <div className="col-md-6 col-lg-4">
    <div className="team-member">
      {/* <Img
        sizes={data.image.sizes}
        alt={data.image.title}
        title={data.image.title}
        backgroundColor="#f1f1f1"
      /> */}
      <div className="team-member-details">
        <h4>{data.name}</h4>
        <p>{data.position}</p>
        <p className="social-links">
          <a
            href={data.twitterId}
            className="social-link saulticon"
            target="_blank">
            twitter
          </a>
          <a
            href={data.linkedInId}
            className="social-link saulticon"
            target="_blank">
            linkedin
          </a>
          <a
            href={data.instagramId}
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
