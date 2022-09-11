import * as Styled from './styled';
import { useState } from "react";
import { Navigate } from "react-router-dom";

const SecondStage = () => {
  const name = localStorage.getItem("name");
  const [redirectNow, setRedirectNow] = useState(false);

  setTimeout(() => setRedirectNow(true), 5000);

  return redirectNow ? (
      <Navigate to="/third-stage" />
    ) : (
      <Styled.Container>
      <Styled.GreetingsArea>
        <Styled.Emoji src="src/assets/images/smile-emoji.png"/>
        <Styled.TextArea>
          <span>Prazer, {name}! <br /></span>
          Vou te mostrar o meu jeito de fazer <br /> marketing direcionado por dados.
        </Styled.TextArea>
      </Styled.GreetingsArea>
    </Styled.Container>
  )
}

export default SecondStage;