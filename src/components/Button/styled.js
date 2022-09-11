import styled from 'styled-components';

export const Button = styled.button`
  max-width: ${props => props.width};
  width: 100%;
  height: ${props => props.height};
  background: #D81656;
  border-radius: 24px;
  border: none;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;