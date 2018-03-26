import React from 'react';
import Link from 'gatsby-link';

const Subscribe = () => (
  <div className="col-md-6">
    <div
      className="grey-box text-center"
      style={{ backgroundColor: '#eff3f6' }}
    >
      <div className="overlay eq-height">
        <h3>Subscribe &amp; never miss a thing</h3>
        <p>We’ll keep you weekly updated about the latest buzz.</p>
        <form className="subscribe-form" method="post">
          <p className="one-line">
            <label for="subscribe_email" className="sr-only">
              Subscribtion Email
            </label>
            <input
              type="email"
              name="email"
              id="subscribe_email"
              placeholder="Your email address..."
              required=""
            />
            <input type="submit" value="Subscribe" />
          </p>
        </form>
      </div>
    </div>
  </div>
);

export default Subscribe;
