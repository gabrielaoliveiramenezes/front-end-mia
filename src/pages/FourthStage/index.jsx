import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import InformationScreen from '../../components/InformationScreen';

const FourthStage = () => {
  const name = localStorage.getItem("name");
  const [redirectNow, setRedirectNow] = useState(false);
  const [text, setText] = useState('');
  const {state} = useLocation();
  const { valueButton } = state;

  useEffect(()=>{
    switchText();
  }, []);

  const switchText = () => {
    switch(valueButton){
      case 'Hamburgueria':
        setText('hamburgueria');
      break;

      case 'Drogaria':
        setText('drogaria');
      break;

      case 'Loja de roupas':
        setText('loja de roupas');
      break;
    }
  }

  setTimeout(() => setRedirectNow(true), 5000);

  const paragraphy = (
    <p>A partir de agora você vai embarcar <br/> nessa experiência comigo e descobrir <br/> como utilizo a minha inteligência para <br/> impactar nos resultados da sua <br/> {text}.</p>
  );

  return redirectNow ? (
      <Navigate to="/fifthy-stage" />
    ) : (
      <InformationScreen iconUrl="assets/images/rocket.png" text={`Legal, ${name}!`} paragraphy={paragraphy}/>
  )
}

export default FourthStage;