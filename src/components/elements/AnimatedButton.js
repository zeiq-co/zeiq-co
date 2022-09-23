import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .button-pulse {
    animation: pulse 2s infinite 3s cubic-bezier(0.25, 0, 0, 1);
    box-shadow: 0 0 0 0 green;
  }
  @keyframes pulse {
    to {
      box-shadow: 0 0 0 18px rgba(255, 255, 255, 0);
    }
  }
`;

const AnimatedButton = ({ children }) => (
  <Wrapper>
    <button
      className="btn btn-black text-center button-pulse pulse"
      type="button"
    >
      {children}
    </button>
  </Wrapper>
);

export default AnimatedButton;
