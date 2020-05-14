import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import GroceryHero from '../components/GroceryHero';
import GroceryScreens from '../components/GroceryScreens';
import GrocerySlider from '../components/GrocerySlider';
import Features from '../components/Features';

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
        <div className="container">
          <dl className="row">
            <dt className="col-sm-2">
              <h5 className="font-weight-bold">Signup/Sign in: </h5>
            </dt>
            <dd className="col-sm-10">
              This feature allow users to do sign up with their personal details
              to keep their details information for future help and keep your
              application secure. After sign up user can sign in with their
              credential and start doing online grocery shopping with secure
              data. And their personal information will be secure with your
              Grocery Store Shopping application.
            </dd>
            <dt className="col-sm-2">
              <h5 className="font-weight-bold">Geo Location:</h5>
            </dt>
            <dd className="col-sm-10">
              This feature helps users to provide best experience with your
              grocery shopping app. Once user allow to access the location then
              based on location it will show the products and enhance user
              shopping experience.
            </dd>
            <dt className="col-sm-2">
              <h5 className="font-weight-bold">Home Screen: </h5>
            </dt>
            <dd className="col-sm-10">
              Once users logged in with their credential then Grocery Store
              Delivery app will show a home screen where they will see a
              categories at top and a list of products based Deals and your
              features.
            </dd>
          </dl>
        </div>
      </Layout>
    );
  }
}
