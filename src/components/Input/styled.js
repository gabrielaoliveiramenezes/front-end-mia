import styled from 'styled-components';

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;

  label{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #D81656;
  }

  input{
    width: ${props => props.width};
    height: ${props => props.height};
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding-left: 15px;

    @media (max-width: 425px){
      width: 100%;
    }
  }
`;