import React from 'react';

import contactData from '../../../content/general/contact.yaml';
import whatWeDoData from '../../../content/general/whatWeDo.yaml';
import howWeWorkData from '../../../content/general/howWeWork.yaml';

import Hero from '../landing/Hero';
import WhatWeDo from '../landing/WhatWeDo';
import HowWeWork from '../landing/HowWeWork';
import HomeServices from '../home/HomeServices';
import RecentProjects from '../home/RecentProjects';
import Testimonials from '../home/Testimonials';
import ContactInfo from '../contact/ContactInfo';

const SecondaryService = ({ data, projects }) => (
  <div>
    <Hero data={data} />
    <WhatWeDo />
    <HomeServices
      data={whatWeDoData}
      title="How We Work on it?"
      subtitle="eCommerce Development Process"
      category={data.advertisementType || 'home'}
    />
    <RecentProjects
      projects={projects}
      title="Glimpse of Our eCommerce Projects"
      subtitle="Check out our latest case studies and learn about how we helped worldwide companies
        to reach an efficient outcome for their eCommerce business."
    />
    <HowWeWork
      data={howWeWorkData}
      // content={{
      //   title: 'How We Work',
      //   subtitle:
      //     'We understand how to deliver engaging and successful eCommerce experiences',
      // }}
    />
    <Testimonials
      category={data.advertisementType || 'home'}
      heading="What Our Clients Says"
    />
    <ContactInfo
      contactData={contactData}
      isFaq
      content={{
        title: 'Contact Us',
        subtitle: 'Want to increase your eCommerce sales? \n Get started today',
      }}
    />
  </div>
);

export default SecondaryService;
