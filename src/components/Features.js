import React from 'react';
import styled from 'styled-components';

import FeaturesCard from './FeaturesCard';

const Container = styled.div`
  margin-top:1rem;
  img {
    margin-top: 1rem;
    border-radius: 1rem;
    height: 70%;
  }

  .row {
    margin-top: 1rem;
  }
`;

const Features = ({ heading, img, alt,direction,data}) => {
  data.map(items=>(
    console.log(items.icon)
  ))
  return (
  <Container className="container" >
    <h2 className="text-center">{heading}</h2>
    <div className="row">
      <div className="col">
        <img src={img} alt={alt} className="img-thumbnail" />
      </div>
      <div className="col col-sm-8">
        <div className="container">
          <div className="row">
          {
            data.map(items=>(
              <FeaturesCard icon={items.icon} title={items.title} text={items.text}/>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  </Container>
)};

export default Features;
