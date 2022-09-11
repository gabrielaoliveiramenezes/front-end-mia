import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.section`
  background: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GreetingsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  max-width: 448px;
  width: 100%;
`;

export const Emoji = styled.img`
  width: 80px;
  height: 80px;
`;

export const TextArea = styled.p`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;

  span{
    color: #D81656;
  }
`;

export const CustomLink = styled(Link)`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  text-decoration: none;
`;