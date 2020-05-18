import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const TechItem = ({ data }) => (
  <div className="col-6 col-md-4 col-lg-2">
    <Link
      title={data.frontmatter.title}
      to={`/tech/${data.fields.slug}/`}
      className="brand-item eq-height"
    >
      {data.frontmatter.featuredImage && (
        <Img fluid={data.frontmatter.featuredImage.childImageSharp.fluid} />
      )}
    </Link>
  </div>
);

export default TechItem;
