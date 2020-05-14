import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  padding: 3rem 1.5rem;
  img {
    height: 400px;
    width: 100%;
  }
  .row {
    flex-direction: ${(props) => (props.flex ? 'row-reverse' : '')};
  }
`;

const Features = ({ flex, image }) => (
  <Main id="content" className="page-header-content pt-10 pb-10" flex={flex}>
    <div className="container pt-10 pb-10s">
      <div className="row">
        <div className="col-lg-6 aos-init aos-animate">
          <div className="jumbotron">
            <h4 className="page-header-title">
              Build your next project faster with SB UI Kit Pro
            </h4>
            <ul>
              <li>Browse categories and their Menu items</li>
            </ul>
            <ul>
              <li>Add to cart Menu items</li>
            </ul>
            <ul>
              <li>Live order tracking</li>
            </ul>
            <ul>
              <li>Manage Address and Checkout features</li>
            </ul>
            <ul>
              <li>Online store locator</li>
            </ul>
            <ul>
              <li>Order history</li>
            </ul>
            <ul>
              <li>Offers, Coupons, Taxes applied</li>
            </ul>
            <ul>
              <li>Clean UI and Easy to Customize</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block aos-init aos-animate">
          <img src={image} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </Main>
);

export default Features;
