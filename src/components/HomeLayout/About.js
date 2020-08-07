import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const pageQuery = graphql`
  query AboutPageQuery {
    aboutYaml {
      whatWeDo
      whoWeAre
      details
      featuredImage
    }
  }
`;

const About = () => {
  const data = useStaticQuery(pageQuery);
  const about = data.aboutYaml;
  // console.log('about', about);

  return (
    <>
      <div className="about-wrapper">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="thumbnail">
                <img
                  className="w-100"
                  src={about.featuredImage}
                  alt="About Images"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-inner inner">
                <div className="section-title">
                  <h2 className="title">About</h2>
                  <p className="description">{about.details}</p>
                </div>
                <div className="row mt--30 mt_sm--10">
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about-us-list">
                      <h3 className="title">Who we are</h3>
                      <p>{about.whoWeAre}</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about-us-list">
                      <h3 className="title">Who we are</h3>
                      <p>{about.whatWeDo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
