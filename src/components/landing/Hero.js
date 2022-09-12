/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';
import Image from 'next/image';

const list = [
  { name: 'Customizable & SEO friendly design' },
  { name: 'Easy tracking of orders & fulfillment' },
  { name: 'Multiple shipping &amp; delivery options' },
  { name: 'Advanced payment solutions' },
  { name: 'Run campaigns and ads on multiple sales channels' },
  { name: 'Systematic inventory management' },
];

const PageHero = ({ page }) => (
  <section className="mt-5 pt-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="about-me-slider">
            <div className="pr-0 pr-lg-3 is-hero-fade">
              <div className="swiper-slider">
                <Swiper
                  modules={[EffectFade, Autoplay]}
                  effect="fade"
                  loop
                  autoplay
                >
                  {page &&
                    page.heroSliderImages.map((item) => {
                      if (!item.image) return null;
                      return (
                        <SwiperSlide key={item?.image?.src}>
                          <Image
                            height={1786}
                            width={1455}
                            layout="intrinsic"
                            className="img-fluid slider-item"
                            src={item.image.src}
                            alt={item.image.alt}
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
                Grow Your Ecommerce Sales Quicker, Smarter &amp; Further
              </p>

              {page.description && (
                <div className="mt-4">
                  <p>{page.description}</p>
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
                          <div className="content text-light content-dark">
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
                          <div className="content text-light content-dark">
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

export default PageHero;
