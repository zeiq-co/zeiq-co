import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
  font-size: 1.2rem;
  @media only screen and (max-width: 768px) {
  font-size: 1.1rem;
  text-align: justify; 
}`;

const Wrapper = styled.div`
  max-width: 85% !important;
`;

const OpenSourceTitle = () => (
  <Wrapper className="page-title-container">
    <h1>Everyone Benefits.</h1>
    <h3>Use. Release. Support.</h3>
    <Description>
    Open source enables a development method for software that harnesses the power of distributed peer review and transparency of process. The promise of open source is higher quality, better reliability, greater flexibility and lower cost.{''}
    </Description>
  </Wrapper>
);

export default OpenSourceTitle;