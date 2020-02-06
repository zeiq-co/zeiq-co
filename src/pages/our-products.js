import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ProductHero from '../components/ProductHero';
import Features from '../components/Features';
import WebDashboard from '../components/WebDashboard';
import Technologies from '../components/Technologies';
import BuyNowSection from '../components/BuyNowSection';

const Caustomer = [
  {
    icon: 'fas fa-motorcycle',
    title: 'Book Delivery',
    text:
      'Android & iOS apps ensure a smooth delivery booking for your customers',
  },
  {
    icon: 'far fa-bell',
    title: 'Notifications',
    text:
      'Give Real-Time alerts to your customers about their delivery status through push & SMS.',
  },
  {
    icon: 'fas fa-money-check-alt',
    title: 'Payments',
    text:
      'Support multiple payment options to choose & pay for their delivery.',
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    text:
      'Customers can track the status of their delivery on an interactive map to give Swiggy like experience.',
  },
];

const rider = [
  {
    icon: 'fas fa-stopwatch',
    title: 'Real-Time Data',
    text: 'Rider get ride requests instantly on Rider app to manage delivery',
  },
  {
    icon: 'fas fa-info',
    title: 'Delivery Information',
    text:
      'Give relevant details like weight of deliver package info & pickup details to your rider',
  },
  {
    icon: 'fas fa-route',
    title: 'Start/End trip',
    text:
      'In-App maps navigation provide shortest route between pickup & drop locations.',
  },
  {
    icon: 'fas fa-coins',
    title: 'Earnings Summary',
    text:
      'Riders can track their daily trips & earnings right from their Rider App',
  },
];

const Webdashboard = [
  {
    icon: 'fas fa-user-tie',
    title: 'Manage Customers',
    text:
      'Manage riders, customer profiles, and queries right from your device.',
  },
  {
    icon: 'fas fa-motorcycle',
    title: 'Manage Riders',
    text:
      'Assign riders to your customers as per their availability in the given area.',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Data Analytics',
    text:
      'Generate detailed reports & actionable insights for decision making to obtain fast growth',
  },
  {
    icon: 'fas fa-percentage',
    title: 'Discounts & Promotions',
    text:
      'Send push notifications & in-app messages for real-time offers & discounts',
  },
];

const Product = () => {
  return (
    <Layout>
      <Seo title="Products" />
      <ProductHero />
      <Features
        heading="Customer App"
        img="/images/app/customer-screen.jpg"
        alt="/"
        data={Caustomer}
      />
      <Features
        heading="Rider App"
        img="/images/app/rider-screen.jpg"
        alt="/"
        direction="row-reverse"
        data={rider}
      />
      <WebDashboard data={Webdashboard} />
      <Technologies />
      <BuyNowSection />
    </Layout>
  );
};

export default Product;
