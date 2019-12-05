import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Description = styled.p`
  font-size: 1.2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
    text-align: justify;
  }
`;

const Wrapper = styled.div`
  max-width: 85% !important;
`;

const ServicesTitle = () => (
  <Wrapper className="page-title-container">
    <h1>The scope</h1>
    <h3>of our services</h3>
    <Description>
      Zeiq offers a wide array of services related to developing a website.
      Right from creating a template for your website to hosting and making it
      to SEO friendly, we take all the responsibilities. If something you expect
      us to do is not listed here,do {''}
      <Link to="/contact/">get in touch!</Link>
    </Description>
  </Wrapper>
);

export default ServicesTitle;
