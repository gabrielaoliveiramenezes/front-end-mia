import React from 'react';
import { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { onlyLetters } from '../../helpers/regex';

const FirstStage = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    if(inputValue){
      localStorage.setItem("name", inputValue);
      navigate('/second-stage');
    }else{
      alert("Este campo não pode ficar vazio!");
    }
  }

  const handleText = (event) => {
    const {value} = event.target;
    event.target.value = onlyLetters(value);
    setInputValue(event.target.value);
  }

  return (
    <Styled.Container>
      <Styled.InfoArea>
        <Styled.WelcomeIcon src="assets/images/welcome-icon.png" />

        <Input type="text" width="448px" height="40px" label="Como você quer ser chamado?" placeholder="Escreva seu nome" onChange={(event) => {handleText(event)}} value={inputValue}/>

        <Styled.ButtonArea>
          <Button text="Avançar" width="448px" height="48px" onClick={handleClick}/>
        </Styled.ButtonArea>
      </Styled.InfoArea>
    </Styled.Container>
  )
}

export default FirstStage;
