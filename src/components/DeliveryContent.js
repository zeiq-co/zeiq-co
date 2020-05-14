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
      'This Zeiq Delivery application has online payment gateway integration so user can do online payment while placing their order.',
  },
  {
    id: 6,
    title: 'Address Management:',
    Content:
      'This feature allows users to manage multiple address so they can choose their address based on their availability. For example: If they order some product but on that time they were not at their home then then can set their address where they will available or they can order behalf of others at their place.',
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
  {
    id: 9,
    title: 'Terms & Conditions:',
    Content:
      'Here user can read about your Zeiq Store Shopping App terms and conditions. So get aware about all your Zeiq delivery app business so they can make their decision and do happy shopping with your Zeiq delivery app',
  },
  {
    id: 10,
    title: 'Help:',
    Content:
      'Here user will get guide or help articles. Like How to change address, how to shop, how to change information etc. It is fully customization feature so you can add question based on users or customer requirements.',
  },
  {
    id: 11,
    title: 'FAQ:',
    Content:
      'Here user will see all information like, does your charge extra for delivery, How secure is your app for do online payment and more. This section is fully customization, So you can add question based on your business and Zeiq Delivery shopper requirements.',
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
