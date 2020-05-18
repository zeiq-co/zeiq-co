import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TeamMember from './TeamMember';

const query = graphql`
  query TeamQuery {
    allMdx(
      sort: { fields: frontmatter___order, order: ASC }
      filter: { frontmatter: { type: { eq: "team" } } }
    ) {
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
          <h3>
            The people who work at Zeiq share the vision and values of our
            community.
          </h3>
          <p>
            We’re driven by the idea that the best work is born from diligence,
            craftsmanship and fun.
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
