import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .card {
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }
  img {
    width: 100%;
  }
  .card-body {
    padding: 1.25rem;
  }
  .card-body {
    background: white;
  }
`;

const Features = () => (
  <Section id="content" className="main page-header-content pt-10 pb-10">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.packrs.co/images/Become.png"
              alt="Card"
            />
            <div className="card-body mx-auto">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">
                Some example text some example text. John Doe is an architect
                and engineer
              </p>
              <a href="#" className="button has-arrow ">
                Download User App
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.packrs.co/images/Become.png"
              alt="Card"
            />
            <div className="card-body mx-auto">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">
                Some example text some example text. John Doe is an architect
                and engineer
              </p>
              <a href="#" className="button has-arrow ">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Features;
