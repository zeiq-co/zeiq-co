import React from 'react';

const Details = ({ contactData }) => (
  <div>
    <div className="pr-0 pr-lg-4">
      <h4 className="text-dark mb-3">Contact Us</h4>
      <p>
        Share details of your project – like scope, time frames, or business
        challenges. Our team will carefully study them. Then we will figure out
        the next move together.
      </p>

      <div className="mt-4 pt-2">
        <p className="text-uppercase small font-weight-500 mb-1">Email us:</p>
        <p>
          <a
            className="line-link text-dark"
            href={`mailto:${contactData.emailSales}`}
          >
            {contactData.emailSales}
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p className="text-uppercase small font-weight-500 mb-1">Call us:</p>
        <p>
          <a
            className="line-link text-dark"
            href={`tel:${contactData.telephoneUk}`}
          >
            {contactData.telephoneUk}
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p className="text-uppercase small font-weight-500 mb-1">
          Our Offices:
        </p>
        <p>{contactData.locationUk}</p>
        <p>{contactData.locationIndia}</p>
      </div>
    </div>
  </div>
);

export default Details;
