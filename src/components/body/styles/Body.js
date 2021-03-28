import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  margin: 1rem;
  background-color: #7b0f8a;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  border-radius: 3px;
`;
export const Image = styled.img`
  width: 100%;
`;
export const Info = styled.h3`
  color: #eeee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.18rem;
  padding: 0.5rem 0.5rem 0.5rem;
  margin-top: 0;
`;

//review and change the background color dynamicaly
export const Rating = styled.span`
  background-color: #fff;
  padding: 0.25rem 0.25rem;
  border-radius: 3px;
  font-weight: bold;
  border-radius: 10px 0;
`;
export const Overview = styled.div`
  background-color: white;
  padding: 2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  max-height: 100%;
  transform: translateY(101%);
  transition: 0.4s ease-in;
`;
export const About = styled.p`
  color: #eeee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.18rem;
  padding: 0.5rem 0.5rem 0.5rem;
  margin-top: 0;
`;
