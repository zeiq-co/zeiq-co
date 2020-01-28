import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ProductHero from '../components/ProductHero';
import Features from '../components/Features';
import WebDashboard from '../components/WebDashboard';
import Technologies from '../components/Technologies';

const Product = () => {
  return (
    <Layout>
      <Seo title="Products" />
      <ProductHero />
      <Features heading="Customer App" />
      <Features heading="Driver App" />
      <WebDashboard />
      <Technologies />
    </Layout>
  );
};

export default Product;
