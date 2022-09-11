import styled from "styled-components";

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