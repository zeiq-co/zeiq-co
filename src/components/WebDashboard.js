import React from 'react';
import styled from 'styled-components';

import FeaturesCard from './FeaturesCard';

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 3rem;
  img {
    margin-top: 2rem;
    height: 20rem;
  }
`;

const WebDashboard = () => (
  <Container className="container">
    <h2 className="text-center">Web Dashboard</h2>
    <img src="/images/app/dashboard.jpg" alt="..." className="img-thumbnail" />
    <div className="row">
      <FeaturesCard />
      <FeaturesCard />
      <FeaturesCard />
      <FeaturesCard />
      <FeaturesCard />
      <FeaturesCard />
    </div>
  </Container>
);

export default WebDashboard;
