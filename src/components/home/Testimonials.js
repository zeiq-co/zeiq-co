/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import reviewsData from '../../../content/general/reviews.yaml';

const Testimonials = () => {
  const [swiper, setSwiperLocal] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  return (
    <section className="section bg-white review-carousel">
      <div className="container">
        <div className="col-12 has-anim fade">
          <div className="section-title text-center">
            <h2 className="title text-dark">What Our Clients Say?</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9 has-anim fade">
            <div className="swiper-container">
              <div className="swiper-wrapper pb-0">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 4000 }}
                  slidesPerView={1}
                  onSwiper={setSwiperLocal}
                  onSlideChange={() => console.log(swiper, 'slide change')}
                  onActiveIndexChange={({ realIndex }) => {
                    setActiveStep(realIndex);
                  }}
                  autoHeight
                  loop
                  direction="horizontal"
                  spaceBetween={0}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                >
                  {reviewsData &&
                    reviewsData.map((item) => (
                      <SwiperSlide
                        className="swiper-slide"
                        key={item.personName}
                      >
                        <div className="review-item">
                          <div className="review-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              {' '}
                              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />{' '}
                              <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />{' '}
                            </svg>
                          </div>
                          <h4 className="review-text">“{item.review}”</h4>
                          <span className="review-author">
                            {item.personName} - {item.personRole}
                          </span>
                          {item.countryFlag && (
                            <p className="text-center mt-1">
                              Country {item.countryFlag}
                            </p>
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  <div className="swipeCarousel-control">
                    <div className="activeslide">{activeStep + 1}</div>
                    <div className="totalslide">{reviewsData.length}</div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
