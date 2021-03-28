import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;
export const Form = styled.form``; //i will look for styles to add here
export const Input = styled.input`
  background-color: transparent;
  border: 2px solid #84578a;
  border-radius: 50px;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;

  &:placeholder {
    color: #fff;
  }

  &:focus {
    outline: none;
    background-color: #84578a;
  }
`;
