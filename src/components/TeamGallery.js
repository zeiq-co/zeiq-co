import React from 'react';
import Link from 'gatsby-link';
import TeamMember from './TeamMember';

const TeamGallery = ({ team }) => (
  <div className="team-gallery">
    <div className="row">
      <div className="col-md-6 col-lg-4">
        <h1 className="no-bottom">We guys</h1>
        <h3>are always game</h3>
        <p>
          A small closely knit team of cool folks. We’re professionals, although
          we dont wear ties.
        </p>
        <p className="extra-margin-bottom">
          CHA-CHING!<br /> <a href="#">We’re Hiring!!!</a>
        </p>
      </div>
      {team.map(teamMember => (
        <TeamMember key={teamMember.node.id} data={teamMember.node} />
      ))}
    </div>
  </div>
);

export default TeamGallery;
