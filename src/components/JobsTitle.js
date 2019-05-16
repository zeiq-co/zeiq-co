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

const JobsTitle = () => (
  <Wrapper className="page-title-container">
    <h1>Make cool $tuff.</h1>
    <h3>Get paid.</h3>
    <Description>
    We want to meet the makers, the future-facing hustlers with real talent. Learn to develop high-tech and professional websites directly under the guidance of developers. With our top of the line execution & as an innovative team we take a broad way to deal with handling the important issues of development and design in this digitally aware world. We will teach latest technologies and tools to ensure perfect satisfaction.{''}
    </Description>
  </Wrapper>
);

export default JobsTitle;
