import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  margin: 3rem 0;
  text-align: center;
`;

export const Input = styled.input`
  margin-top: 2rem;
`;

export const AddButton = styled.button`

`;

export const RemoveButton = styled.button`

`;

export const FinishButton = styled.button`

`;

export const Item = styled.section<{ checked: boolean }>`
  background-color: #fff;
  border-radius: 20px;
  padding: 1rem;

  background-color: ${props => (props.checked ? '#0f09' : '#fff')};
`;

export const Name = styled.p``;
