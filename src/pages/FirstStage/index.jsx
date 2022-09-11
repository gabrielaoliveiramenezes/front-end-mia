import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as Styled from './styled'

const FirstStage = () => {
  return (
    <Styled.Container>
      <Styled.InfoArea>
        <Styled.WelcomeIcon src="src/assets/images/welcome-icon.png" />

        <Input type="text" width="448px" height="40px" label="Como você quer ser chamado?" placeholder="Escreva seu nome"/>

        <Styled.ButtonArea>
          <Button text="Avançar" width="448px" height="48px"/>
        </Styled.ButtonArea>
      </Styled.InfoArea>
    </Styled.Container>
  )
}

export default FirstStage
