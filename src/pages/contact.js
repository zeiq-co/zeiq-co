import { NextSeo } from 'next-seo';
import swal from 'sweetalert';

import contactData from '../../content/general/contact.yaml';
import ContactForm from '../components/contact/ContactForm';
import Layout from '../components/Layout';

function ContactPage() {
  const handleSubmit = async (e) => {
    // eslint-disable-next-line no-undef
    const res = await fetch('/api/subscribe', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email: e.email,
        firstName: e.firstName,
        lastName: e.lastName,
        message: e.message,
        phone: e.phone,
        company: e.company,
        projectType: e.projectType,
      }),
    });

    const { error } = await res.json();
    console.log(error, 'messegescsv');
    if (error === 'Success') {
      swal('Success!', '🎉  Subscribed successfully', 'success');
    } else {
      swal('Already Subscribed!', error, 'error');
    }
  };
  return (
    <Layout>
      <NextSeo
        title="Contact Zeiq for Software & App Services"
        description="Contact Zeiq for web design, software development, mobile app development, application development & eCommerce solutions. Call at +44-7747810130 Email at sales@zeiq.co."
        openGraph={{
          title: `Contact Zeiq for Software & App Services`,
          description:
            'Contact Zeiq for web design, software development, mobile app development, application development & eCommerce solutions. Call at +44-7747810130 Email at sales@zeiq.co.',
          images: [
            {
              url: '/images/about.png',
              width: 500,
              height: 500,
              alt: 'Zeiq Contact us',
              type: 'image/jpeg',
            },
          ],
        }}
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
                        Contact Us
                      </h4>
                      <p className="has-anim fade">
                        Share the details of your project – like scope, time
                        frames, or business challenges. Our team will carefully
                        study them and then we’ll figure out the next move
                        together.
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
                    <ContactForm onSubmit={(val) => handleSubmit(val)} />
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
