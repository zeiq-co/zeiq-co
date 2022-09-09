import React from 'react';
import FaqItem from './FaqItem';
import faqData from '../../../content/general/faq.yaml';

const Faq = () => (
  <section className="bg-white">
    <div className="row justify-content-center">
      <div>
        <div className="mb-4">
          <h4 className="text-dark mb-3">Frequently Asked Questions</h4>
          <p>
            Share the details of your project – like scope, time frames, or
            business challenges. Our team will carefully study them and then
            we’ll figure out the next move together.
          </p>
        </div>
        {faqData &&
          faqData.map((item) => <FaqItem key={item.id} data={item} />)}
      </div>
    </div>
  </section>
);

export default Faq;
