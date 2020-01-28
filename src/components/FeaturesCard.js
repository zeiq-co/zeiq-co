import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
`;

const FeaturesCard = () => (
  <Container className="col col-sm-6">
    <div className="card">
      <i className="fas fa-motorcycle" />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  </Container>
);

export default FeaturesCard;
