import React from 'react';
import Link from 'gatsby-link';

import CarouselItem from './CarouselItem';

class Carousel extends React.Component {
  componentDidMount() {
    jQuery('.owl-carousel.owl-thumbs-3').owlCarousel({
      items: 3,
      margin: 30,
      nav: true,
      navText: ['', ''],
      dots: false,
      loop: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  }

  render() {
    const { carousel } = this.props;
    return (
      <div className="owl-carousel owl-thumbs-3">
        {carousel.map(carouselItem => (
          <CarouselItem key={carouselItem.node.id} data={carouselItem.node} />
        ))}
      </div>
    );
  }
}

export default Carousel;
