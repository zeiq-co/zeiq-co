import React from 'react';

const TeamMember = ({ data }) => (
  <div className="col-md-6 col-lg-4">
    <div className="team-member">
      <img src={data.image.file.url} alt="member" />
      <div className="team-member-details">
        <h4>{data.name}</h4>
        <p>{data.position}</p>
        <p className="social-links">
          <a href={data.facebookId} className="social-link saulticon">
            facebook
          </a>
          <a href={data.twitterId} className="social-link saulticon">
            twitter
          </a>
          <a href={data.linkedInId} className="social-link saulticon">
            linkedin
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default TeamMember;
