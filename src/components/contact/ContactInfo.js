import React from 'react';
import swal from 'sweetalert';
import ContactForm from './ContactForm';
import Details from './Details';
import Faq from '../faq/Faq';

const ContactInfo = ({ contactData, isFaq, content }) => {
  const handleSubmit = async (e) => {
    // eslint-disable-next-line no-undef
    const res = await fetch('/api/telegram', {
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
    console.log(error, 'error');
    if (error === 'Success') {
      swal(
        'Success!',
        '🎉 Thanks for submitting. we will contact you shortly.',
        'success',
      );
    } else {
      swal('Try Again', error, 'error');
    }
  };
  return (
    <section className="section contact-us bg-white ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="block">
              {content && (
                <div className="col-12 has-anim fade">
                  <div className="section-title text-center">
                    {content.title && (
                      <p className="font-weight-700">{content.title}</p>
                    )}
                    {content.title && (
                      <h2 className="title text-dark whitespace-pre-line">
                        {content.subtitle}
                      </h2>
                    )}
                  </div>
                </div>
              )}
              <div className="row justify-content-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="pr-0">
                    {isFaq ? (
                      <Faq title="Frequently Asked Questions" />
                    ) : (
                      <Details contactData={contactData} />
                    )}
                  </div>
                </div>
                <div className="col-lg-6 d-flex flex-column">
                  {isFaq && (
                    <div className="mb-4">
                      <p>
                        Share details of your project – like scope, time
                        frames, or business challenges. Our team will carefully
                        study them. Then we will figure out the next move
                        together.
                      </p>
                    </div>
                  )}
                  <ContactForm onSubmit={(val) => handleSubmit(val)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
