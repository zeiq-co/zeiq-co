/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';
import Image from 'next/image';

const list = [
  { name: 'Customizable & SEO friendly design' },
  { name: 'Easy tracking of orders & fulfillment' },
  { name: 'Multiple shipping & delivery options' },
  { name: 'Advanced payment solutions' },
  { name: 'Run campaigns and ads on multiple sales channels' },
  { name: 'Systematic inventory management' },
];

const LandingPageHero = ({ data }) => {
  if (!data) return null;
  return (
    <section className="mt-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="about-me-slider">
              <div className="pr-0 pr-lg-3">
                <div className="swiper-slider">
                  <Swiper
                    modules={[EffectFade, Autoplay]}
                    effect="fade"
                    loop
                    autoplay
                  >
                    {data.heroSliderImages.map((item, i) => {
                      if (!item.image) return null;
                      return (
                        <SwiperSlide key={i || item?.image?.src}>
                          <Image
                            height={1786}
                            width={1455}
                            layout="intrinsic"
                            className="img-fluid slider-item"
                            src={item.image.src}
                            alt={item.image.alt}
                            priority={i}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="pl-0 pl-lg-4">
              <div className="about-me-block text-white">
                <h2 className="text-white font-weight-500 ">
                  Start Selling <br /> Your Business Online.
                </h2>
                <p className="mb-3 font-weight-500 text-light">
                  Grow Your E-Commerce Sales Quicker, Smarter &amp; Further
                </p>

                {data.description && (
                  <div className="mt-4">
                    <p>{data.description}</p>
                  </div>
                )}
              </div>

              <div className="about-me-block">
                <h2 className="h4 about-me-title text-underline text-white font-weight-light font-italic text-monospace">
                  Main expertise:
                </h2>
                <div className="row text-white content content-dark">
                  <div className="col-sm-6">
                    <ul className="pl-0">
                      {list &&
                        list.slice(0, 3).map((item) => {
                          if (!item) return null;
                          return (
                            <div
                              className="content text-light content-dark"
                              key={item.name}
                            >
                              <li>{item.name}</li>
                            </div>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="pl-0">
                      {list &&
                        list.slice(3).map((item) => {
                          if (!item.name) return null;
                          return (
                            <div
                              className="content text-light content-dark"
                              key={item.name}
                            >
                              <li>{item.name}</li>
                            </div>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageHero;
