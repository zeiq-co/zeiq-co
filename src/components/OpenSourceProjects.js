import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5rem;
`;

const Item = styled.article`
  margin-bottom: 3rem;
`;

const query = graphql`
  query OpenSourceQuery {
    allMdx(filter: { frontmatter: { type: { eq: "opensource" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            info
            url
          }
        }
      }
    }
  }
`;

const OpenSourceProjects = () => {
  const data = useStaticQuery(query);
  const result = data.allMdx.edges;
  // console.log('projects', result);

  return (
    <div className="container">
      <div className="row blog-listing no-sidebar">
        <Container className="col-12">
          <div className="grid clearfix">
            {result.map(({ node }) => (
              <Item className="grid-item post has-thumbnail" key={node.id}>
                <div className="post-details">
                  <h4>
                    <a href={node.frontmatter.url}>{node.frontmatter.title}</a>
                  </h4>
                  <p>{node.frontmatter.info}</p>
                  <p className="meta clearfix">
                    <a href={node.frontmatter.url} className="read-more">
                      Details <i className="saulticon-arrow-forward" />
                    </a>
                  </p>
                </div>
              </Item>
            ))}
            <div className="grid-sizer" />
            <div className="gutter-sizer" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OpenSourceProjects;
