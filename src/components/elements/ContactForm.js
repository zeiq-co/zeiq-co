import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    const { contact } = this.props;

    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Contact Us.</h2>
                <p className="description">
                  Tell us about your project, get a quick estimate and a plan
                  for making it live.
                </p>

                <div className="form-wrapper">
                  <form>
                    <label htmlFor="item01">
                      <input
                        type="text"
                        name="name"
                        id="item01"
                        placeholder="Your Name *"
                      />
                    </label>

                    <label htmlFor="item02">
                      <input
                        type="text"
                        name="email"
                        id="item02"
                        placeholder="Your email *"
                      />
                    </label>

                    <label htmlFor="item03">
                      <input
                        type="text"
                        name="subject"
                        id="item03"
                        placeholder="Write a Subject"
                      />
                    </label>
                    <label htmlFor="item04">
                      <textarea
                        type="text"
                        id="item04"
                        name="message"
                        placeholder="Your Message"
                      />
                    </label>
                    <button
                      className="rn-button-style--2 btn-solid"
                      type="submit"
                      value="submit"
                      name="submit"
                      id="mc-embedded-subscribe">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src={contact.rightSideImage} alt="Zeiq" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactForm;
