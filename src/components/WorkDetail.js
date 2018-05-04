import React from 'react';
import Link from 'gatsby-link';

const WorkDetail = ({work}) => (
  <div>
    <div className="post-featured-image">
      <img src={work.image.file.url} alt="featured" />
    </div>
    <div className="page-title-container">
      <h2>{work.title}</h2>
      <p className="subtitle">{work.description.description}</p>
    </div>
    <div className="col">
      <h4>Full column</h4>
      <p>
        He slid back into his former position. "Getting up early
        all the time", he thought, "it makes you stupid. You've
        got to get enough sleep. However hard he threw himself
        onto his right, he always rolled back to where he was. He
        must have tried it a hundred times, shut his eyes so that
        he wouldn't have to look at the floundering legs, and only
        stopped when he began to feel a mild, dull pain there that
        he had never felt before.
      </p>
    </div>
    <div className="col">
      <h4>Full column</h4>
      <p>
        He slid back into his former position. "Getting up early
        all the time", he thought, "it makes you stupid. You've
        got to get enough sleep. However hard he threw himself
        onto his right, he always rolled back to where he was. He
        must have tried it a hundred times, shut his eyes so that
        he wouldn't have to look at the floundering legs, and only
        stopped when he began to feel a mild, dull pain there that
        he had never felt before.
      </p>
    </div>
  </div>
);

export default WorkDetail;
