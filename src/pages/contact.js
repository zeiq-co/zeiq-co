import { NextSeo } from 'next-seo';

import contactData from '../../content/general/contact.yaml';
import config from '../utils/config';
import Layout from '../components/Layout';

function ContactPage() {
  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="A short description goes here."
      />
      <section className="section contact-us bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <div className="block">
                <div className="row justify-content-center">
                  <div className="col-lg-5 mb-5 mb-lg-0">
                    <div className="pr-0 pr-lg-4">
                      <h4 className="text-dark mb-3 has-anim fade">
                        Describe Your Project
                      </h4>
                      <p className="has-anim fade">
                        Tell us about your project, get a quick estimate and a
                        plan for making it live.
                      </p>

                      <div className="mt-4 pt-2 has-anim fade anim-delay-1">
                        <p className="text-uppercase small font-weight-500 mb-1">
                          Email us:
                        </p>
                        <p>
                          <a
                            className="line-link text-dark"
                            href={`mailto:${contactData.emailSales}`}
                          >
                            {contactData.emailSales}
                          </a>
                        </p>
                      </div>
                      <div className="mt-4 has-anim fade anim-delay-2">
                        <p className="text-uppercase small font-weight-500 mb-1">
                          Call us:
                        </p>
                        <p>
                          <a
                            className="line-link text-dark"
                            href={`tel:${contactData.telephoneUk}`}
                          >
                            {contactData.telephoneUk}
                          </a>
                        </p>
                      </div>
                      <div className="mt-4 has-anim fade anim-delay-3">
                        <p className="text-uppercase small font-weight-500 mb-1">
                          Our Offices:
                        </p>
                        <p>{contactData.locationUk}</p>
                        <p>{contactData.locationIndia}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <form>
                      <div className="row gh-1 gv-2">
                        <div className="col-12 col-md-6 has-anim fade">
                          <input
                            type="name"
                            className="form-control"
                            placeholder="Your Name *"
                          />
                        </div>
                        <div className="col-12 col-md-6 has-anim fade">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email *"
                          />
                        </div>
                        <div className="col-12 col-md-6 has-anim fade">
                          <input
                            type="phone"
                            className="form-control"
                            placeholder="Your Phone *"
                          />
                        </div>
                        <div className="col-12 col-md-6 has-anim fade">
                          <select className="form-control custom-control custom-select">
                            <option selected="">Type of Project</option>
                            <option>Web/App UI Project</option>
                            <option>Creative Branding</option>
                            <option>Wordpress Website</option>
                            <option>Static Website</option>
                          </select>
                        </div>
                        <div className="col-12 has-anim fade">
                          <textarea
                            className="form-control"
                            rows="1"
                            placeholder="Message *"
                          />
                        </div>
                        <div className="col-12 has-anim fade">
                          <button
                            className="btn btn-black"
                            type="button"
                            name="button"
                            data-text="Submit"
                          >
                            <span>Submit</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
