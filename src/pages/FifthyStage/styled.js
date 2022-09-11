import styled from "styled-components";

export const Container = styled.section`
  background-color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  width: auto;
`;

export const WelcomeIcon = styled.img`
  width: 80px;
  height: 80px;
`;

export const QuestionText = styled.span`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  color: #000;
`;

export const ButtonArea = styled.div`
  display: flex;
`;