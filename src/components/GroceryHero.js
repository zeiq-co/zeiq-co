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
              Welcome to SB UI Kit Pro, a toolkit for building beautiful web
              interfaces, created by the developmet team at Start Bootstrap
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
