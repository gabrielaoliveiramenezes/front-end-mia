import React from 'react'
import { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as Styled from './styled'
import { useNavigate } from 'react-router-dom'

const FirstStage = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("name", inputValue);
    navigate('/second-stage');
  }

  return (
    <Styled.Container>
      <Styled.InfoArea>
        <Styled.WelcomeIcon src="src/assets/images/welcome-icon.png" />

        <Input type="text" width="448px" height="40px" label="Como você quer ser chamado?" placeholder="Escreva seu nome" onChange={(event) => setInputValue(event.target.value)} value={inputValue}/>

        <Styled.ButtonArea>
          <Button text="Avançar" width="448px" height="48px" onClick={handleClick}/>
        </Styled.ButtonArea>
      </Styled.InfoArea>
    </Styled.Container>
  )
}

export default FirstStage
