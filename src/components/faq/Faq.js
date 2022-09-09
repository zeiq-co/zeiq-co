import React from 'react';
import FaqItem from './FaqItem';
import faqData from '../../../content/general/faq.yaml';

const Faq = () => (
  <section className="bg-white">
    <div className="row justify-content-center">
      <div>
        {faqData &&
          faqData.map((item) => <FaqItem key={item.id} data={item} />)}
      </div>
    </div>
  </section>
);

export default Faq;
