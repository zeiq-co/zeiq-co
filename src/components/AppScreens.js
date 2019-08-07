import React from 'react';
import styled from 'styled-components';

import login from '../../static/img/sell-app/login.jpg';

const Container = styled.div`
  li {
    list-style-type: disc;
    font-size: 1.5rem;
  }
`;

const Header = styled.h2`
  justify-content: center;
  display: flex;
`;
const Content = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`;

const AppScreens = () => (
  <Container className="container">
    <div className="row">
      <Header className="col">All the screens you want!</Header>
    </div>
    <Content>
      Fully customizable, ready-to-use screens for users with
      easily configurable application design, and the right UX 
      for a Delivery app.
    </Content>
    <div className="row">
      <div className="col-sm">
        <ul>
          <li>Login</li>
          <li>Home</li>
          <li>Latest offers</li>
          <li>Location</li>
        </ul>
      </div>
      <div className="col-sm">
        <ul>
          <li>List items to be delivered</li>
          <li>Delivery details</li>
          <li>Success delivery</li>
          <li>Delivery schedule</li>
        </ul>
      </div>
      <div className="col-sm">
        <ul>
          <li>Live delivery tracking</li>
          <li>Delivery history</li>
          <li>Referral and cash wallet</li>
          <li>Account settings</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-sm">
        <img src={login} alt="React Native Delivery App" />
      </div>
    </div>
  </Container>
);

export default AppScreens;