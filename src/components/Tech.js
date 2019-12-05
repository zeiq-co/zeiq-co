import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TechItem from './TechItem';

const query = graphql`
  query TechQuery {
    allMdx(filter: { frontmatter: { type: { eq: "tech" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
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

const Tech = () => {
  const data = useStaticQuery(query);
  const result = data.allMdx.edges;
  console.log('tech', result);

  return (
    <div className="brand-gallery">
      <div className="row eq-height-container">
        {result.map(item => (
          <TechItem key={item.node.id} data={item.node} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
