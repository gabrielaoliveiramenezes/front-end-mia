import styled from "styled-components";

export const Container = styled.section`
  background: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

export const TextArea = styled.p`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #D81656;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;