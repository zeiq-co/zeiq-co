import React, { Component } from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';

const Section = styled.div`
  padding: 3rem 1.5rem;
  background-color: #f7f9fb;
  margin-top: 4rem;
  margin-bottom: 4rem;
  .container {
    padding-right: 10px !important;
    padding-left: 4px !important;
  }
  .slick-slider {
    width: 328px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 18px;
    margin: 0px auto;
    overflow: hidden;
    padding: 23px;
    border-radius: 61px;
  }
  .slick-slider::before {
    content: '';
    background-image: url(https://www.packrs.co/images/iphone-mokeup.png);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 1;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .slick-slider .slick-track {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
`;
const data = [
  {
    id: 1,
    screen: '/images/FoodApp/Categories.png',
  },
  {
    id: 2,
    screen: '/images/FoodApp/Checkout_Scroll View.png',
  },
  {
    id: 3,
    screen: '/images/FoodApp/Checkout.png',
  },
  {
    id: 4,
    screen: '/images/FoodApp/Delivery panel.png',
  },
  {
    id: 5,
    screen: '/images/FoodApp/My Orders.png',
  },
  {
    id: 6,
    screen: '/images/FoodApp/My Profile.png',
  },

  {
    id: 7,
    screen: '/images/FoodApp/My Profile-2.png',
  },
  {
    id: 8,
    screen: '/images/FoodApp/My Profile-1.png',
  },
  {
    id: 9,
    screen: '/images/FoodApp/Order accept.png',
  },
  {
    id: 10,
    screen: '/images/FoodApp/Vegetables.png',
  },
];

export default class GrocerySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <Section className="">
        <div className="container">
          <Slider {...settings}>
            {data.map((item) => (
              <div>
                <img src={item.screen} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </Section>
    );
  }
}
