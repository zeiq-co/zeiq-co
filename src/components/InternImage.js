import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const InternImage = () => (
  <Image
    className="img-thumbnail"
    src="/images/content-writing.png"
    alt="internship"
  />
);

export default InternImage;
