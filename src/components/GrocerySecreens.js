import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  span {
    margin-right: 0.25rem;
  }
`;

const data = [
  {
    title: 'Night life',
    points: ['Long Feature One', 'Feature Two', 'Long Feature Three'],
  },
  {
    title: 'Safari',
    points: [
      'Long Feature One',
      'Feature Two',
      'Long Feature Three',
      'Feature Two',
    ],
  },
  {
    title: 'Feature Two',
    points: [
      'Long Feature One',
      'Feature Two',
      'Long Feature Three',
      'Long Feature One',
      'Long Feature One',
      'Long Feature One',
    ],
  },
  {
    title: 'Activites',
    points: ['Long Feature One', 'Feature Two', 'Long Feature Three'],
  },
];

const GrocerySecreens = () => (
  <main id="content" className="white-background page-header-content pt-10">
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-lg-8">
          <div className="text-center mb-10">
            <h2 className="page-header-title">
              Build your next project faster with SB UI
            </h2>
            <p className="lead page-header-text mb-5">
              Welcome to SB UI Kit Pro, a toolkit for building beautiful web
              interfaces, created by the developmet team at Start Bootstrap
            </p>
          </div>
        </div>
      </div>
      <Row className="row">
        {data.map((item) => (
          <div className="col-lg-3 mb-5">
            <h4 className="title">{item.title}</h4>
            {item.points.map((text) => (
              <div>
                <span className="icon page-title-container">
                  <i className="fas fa-check-circle" />
                </span>
                <h5 className="d-inline">{text}</h5>
              </div>
            ))}
          </div>
        ))}
      </Row>
    </div>
  </main>
);

export default GrocerySecreens;
