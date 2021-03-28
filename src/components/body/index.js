import React from 'react';
import { Container, Image, Info, Rating, Overview, About } from './styles/Body';

function Body({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Body.Image = function BodyImage({ children, ...restProps }) {
  return <Image {...restProps}></Image>;
};

Body.Info = function BodyInfo({ children, restProps }) {
  return <Info {...restProps}> {children}</Info>;
};

Body.Rating = function BodyRating({ children, ...restProps }) {
  return <Rating {...restProps}> {children}</Rating>;
};

Body.Overview = function BodyOverView({ children, ...restProps }) {
  return <Overview {...restProps}> {children} </Overview>;
};

Body.About = function BodyAbout({ children, ...restProps }) {
  return <About {...restProps}> {children} </About>;
};

export default Body;
