import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 1rem;
  .icon{
    font-size: 2rem;
    color: #33B769;
  }
  .card-text{
    margin-top:0.5rem;
  }
`;

const FeaturesCard = ({ icon, text,title }) => (
  <Container className="col col-sm-6">
    <div className="card">
      <span className="d-inline icon">
        <i className={icon} />
      </span>
      <div className="card-body">
        <h4 className="d-inline">{title}</h4>
        <p className="card-text">
         {text}
        </p>
      </div>
    </div>
  </Container>
);

export default FeaturesCard;
