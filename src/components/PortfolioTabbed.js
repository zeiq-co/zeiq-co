import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

class PortfolioTabbed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: 0,
      tab2: 0,
      tab3: 0,
      tab4: 0,
      isOpen: false,
    };
  }

  render() {
    const { column, projects } = this.props;
    const { tab1, tab2, tab3, tab4, isOpen } = this.state;

    return (
      <div>
        <Tabs>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tablist-inner">
                <TabList className="pv-tab-button text-center mt--0">
                  <Tab>
                    <span>All Project</span>
                  </Tab>
                  <Tab>
                    <span>Web Design</span>
                  </Tab>
                  <Tab>
                    <span>Logo Design</span>
                  </Tab>
                  <Tab>
                    <span>Mobile App</span>
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>

          <TabPanel className="row row--35">
            {projects.map(({ node: project }) => {
              const image =
                project.frontmatter.featuredImage !== null
                  ? project.frontmatter.featuredImage.childImageSharp.fluid
                  : undefined;

              return (
                <div className={`${column}`} key={project.id}>
                  <div className="item-portfolio-static">
                    <div>
                      <div className="portfolio-static">
                        <div className="thumbnail-inner">
                          <div className="thumbnail">
                            <Link to={project.fields.slug}>
                              <Img
                                className="w-100 h-400"
                                alt={project.frontmatter.title}
                                fluid={image}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="content">
                          <div className="inner">
                            <p>{project.frontmatter.category}</p>
                            <h4>
                              <Link to={project.fields.slug}>
                                {project.frontmatter.title}
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default PortfolioTabbed;
