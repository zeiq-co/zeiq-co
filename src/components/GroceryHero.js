import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  img {
    height: 520px;
    width: 66%;
  }
`;

const GroceryHero = () => (
  <Main
    id="content"
    className="white-background page-header-content pt-10 pb-10"
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 aos-init aos-animate">
          <div className="jumbotron">
            <h1 className="page-header-title">
              Build your next project faster with SB UI Kit Pro
            </h1>
            <p className="lead page-header-text mb-5">
             Are you looking to launch your online Food Shop, Grocery Shop, or an eCommerce mobile app for your supermarket business? Then this readymade flutter app will help you to build your business with your own mobile app in just
            </p>
            <p className="lead">
              <a className="button has-arrow" href="/services/">
                Buy Now
              </a>
              <a className="button has-arrow" href="/services/">
                Live DEMO
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block aos-init aos-animate">
          <img src="/images/zeiqPackrs.png" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </Main>
);

export default GroceryHero;
