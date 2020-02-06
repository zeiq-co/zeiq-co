import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  background-color: #dbe1e6;

  .title {
    color: #262a2c;
  }
  h3 {
    color: #654ce8;
  }
`;

const ProductHero = () => (
  <Container>
    <div className="page-title-container">
      <h3 className="title">
        Efficient Delivery App For Developing Your Own Food, Medicine,
        Electronics, Groceries, and Pick and Drop Delivery System
      </h3>
      <p className="subtitle">
        Make Zomato, Swiggy, Uber like apps and take your business online.
      </p>
      <h3>Buy now for $2499</h3>
      <div className="d-flex justify-content-center">
        <Link to="/contact/" className="button big has-arrow ">
          Buy Now
        </Link>
      </div>
    </div>
  </Container>
);

export default ProductHero;
