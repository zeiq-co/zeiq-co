import React from 'react';

export default class Subscribe extends React.Component {
  render() {
    return (
      <div className="col-md-6" id="mc_embed_signup">
        <div
          className="grey-box text-center"
          style={{ backgroundColor: '#eff3f6' }}
        >
          <div className="overlay eq-height">
            <h3>Subscribe &amp; never miss a thing</h3>
            <p>We’ll keep you weekly updated about the latest buzz.</p>
            <form
              className="subscribe-form"
              action="//media.us16.list-manage.com/subscribe/post?u=cc89738f5e13735361f5b9aa9&amp;id=3140e0e9f1"
              method="post"
              target="_blank"
              noValidate
            >
              <p className="one-line">
                <label htmlFor="mce-EMAIL" className="sr-only">
                  Subscribtion Email
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email form-control"
                  id="mce-EMAIL"
                  placeholder="Your email address..."
                  required=""
                />
                <input
                  type="submit"
                  value="Subscribe"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
