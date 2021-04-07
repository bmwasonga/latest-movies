import React from 'react';
import { Container, Form, Input } from './styles/styles';

function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Form = function HeaderSerch({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Header.Input = function HeaderInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

export default Header;
