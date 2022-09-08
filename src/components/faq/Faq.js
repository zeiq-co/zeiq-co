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
      <div>
        <div className="mb-4">
          <h4 className="text-dark mb-3"> Frequently Asked Questions</h4>
          <p>
            Share the details of your project – like scope, time frames, or
            business challenges. Our team will carefully study them and then
            we’ll figure out the next move together.
          </p>
        </div>
        {faqItems &&
          faqItems.map((item) => <FaqItem key={item.id} data={item} />)}
      </div>
    </div>
  </section>
);

export default Faq;
