import React from 'react';
import { Link } from 'gatsby';
import { isNull } from 'lodash';
import * as FontAwesome from 'react-icons/fa';

const ServiceItem = ({ service }) => {
  const iconName = service.frontmatter.icon;
  const icon = !isNull(iconName)
    ? React.createElement(FontAwesome[iconName])
    : '';

  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
      <Link to={service.fields.slug}>
        <div className="service service__style--2">
          <div className="icon">{icon}</div>
          <div className="content">
            <h3 className="title">{service.frontmatter.title}</h3>
            <p>{service.frontmatter.info}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceItem;
