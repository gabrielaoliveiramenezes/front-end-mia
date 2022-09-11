import React from 'react';
import { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { phoneMask } from '../../helpers/regex';

const FifthyStage = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    if(inputValue){
      localStorage.setItem("number", inputValue);
      navigate('/last-stage');
    }else{
      alert("Este campo não pode ficar vazio!");
    }
  }

  const handleText = (event) => {
    const {value} = event.target;
    event.target.value = phoneMask(value);
    setInputValue(event.target.value);
  }

  return (
    <Styled.Container>
      <Styled.InfoArea>
        <Styled.WelcomeIcon src="assets/images/phone.png" />

        <Input type="text" width="448px" height="40px" label="Essa experiência acontece toda pelo WhatsApp. Por isso, me diz qual o número do seu celular?" placeholder="Escreva seu whatsapp" onChange={(event) => handleText(event)} value={inputValue} description="Não se preocupe! Seu número será utilizado exclusivamente para que eu demonstre a experiência MIA" hasSpan="true"/>

        <Styled.ButtonArea>
          <Button text="Avançar" width="448px" height="48px" onClick={handleClick}/>
        </Styled.ButtonArea>
      </Styled.InfoArea>
    </Styled.Container>
  )
}

export default FifthyStage;
