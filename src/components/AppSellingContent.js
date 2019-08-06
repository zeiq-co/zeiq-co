import React from 'react';
import styled from 'styled-components';

import login from '../../static/img/sell-app/login.jpg';
import home from '../../static/img/sell-app/home.jpg';
import location from '../../static/img/sell-app/pickndroplocation.jpg';
import itemsDelivered from '../../static/img/sell-app/itemsdelivered.jpg';
import deliverDetails from '../../static/img/sell-app/deliverydetails.jpg';
import successDelivery from '../../static/img/sell-app/successdelivery.jpg';
import deliveryOnSchedule from '../../static/img/sell-app/deliveryonschedule.jpg';
import deliveryMap from '../../static/img/sell-app/deliverymap.jpg';
import deliveryHistory from '../../static/img/sell-app/deliveryhistory.jpg';
import referralWallet from '../../static/img/sell-app/referralwallet.jpg';
import account from '../../static/img/sell-app/account.jpg';

const Description = styled.p`
  font-size: 1.2rem;
  @media only screen and (max-width: 768px) {
  font-size: 1.1rem;
  text-align: justify; 
  }
  img {
    width: 45%;
    margin-bottom: 2rem;
  }
`;

const Wrapper = styled.div`
  max-width: 85% !important;
`;

const AppSellingContent = () => (
  <Wrapper className="page-title-container">
    <h1>Delivery App for Sale</h1>
    <h3>Checkout cool stuff made by Zeiq</h3>
    <Description>
      Here is the App flow and its features.
    </Description>
    <Description>
      <strong>Login Screen</strong>
      <img src={login} alt="Login screen" />
    </Description>
    <Description>
      <strong>Home Screen</strong>
      <img src={home} alt="Home screen" />
    </Description>
    <Description>
      <strong>Pickup and Drop Service Screen</strong>
      <img src={location} alt="Pick and Drop Menu" />
    </Description>
    <Description>
      <strong>User can describe items as per needed</strong>
      <img src={itemsDelivered} alt="items to be filled" />
    </Description>
    <Description>
      <strong>Delivery Details</strong>
      <img src={deliverDetails} alt="Delivery Details" />
    </Description>
    <Description>
      <strong>Confirm Delivery</strong>
      <img src={successDelivery} alt="Success Delivery" />
    </Description>
    <Description>
      <strong>Delivery Schedule Details</strong>
      <img src={deliveryOnSchedule} alt="Delivery on Schedule" />
    </Description>
    <Description>
      <strong>Track Live Delivery Status</strong>
      <img src={deliveryMap} alt="Delivery Track on Map" />
    </Description>
    <Description>
      <strong>Deleveries History</strong>
      <img src={deliveryHistory} alt="Delieveries History" />
    </Description>
    <Description>
      <strong>Invite a Friend</strong>
      <img src={referralWallet} alt="Referral Screen" />
    </Description>
    <Description>
      <strong>Settings</strong>
      <img src={account} alt="Account Setting" />
    </Description>
  </Wrapper>
);

export default AppSellingContent;