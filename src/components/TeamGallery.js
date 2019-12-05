import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TeamMember from './TeamMember';

const query = graphql`
  query TeamQuery {
    allMdx(filter: { frontmatter: { type: { eq: "team" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            position
            twitterId
            linkedInId
            instagramId
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

const TeamGallery = () => {
  const data = useStaticQuery(query);
  const result = data.allMdx.edges;
  // console.log('tech', result);

  return (
    <div className="team-gallery">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <h1 className="no-bottom">We guys</h1>
          <h3>are always game</h3>
          <p>
            A small closely knit team of cool folks. We’re professionals,
            although we dont wear ties.
          </p>
        </div>
        {result.map(teamMember => (
          <TeamMember key={teamMember.node.id} data={teamMember.node} />
        ))}
      </div>
    </div>
  );
};

export default TeamGallery;
