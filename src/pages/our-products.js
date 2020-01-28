import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ProductHero from '../components/ProductHero';
import Features from '../components/Features';

const Product = () => {
  return (
    <Layout>
      <Seo title="Products" />
      <ProductHero />
      <Features />
    </Layout>
  );
};

export default Product;
