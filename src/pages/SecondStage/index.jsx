import { useState } from "react";
import { Navigate } from "react-router-dom";
import InformationScreen from '../../components/InformationScreen';

const SecondStage = () => {
  const name = localStorage.getItem("name");
  const [redirectNow, setRedirectNow] = useState(false);

  setTimeout(() => setRedirectNow(true), 4000);

  const paragraphy = (
    <p>Vou te mostrar o meu jeito de fazer <br/> marketing direcionado por dados.</p>
  );

  return redirectNow ? (
      <Navigate to="/third-stage" />
    ) : (
      <InformationScreen iconUrl="assets/images/smile-emoji.png" text={`Prazer, ${name}!`} paragraphy={paragraphy}/>
  )
}

export default SecondStage;