import React from 'react'
import Button from '../../components/Button'
import * as Styled from './styled'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/first-stage');
  }

  return (
    <Styled.Container>
      <Styled.InfoArea>
        <Styled.BiudIcon src="src/assets/icons/biud.svg" />

        <Styled.TextArea>
          Melhor do que eu <br /> escrever um monte <br /> de coisa sobre a <br /> BIUD, é você viver a <br /> experiência!
        </Styled.TextArea>

        <Styled.ButtonArea>
          <Button text="Começar" width="212px" height="40px" onClick={handleClick} type="button" />
        </Styled.ButtonArea>
      </Styled.InfoArea>
    </Styled.Container>
  )
}

export default HomePage
