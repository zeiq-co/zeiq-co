import React from 'react';
import TeamMember from './TeamMember';

const team = [
  {
    id: 1,
    name: '',
    position: '',
    twitterId: '',
    linkedInId: '',
    instagramId: '',
    image: '',
  },
];

const TeamGallery = () => (
  <div className="team-gallery">
    <div className="row">
      <div className="col-md-6 col-lg-4">
        <h1 className="no-bottom">We guys</h1>
        <h3>are always game</h3>
        <p>
          A small closely knit team of cool folks. We’re professionals, although
          we dont wear ties.
        </p>
      </div>
      {team.map(teamMember => (
        <TeamMember key={teamMember.id} data={teamMember} />
      ))}
    </div>
  </div>
);

export default TeamGallery;
