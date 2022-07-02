/* eslint-disable import/no-unresolved */

import { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { random } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';

const bgColors = ['#D83013', '#5A6422', '#E08100', '#B10101', '#0E268A'];

const Section = styled.section`
  .portfolio-carousel-fluid .swiper-container {
    cursor: -webkit-grab;
    cursor: grab;
  }
  .portfolio-carousel-fluid .swiper-slide .portfolio-card {
    margin: 0 40px;
  }
  @media (max-width: 1200px) {
    .portfolio-carousel-fluid .swiper-slide .portfolio-card {
      margin: 0 30px;
    }
  }
  @media (max-width: 991px) {
    .portfolio-carousel-fluid .swiper-slide .portfolio-card {
      margin: 0 15px;
    }
  }
  .portfolio-carousel-fluid .card-img-overlay {
    height: 100%;
    top: 0;
    padding: 1.25rem;
    transform: translateY(0);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .portfolio-carousel-fluid .card-img-overlay .block .card-subtitle,
  .portfolio-carousel-fluid .card-img-overlay .block .card-title {
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.2, 1),
      opacity 0.3s cubic-bezier(0.2, 1, 0.2, 1) !important;
    transform: translateY(60px);
  }
  .portfolio-carousel-fluid .card-img-overlay .block .card-subtitle {
    transition-delay: 0s !important;
  }
  .portfolio-carousel-fluid
    .card-hover-zoom:hover
    .card-img-overlay
    .block
    .card-subtitle,
  .portfolio-carousel-fluid
    .card-hover-zoom:hover
    .card-img-overlay
    .block
    .card-title {
    opacity: 1;
    transform: translateY(0);
  }
  .portfolio-carousel-fluid
    .card-hover-zoom:hover
    .card-img-overlay
    .block
    .card-subtitle {
    transition-delay: 0.2s !important;
  }
  .portfolio-carousel-fluid .swiper-pagination-progressbar {
    top: auto;
    bottom: 10px;
    left: calc(50% - 165px);
    width: 330px;
    height: 3px;
    background: rgba(200, 200, 200, 0.4);
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  @media (max-width: 575px) {
    .portfolio-carousel-fluid .swiper-pagination-progressbar {
      left: calc(50% - 100px);
      width: 200px;
    }
  }
  .portfolio-carousel-fluid
    .swiper-pagination-progressbar
    .swiper-pagination-progressbar-fill {
    background: #001213;
  }
  .portfolio-carousel-fluid .swipeCarousel-control {
    position: relative;
    height: 50px;
    top: -10px;
    pointer-events: none;
  }
  .portfolio-carousel-fluid .swipeCarousel-control .activeslide,
  .portfolio-carousel-fluid .swipeCarousel-control .totalslide {
    color: #000;
    position: absolute;
    top: calc(50% + 5px);
    left: calc(50% - 200px);
    line-height: 1;
    font-weight: 600;
  }
  @media (max-width: 575px) {
    .portfolio-carousel-fluid .swipeCarousel-control .activeslide,
    .portfolio-carousel-fluid .swipeCarousel-control .totalslide {
      left: calc(50% - 140px);
    }
  }
  .portfolio-carousel-fluid .swipeCarousel-control .totalslide {
    left: auto;
    right: calc(50% - 200px);
  }
  @media (max-width: 575px) {
    .portfolio-carousel-fluid .swipeCarousel-control .totalslide {
      right: calc(50% - 140px);
    }
  }
  .portfolio-carousel-fluid .swiper-button {
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 700;
    color: #000;
    padding: 10px 12px;
  }
  @media (max-width: 991px) {
    .portfolio-masonry .row {
      margin-bottom: 30px;
    }
  }
  .portfolio-masonry .portfolio-item {
    margin-bottom: 80px;
  }
  @media (max-width: 991px) {
    .portfolio-masonry .portfolio-item {
      margin-bottom: 30px;
    }
  }
  .portfolio-grid-creative .portfolio-card .block {
    background-color: #fff;
    position: relative;
    z-index: 2;
    margin: 0 30px;
    margin-top: -40px;
    padding: 15px 25px;
    transition: margin 0.3s;
    text-align: center;
  }
  .portfolio-grid-creative .portfolio-card:hover .block {
    margin-top: -50px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .portfolio-floating .portfolio-card {
    overflow: initial;
    position: initial;
  }
`;

const RecentProjects = ({ projects }) => {
  const [swiper, setSwiperLocal] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const settings = {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 600,
    loop: !0,
    centeredSlides: !0,
    preloadImages: !1,
    lazy: !0,
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
    <Section className="section bg-white portfolio-carousel-fluid swiper-container ">
      <div className="container portfolio-carousel-fluid">
        <div className="row">
          <div className="col-12 has-anim fade">
            <div className="section-title text-center">
              <p className="mb-2">Recent works</p>
              <h2 className="title text-dark">Selected Projects</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
        <Swiper
          {...settings}
          onSwiper={setSwiperLocal}
          onSlideChange={() => console.log(swiper, 'slide change')}
          onActiveIndexChange={({ realIndex }) => {
            setActiveStep(realIndex);
          }}
          modules={[Navigation, Pagination, Scrollbar]}
          pagination={{
            el: '.portfolio-carousel-fluid .swiper-pagination',
            type: 'progressbar',
          }}
          navigation={{
            nextEl: '.portfolio-carousel-fluid .swiper-button.next',
            prevEl: '.portfolio-carousel-fluid .swiper-button.prev',
          }}
        >
          <div className="swiper-wrapper">
            {projects.map((item, index) => {
              const randomId = random(0, bgColors.length - 1);
              const bgColor = bgColors[randomId];
              if (!item.featuredImage) return null;
              return (
                <SwiperSlide>
                  <div className="swiper-slide" key={item.slug}>
                    <div className="card portfolio-card card-overlay card-hover-zoom">
                      <span className="card-img">
                        <Image
                          priority={index}
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
          <div className="text-center mt-4">
            <div className="swiper-button prev cursor-pointer">Prev</div>
            <div className="swiper-button next cursor-pointer">Next</div>
          </div>
          <div className="swipeCarousel-control portfolio-carousel-fluid portfolio-carousel-fluid">
            <div className="swiper-pagination swiper-pagination-progressbar portfolio-carousel-fluid " />
            <div className="activeslide">{activeStep + 1}</div>
            <div className="totalslide">{projects.length}</div>
          </div>
        </Swiper>
      </div>
    </Section>
  );
};

export default RecentProjects;
