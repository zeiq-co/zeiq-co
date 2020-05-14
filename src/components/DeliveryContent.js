import React from 'react';

const data = [
  {
    id: 1,
    title: 'Signup/Sign in:',
    Content:
      'This feature allow users to do sign up with their personal details  information for future help and keep your application secure.  After sign up user can sign in with their  credential and start doing online grocery shopping with secure data. And their personal information will be secure with your Grocery Store Shopping application',
  },

  {
    id: 2,
    title: 'Geo Location:',
    Content:
      'This feature helps users to provide best experience with your  grocery shopping app. Once user allow to access the location then based on location it will show the products and enhance user shopping experience.',
  },
  {
    id: 3,
    title: 'Home Screen:',
    Content:
      ' Once users logged in with their credential then Grocery Store  Delivery app will show a home screen where they will see a  categories at top and a list of products based Deals and your  features.',
  },
  {
    id: 4,
    title: 'Add to Cart:',
    Content:
      'User can keep adding their product while browsing their products and keep adding that product to cart and at once they can summarize their order and do make payment or order.',
  },
  {
    id: 5,
    title: 'Online Payment:',
    Content:
      'This Flutter Grocery application has online payment gateway integration   so user can do online payment while placing their order.',
  },
  {
    id: 6,
    title: 'Address Management:',
    Content:
      'This Flutter Grocery application has online payment gateway integration   so user can do online payment while placing their order.',
  },
  {
    id: 7,
    title: 'Online Order Tracking:',
    Content:
      'This features allows users to do online tracking regarding their orders and keep updates themselves.',
  },
  {
    id: 8,
    title: 'Order History:',
    Content:
      'This feature allows user to track their all order so they can analyse their expense as well as based on their order history they can repeat their previous order and save their time and energy.',
  },
];

const DeliveryContent = () => (
  <div className="container">
    {data.map((item) => (
      <dl className="row">
        <dt className="col-sm-2">
          <h5 className="font-weight-bold">{item.title} </h5>
        </dt>
        <dd className="col-sm-10">{item.Content}</dd>
      </dl>
    ))}
  </div>
);

export default DeliveryContent;
