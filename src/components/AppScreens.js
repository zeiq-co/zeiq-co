import React from 'react';
import styled from 'styled-components';

import login from '../../static/img/sell-app/login.jpg';
import home from '../../static/img/sell-app/home.jpg';
import latestOffers from '../../static/img/sell-app/latest-offers.jpg';
import location from '../../static/img/sell-app/pickndroplocation.jpg';
import itemsDelivered from '../../static/img/sell-app/itemsdelivered.jpg';
import deliverDetails from '../../static/img/sell-app/deliverydetails.jpg';
import successDelivery from '../../static/img/sell-app/successdelivery.jpg';
import deliveryOnSchedule from '../../static/img/sell-app/deliveryonschedule.jpg';
import deliveryMap from '../../static/img/sell-app/deliverymap.jpg';
import deliveryHistory from '../../static/img/sell-app/deliveryhistory.jpg';
import referralWallet from '../../static/img/sell-app/referralwallet.jpg';
import account from '../../static/img/sell-app/account.jpg';

const Container = styled.div`
  li {
    list-style-type: disc;
    font-size: 1.5rem;
  }
  img {
    margin-top: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Header = styled.h2`
  justify-content: center;
  display: flex;
  @media only screen and (max-width: 768px) {
    font-size: 1rem !important; 
  }
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
        <img src={login} alt="login screen" />
      </div>
      <div className="col-sm">
        <img src={home} alt="home screen" />
      </div>
      <div className="col-sm">
        <img src={latestOffers} alt="login screen" />
      </div>
      <div className="col-sm">
        <img src={location} alt="login screen" />
      </div>
    </div>
    <div className="row">
      <div className="col-sm">
        <img src={itemsDelivered} alt="login screen" />
      </div>
      <div className="col-sm">
        <img src={deliverDetails} alt="login screen" />
      </div>
      <div className="col-sm">
        <img src={successDelivery} alt="login screen" />
      </div>
      <div className="col-sm">
        <img src={deliveryOnSchedule} alt="login screen" />
      </div>
    </div>
    <div className="row">
      <div className="col-sm">
        <img src={deliveryMap} alt="login screen" />
      </div>
      <div className="col-sm">
        <img src={deliveryHistory} alt="login screen" />
      </div>
      <div className="col-sm">
        <img src={referralWallet} alt="login screen" />
      </div>
      <div className="col-sm">
        <img src={account} alt="login screen" />
      </div>
    </div>
  </Container>
);

export default AppScreens;