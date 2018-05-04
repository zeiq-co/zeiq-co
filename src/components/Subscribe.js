import React from 'react';
import Link from 'gatsby-link';
import addToMailchimp from 'gatsby-plugin-mailchimp';
export default class Subscribe extends React.Component {
  constructor() {
    super();
    this.state = {
      email: ``,
    };
  }

  // Update state each time user edits their email address
  _handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  // Post to MC server & handle its response
  _postEmailToMailchimp = email => {
    addToMailchimp(email)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== `success`) {
          this.setState({
            status: `error`,
            msg: result.msg,
          });
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: `success`,
            msg: result.msg,
          });
        }
        console.log(result);
      })

      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: `error`,
          msg: err,
        });
      });
  };

  _handleFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState(
      {
        status: `sending`,
        msg: null,
        email: '',
      },
      // setState callback (subscribe email to MC)
      this._postEmailToMailchimp(this.state.email, {
        pathname: document.location.pathname,
      }),
    );
  };

  render() {
    return (
      <div className="col-md-6">
        <div
          className="grey-box text-center"
          style={{ backgroundColor: '#eff3f6' }}
        >
          <div className="overlay eq-height">
            <h3>Subscribe &amp; never miss a thing</h3>
            <p>We’ll keep you weekly updated about the latest buzz.</p>
            <form className="subscribe-form" onSubmit={this.handleSubmit}>
              <p className="one-line">
                <label htmlFor="subscribe_email" className="sr-only">
                  Subscribtion Email
                </label>
                <input
                  type="email"
                  name="email"
                  onClick={this._handleFormSubmit}
                  id="email"
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
  }
}
