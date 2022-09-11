import styled from "styled-components";

export const Container = styled.section`
  background-image: url(src/assets/images/background.jpg);
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 142px;

  @media (max-width: 425px){
    padding: 20px;
  }
`;

export const BiudIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const TextArea = styled.h1`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  color: #FFFFFF;
`;

export const ButtonArea = styled.div`
  display: flex;
`;