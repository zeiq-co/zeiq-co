import React, { Component } from 'react';
import styled from 'styled-components';

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
                      <a href={project.fields.slug}>
                        {project.frontmatter.title}
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <a className="rn-btn" href={project.fields.slug}>
                        View Details
                      </a>
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
