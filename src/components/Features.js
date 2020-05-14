import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  padding: 3rem 1.5rem;
  img {
    height: 400px;
    width: 100%;
  }
  .row {
    flex-direction: ${(props) => (props.flex ? 'row-reverse' : '')};
  }
`;

const data = [
  {
    id: 1,
    points: 'Browse categories and their Menu items',
  },
  {
    id: 2,
    points: 'Add to cart Menu items',
  },
  {
    id: 3,
    points: 'Live order tracking',
  },
  {
    id: 4,
    points: 'Manage Address and Checkout features',
  },
  {
    id: 6,
    points: 'Online store locator',
  },
  {
    id: 7,
    points: 'Developed on React-Native',
  },
  {
    id: 8,
    points: 'Search Delivery items',
  },
];

const Features = ({ flex, image, title }) => (
  <Main id="content" className="page-header-content pt-10 pb-10" flex={flex}>
    <div className="container pt-10 pb-10">
      <div className="row">
        <div className="col-lg-6 aos-init aos-animate">
          <div className="jumbotron">
            <h4 className="page-header-title">{title}</h4>
            {data.map((item) => (
              <ul>
                <li>{item.points}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block aos-init aos-animate">
          <img src={image} className="img-fluid" alt="" />
        </div>
      </div>
      <div class="text-center">
        <button type="button" class="btn">
          Centered button
        </button>
      </div>
    </div>
  </Main>
);

export default Features;
