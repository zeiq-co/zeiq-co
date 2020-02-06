import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 7rem;
  margin-bottom: 3rem;
  h5 {
    margin-top: -15px;
  }
`;

const BuyNowSection = () => (
  <Container className="container">
    <div className="row">
      <div className="col">
        <h1 style={{ fontSize: 35 }}>Ready to start your business ?</h1>
        <h5 className="text-color">Buy now for 5000$</h5>
      </div>
      <div className="col">
        <div className="d-flex justify-content-center">
          <Link to="/contact/" className="button big has-arrow ">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  </Container>
);
export default BuyNowSection;