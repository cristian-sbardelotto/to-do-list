import styled from 'styled-components';

export const Container = styled.section<{ checked: boolean }>`
  background-color: #fff;
  border-radius: 20px;
  padding: 1rem;

  background-color: ${props => (props.checked ? '#0f0' : '#fff')};
`;

export const Name = styled.h3``;
