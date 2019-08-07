import React from 'react';
import styled from 'styled-components';

// import login from '../../static/img/sell-app/login.jpg';
// import home from '../../static/img/sell-app/home.jpg';
// import location from '../../static/img/sell-app/pickndroplocation.jpg';
// import itemsDelivered from '../../static/img/sell-app/itemsdelivered.jpg';
// import deliverDetails from '../../static/img/sell-app/deliverydetails.jpg';
// import successDelivery from '../../static/img/sell-app/successdelivery.jpg';
// import deliveryOnSchedule from '../../static/img/sell-app/deliveryonschedule.jpg';
// import deliveryMap from '../../static/img/sell-app/deliverymap.jpg';
// import deliveryHistory from '../../static/img/sell-app/deliveryhistory.jpg';
// import referralWallet from '../../static/img/sell-app/referralwallet.jpg';
// import account from '../../static/img/sell-app/account.jpg';

const Description = styled.p`
  font-size: 1.2rem;
  @media only screen and (max-width: 768px) {
  font-size: 1.1rem; 
  }
  img {
    width: 45%;
    margin-bottom: 2rem;
  }
`;

const Wrapper = styled.div`
  max-width: 85% !important;
`;

const ReactNativeAppContent = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm">
        One of three columns
      </div>
      <div className="col-sm">
        <Wrapper className="page-title-container">
          <h2>React Native Delivery App</h2>
          <h3>Checkout cool stuff made by Zeiq</h3>
          <p>The real starter kit / app script with all the needed UI elements alongwith Redux,
            Graphql, NodeJS, MongoDB NativeBase to build your iOS and Android delivery app.
          </p>
        </Wrapper>
      </div>
  </div>
</div>

  
);

export default ReactNativeAppContent;