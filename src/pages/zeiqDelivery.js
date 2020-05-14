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
        <Seo title="Home" description="We are web development company" />
        <GroceryHero />
        <GroceryScreens />
        <GrocerySlider />
        <Features image="/images/smartDownload.jpg" />
        <Features flex image="/images/smartOpen.jpg" />
        <DeliveryContent />
      </Layout>
    );
  }
}
