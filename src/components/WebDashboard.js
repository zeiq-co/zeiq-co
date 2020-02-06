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
  .row {
    margin-top: 5rem;
  }
`;

const WebDashboard = ({ data }) => (
  <Container className="container">
    <h2 className="text-center">Web Dashboard</h2>
    <img src="/images/app/dashboard.jpg" alt="..." className="img-thumbnail" />
    <div className="container">
      <div className="row">
        {data.map(items => (
          <FeaturesCard
            icon={items.icon}
            title={items.title}
            text={items.text}
          />
        ))}
      </div>
    </div>
  </Container>
);

export default WebDashboard;
