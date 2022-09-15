import React from 'react';
import FaqItem from './FaqItem';
import faqData from '../../../content/general/faq.yaml';

const Faq = ({ title }) => (
  <section className="bg-white px-3">
    <div className="row justify-content-center">
      <div>
        {title && (
          <div className="mb-4 text-center text-lg-left">
            <h4 className="text-dark mb-3">{title}</h4>
          </div>
        )}
        {faqData &&
          faqData.map((item, i) => <FaqItem key={item.id || i} data={item} />)}
      </div>
    </div>
  </section>
);

export default Faq;
