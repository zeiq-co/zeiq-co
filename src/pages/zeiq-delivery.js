import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import GroceryHero from '../components/GroceryHero';
import GroceryScreens from '../components/GroceryScreens';
import GrocerySlider from '../components/GrocerySlider';
import Features from '../components/Features';
import DeliveryContent from '../components/DeliveryContent';

export default class ZeiqDelivery extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Zeiq Delivery" description="Zeiq Delivery App" />
        <GroceryHero />
        <GroceryScreens />
        <GrocerySlider />
        <Features
          image="/images/smartDownload.jpg"
          title="ZEIQ DELIVERY MOBILE APP FEATURES"
          buttonName="DOWNLOAD USER APP"
        />
        <Features
          flex
          image="/images/smartOpen.jpg"
          title="ZEIQ DELIVERY APP DASHBOARD FEATURES"
          buttonName="APP LIVE DEMO"
        />
        <DeliveryContent />
      </Layout>
    );
  }
}
