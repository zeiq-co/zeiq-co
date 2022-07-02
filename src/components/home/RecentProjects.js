// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import { random } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';

const bgColors = ['#D83013', '#5A6422', '#E08100', '#B10101', '#0E268A'];

const RecentProjects = ({ projects }) => {
  const settings = {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 600,
    loop: !0,
    centeredSlides: !0,
    preloadImages: !1,
    lazy: !0,
    pagination: {
      el: '.portfolio-carousel-fluid .swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.portfolio-carousel-fluid .swiper-button.next',
      prevEl: '.portfolio-carousel-fluid .swiper-button.prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
  };

  return (
    <section className="section bg-white  portfolio-carousel-fluid ">
      <div className="container">
        <div className="row">
          <div className="col-12 has-anim fade">
            <div className="section-title text-center">
              <p className="mb-2">Recent works</p>
              <h2 className="title text-dark">Selected Projects</h2>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        {...settings}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className=""
      >
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div>
              {projects.map((item) => {
                const randomId = random(0, bgColors.length - 1);

                const bgColor = bgColors[randomId];
                if (!item.featuredImage) return null;
                return (
                  <SwiperSlide>
                    <div className="swiper-slide" key={item.slug}>
                      <div className="card portfolio-card card-overlay card-hover-zoom">
                        <span className="card-img">
                          <Image
                            src={item.featuredImage}
                            alt={item.title}
                            className="img-fluid"
                            width={1200}
                            height={900}
                            objectFit="contain"
                            layout="responsive"
                          />
                          <span
                            className="img-overlay"
                            style={{ backgroundColor: bgColor }}
                          />
                        </span>
                        <div className="card-img-overlay text-center">
                          <div className="block">
                            <h3 className="h2 card-title mb-3">
                              <Link href={`/work/${item.slug}`}>
                                <a>{item.title}</a>
                              </Link>
                            </h3>
                            <span className="card-subtitle">
                              <Link href={`/work/${item.slug}`}>
                                <a>{item.category}</a>
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-4">
            <div className="swiper-button prev cursor-pointer">Prev</div>
            <div className="swiper-button next cursor-pointer">Next</div>
          </div>

          <div className="swipeCarousel-control">
            <div className="swiper-pagination" />
            <div className="activeslide">1</div>
            <div className="totalslide">{projects.length}</div>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default RecentProjects;
