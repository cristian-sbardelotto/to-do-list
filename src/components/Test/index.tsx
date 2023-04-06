import React from 'react';
import styled from 'styled-components';

const Test = () => {
  return (
    <div>
      <TestComponent>
        Out of the span
        <span>In the span</span>
      </TestComponent>
    </div>
  );
};

const TestComponent = styled.p`
  background: red;

  span {
    background-color: blue;

    &:hover {
      background-color: aqua;
    }
  }
`;

export default Test;
