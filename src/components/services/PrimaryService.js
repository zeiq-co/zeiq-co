import React from 'react';
import Image from 'next/image';
import md from 'markdown-it';

import PostHero from '../blog/PostHero';
import RelatedServices from './RelatedServices';
import WorkProcess from '../home/WorkProcess';

const PrimaryService = ({ data, childServices }) => (
  <div>
    <PostHero post={data} />
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-n5">
            <Image
              src={data.featuredImage}
              alt={data.title}
              className="img-fluid"
              height={600}
              width={1400}
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
      {data.content && (
        <div className="section bg-white">
          <div className="container">
            <div className="row justify-content-center pt-5">
              <div className="col-lg-9">
                <div className="pr-0 pr-lg-5">
                  <div className="content mb-5 pb-3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: md().render(data.content),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
    <RelatedServices services={childServices} />
    <WorkProcess />
  </div>
);

export default PrimaryService;
