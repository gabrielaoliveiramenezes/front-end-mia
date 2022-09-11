import React from 'react';
import { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';

const FifthyStage = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("number", inputValue);
    // navigate('/second-stage');
  }

  return (
    <Styled.Container>
      <Styled.InfoArea>
        <Styled.WelcomeIcon src="src/assets/images/phone.png" />

        <Input type="text" width="448px" height="40px" label="Essa experiência acontece toda pelo WhatsApp. Por isso, me diz qual o número do seu celular?" placeholder="Escreva seu whatsapp" onChange={(event) => setInputValue(event.target.value)} value={inputValue} description="Não se preocupe! Seu número será utilizado exclusivamente para que eu demonstre a experiência MIA"/>

        <Styled.ButtonArea>
          <Button text="Avançar" width="448px" height="48px" onClick={handleClick}/>
        </Styled.ButtonArea>
      </Styled.InfoArea>
    </Styled.Container>
  )
}

export default FifthyStage;
