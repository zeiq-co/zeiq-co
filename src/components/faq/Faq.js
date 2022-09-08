import React from 'react';
import FaqItem from './FaqItem';

const faqItems = [
  {
    id: 1,
    title: 'Can I try before I buy?',
    description:
      'Yes sign up today and let our activation team walk you through the DEMO.The service is free.      ',
  },
  {
    id: 2,
    title: 'What payment methods does ListMe accept?',
    description:
      'As long as you have a bank account registered in your country we can get you up and running in no time. You can start accepting mobile payments right away. (cashless society)',
  },
  {
    id: 3,
    title: 'How do I create events?',
    description:
      'Once your account is activated you can create the events via the dashboard. Simple and easy.',
  },
];

const Faq = () => (
  <section className="bg-white">
    <div className="row justify-content-center">
      <div className="">
        <h5 className="text-dark mb-2 has-anim fade">General Questions</h5>
        {faqItems &&
          faqItems.map((item) => <FaqItem key={item.id} data={item} />)}
      </div>
    </div>
  </section>
);

export default Faq;
