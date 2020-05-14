import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  span {
    margin-right: 0.25rem;
  }
`;

const data = [
  {
    title: 'Category',
    points: ['Grocery by category', 'Notifications', 'Store Locator'],
  },
  {
    title: 'Features',
    points: ['Filter available', 'Profile', 'Order Tracking', 'Feature Two'],
  },
  {
    title: 'Order Status',
    points: [
      'Search grocery items',
      'Order History',
      'Coupons',
      'Coupon offers',
      'Order status',
      'Attributes of product',
    ],
  },
  {
    title: 'Activites',
    points: [
      'Create Product Item',
      'Edit Product Item',
      'Delete Product Item ',
    ],
  },
];

const GroceryScreens = () => (
  <main id="content" className="white-background page-header-content pt-10">
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-lg-8">
          <div className="text-center mb-10">
            <h2 className="page-header-title">APP ORDERING SYSTEM SCREENS</h2>
            <p className="lead page-header-text mb-5">
              Fully customizable, functional, ready-to-use by the end-users with
              easily configurable Online Zeiq delivery Mobile
              Application/Software built on the latest leading technology
              Flutter. You Should check out with app features.
            </p>
          </div>
        </div>
      </div>
      <Row className="row">
        {data.map((item) => (
          <div className="col-lg-3 mb-5">
            <h4 className="title">{item.title}</h4>
            {item.points.map((text) => (
              <div>
                <span className="icon page-title-container">
                  <i className="fas fa-check-circle" />
                </span>
                <h5 className="d-inline">{text}</h5>
              </div>
            ))}
          </div>
        ))}
      </Row>
    </div>
  </main>
);

export default GroceryScreens;
