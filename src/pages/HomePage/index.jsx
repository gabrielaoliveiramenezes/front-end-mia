import React from 'react'
import Button from '../../components/Button'
import * as Styled from './styled'

const HomePage = () => {
  return (
    <Styled.Container>
      <Styled.InfoArea>
        <Styled.BiudIcon src="src/assets/icons/biud.svg" />

        <Styled.TextArea>
          Melhor do que eu <br /> escrever um monte <br /> de coisa sobre a <br /> BIUD, é você viver a <br /> experiência!
        </Styled.TextArea>

        <Styled.ButtonArea>
          <Button text="Começar" width="212px" height="40px"/>
        </Styled.ButtonArea>
      </Styled.InfoArea>
    </Styled.Container>
  )
}

export default HomePage
