import React from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

class WriteToUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className="col-md-6">
        <div className="grey-box">
          <div className="overlay eq-height">
            <h1>Write to us</h1>
            <form
              className="contact-form"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-xl-6">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Your Name…"
                    required=""
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-xl-6">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Your Email…"
                    required=""
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Your Message…"
                    required=""
                    onChange={this.handleChange}
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
  }
}

export default WriteToUs;
