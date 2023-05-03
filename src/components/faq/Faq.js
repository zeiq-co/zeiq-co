import React from 'react';
import { filter } from 'lodash';
import FaqItem from './FaqItem';
import faqData from '../../../content/general/faq.yaml';

const Faq = ({ title, category }) => {
  if (!faqData) return null;
  const filteredData = filter(faqData, (item) => item.category === category);
  return (
    <section className="bg-white px-3">
      <div className="row justify-content-center">
        <div>
          {title && (
            <div className="mb-4 text-center text-lg-left">
              <h4 className="text-dark mb-3">{title}</h4>
            </div>
          )}
          {filteredData &&
            filteredData.map((item, i) => (
              <FaqItem key={item.id || i} data={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
