import React from 'react';
import styled from 'styled-components';

import FeaturesCard from './FeaturesCard';

const Container = styled.div`
  img {
    height: 35rem;
  }
`;

const Features = () => (
  <Container className="container">
    <div className="row">
      <div className="col">
        <img
          src="/images/app/screen-1.png"
          alt="..."
          className="img-thumbnail"
        />
      </div>
      <div className="col col-sm-8">
        <div className="container">
          <h3>Bootstrap heading</h3>
          <div className="row">
            <FeaturesCard />
            <FeaturesCard />
            <FeaturesCard />
            <FeaturesCard />
            <FeaturesCard />
            <FeaturesCard />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Features;
