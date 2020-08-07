import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const pageQuery = graphql`
  query AboutHeroQuery {
    aboutYaml {
      heroTitle
      heroDetails
      heroImage
    }
  }
`;

const AboutHero = () => {
  const data = useStaticQuery(pageQuery);
  const about = data.aboutYaml;
  // console.log('about', about);

  return (
    <div className="rn-finding-us-area rn-finding-us bg_color--1">
      <div className="inner">
        <div className="content-wrapper">
          <div className="content">
            <h4 className="theme-gradient">{about.heroTitle}</h4>
            <p>{about.heroDetails}</p>
            <Link className="rn-btn btn-white" to="/contact">
              Get Started
            </Link>
          </div>
        </div>
        <div className="thumbnail">
          <div className="image">
            <img src={about.heroImage} alt="About Zeiq" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
