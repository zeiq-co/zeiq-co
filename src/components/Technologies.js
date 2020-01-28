import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 3rem;
  img {
    margin-top: 1rem;
    height: 30rem;
  }
  .col-sm-6,
  .col-sm-12 {
    margin-top: 3rem;
  }
`;

const Technologies = () => (
  <Container className="container">
    <h3 className="text-center">Backend With Strong Technologies</h3>
    <div className="row">
      <div className="col-6">
        <div className="row">
          <div className="col col-sm-12">
            <h4>Application Program Interface (API) Server</h4>
            <ul className="list-inline">
              <li className="list-inline-item">Lorem ipsum</li>
              <li className="list-inline-item">Phasellus iaculis</li>
              <li className="list-inline-item">Nulla volutpat</li>
            </ul>
          </div>
          <div className="col col-sm-6">
            <h4>Driver App/Rider App</h4>
            <ul className="list-inline">
              <li className="list-inline-item">Lorem ipsum</li>
              <li className="list-inline-item">Phasellus iaculis</li>
              <li className="list-inline-item">Nulla volutpat</li>
            </ul>
          </div>
          <div className="col col-sm-6">
            <h4>Web Dashboard</h4>
            <ul className="list-inline">
              <li className="list-inline-item">Lorem ipsum</li>
              <li className="list-inline-item">Phasellus iaculis</li>
              <li className="list-inline-item">Nulla volutpat</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col">
        <img
          src="/images/app/screen-1.png"
          alt="..."
          className="img-thumbnail"
        />
      </div>
    </div>
  </Container>
);

export default Technologies;
