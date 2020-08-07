import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Image = styled.div`
  &&& {
    background-image: url(${(props) => props.bgImage});
  }
`;

class PortfolioList extends Component {
  render() {
    const { column, styevariation, projects } = this.props;

    return (
      <>
        {projects.map(({ node: project }) => {
          const image =
            project.frontmatter.featuredImage !== null
              ? project.frontmatter.featuredImage.childImageSharp.fluid.base64
              : undefined;

          return (
            <div className={`${column}`} key={project.id}>
              <div className={`portfolio ${styevariation}`}>
                <div className="thumbnail-inner">
                  <Image className="thumbnail" bgImage={image} />
                  <Image className="bg-blr-image" bgImage={image} />
                </div>
                <div className="content">
                  <div className="inner">
                    <p>{project.frontmatter.category}</p>
                    <h4>
                      <Link to={project.fields.slug}>
                        {project.frontmatter.title}
                      </Link>
                    </h4>
                    <div className="portfolio-button">
                      <Link className="rn-btn" to={project.fields.slug}>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default PortfolioList;
