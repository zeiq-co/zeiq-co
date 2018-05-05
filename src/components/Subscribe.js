import React from 'react';
import Link from 'gatsby-link';
import addToMailchimp from 'gatsby-plugin-mailchimp';
export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    addToMailchimp(email);
  }

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
                  value={this.state.email}
                  onChange={this.handleChange}
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
