import React from 'react';
import FaqItem from './FaqItem';

const faqItems = [
  {
    id: 1,
    title: 'What is an eCommerce website?',
    description:
      'An eCommerce website can either be business-to-business (B2B), business-to-customer (B2C) or customer-to-customer (C2C). These websites give businesses and individuals the ability to sell or buy products or services online.',
  },
  {
    id: 2,
    title: 'How long does it take to build an eCommerce website?',
    description:
      'A typical eCommerce website project will take up to 12 weeks to complete. But we don’t stop there, we will guide and support you as your business grows and challenges throughout your journey.',
  },
  {
    id: 3,
    title: 'How much does an eCommerce website cost?',
    description:
      'The short answer is that a custom eCommerce website will determined by the following factors like design, functionality, development, integration, support and maintenance, company selection and marketing and SEO. To get the right quote for customized eCommerce solutions, you can get in touch with our eCommerce development experts.',
  },
  {
    id: 4,
    title: 'How will you manage my project?',
    description:
      'Our team of account managers and skilled developers will work with you every step of the way ensuring you are always up to date with the development process and provide feedback at every stage.',
  },
  {
    id: 5,
    title: 'I have an existing online business website. Can you upgrade it? ',
    description:
      'Yes! We specialise in developing custom eCommerce website design and web development, so we can work with your existing website and upgrade it to match your requirements. ',
  },
  {
    id: 6,
    title: 'Do you support me and my business after the platform is built?',
    description:
      ' Yes. We offer you the full support of our expert eCommerce development and agency team. From project managers, UX designers, digital managers, developers and even advice from our in-house marketing team, a full support system is in place for your business.',
  },
];

const Faq = () => (
  <section className="bg-white">
    <div className="row justify-content-center">
      <div>
        <div className="mb-4">
          <h4 className="text-dark mb-3"> Frequently Asked Questions</h4>
        </div>
        {faqItems &&
          faqItems.map((item) => <FaqItem key={item.id} data={item} />)}
      </div>
    </div>
  </section>
);

export default Faq;
