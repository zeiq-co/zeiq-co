import React from 'react';

import contactData from '../../../content/general/contact.yaml';
import whatWeDoData from '../../../content/general/whatWeDo.yaml';
import howWeWorkData from '../../../content/general/howWeWork.yaml';
import featuredData from '../../../content/general/features.yaml';

import Hero from '../landing/Hero';
import WhatWeDo from '../landing/WhatWeDo';
import HowWeWork from '../landing/HowWeWork';
import HomeServices from '../home/HomeServices';
import RecentProjects from '../home/RecentProjects';
import Testimonials from '../home/Testimonials';
import ContactInfo from '../contact/ContactInfo';
import BookCall from '../landing/BookCall';

const SecondaryService = ({ data, projects }) => (
  <div>
    <Hero data={data} />
    <WhatWeDo
      data={data}
      featuredData={featuredData}
      category={data.advertisementType || 'home'}
    />
    <HomeServices
      data={data}
      whatWeDoData={whatWeDoData}
      category={data.advertisementType || 'home'}
    />
    <RecentProjects data={data} projects={projects} />
    <HowWeWork
      data={howWeWorkData}
      category={data.advertisementType || 'home'}
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
      data={data}
      contactData={contactData}
      isFaq
      category={data.advertisementType || 'home'}
    />
    <BookCall
      title="Book Your Free Consultation Call"
      subTitle="This is not a sales call, this is an opportunity to find out if we are a mutually good fit"
    />
  </div>
);

export default SecondaryService;
