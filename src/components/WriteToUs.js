import React from 'react';
import Link from 'gatsby-link';

const WriteToUs = () => (
  <div className="col-md-6">
    <div className="grey-box">
      <div className="overlay eq-height">
        <h1>Write to us</h1>
        <form className="contact-form" action="contact.html">
          <div className="row">
            <div className="col-xl-6">
              <label for="name" className="sr-only">
                Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Your Name…"
                required=""
              />
            </div>
            <div className="col-xl-6">
              <label for="email" className="sr-only">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Your Email…"
                required=""
              />
            </div>
            <div className="col-12">
              <label for="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your Message…"
                required=""
              />
            </div>
            <div className="col-12">
              <button type="submit" className="big has-arrow no-bottom">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default WriteToUs;
