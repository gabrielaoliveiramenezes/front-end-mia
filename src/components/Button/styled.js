import styled from 'styled-components';

export const Button = styled.button`
  max-width: ${props => props.width};
  width: 100%;
  height: ${props => props.height};
  background: #D81656;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  text-align: ${props => props.align};
`;

export const TextArea = styled.div`
  display: flex;
  justify-content: ${props => props.hasIcon ? "flex-start" : "center"};
  align-items: center;
  gap: 8px;
  padding-left: ${props => props.hasIcon ? "16px" : "0"};
`;

export const Icon = styled.img`
  width: ${props => props.widthIcon ? props.widthIcon : '16px' };
  width: ${props => props.heightIcon ? props.heightIcon : '16px' };
`;

export const ButtonText = styled.span`
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;