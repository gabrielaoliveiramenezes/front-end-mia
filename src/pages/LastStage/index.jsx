import { useEffect, useState } from "react";
import Button from "../../components/Button";
import InformationScreen from "../../components/InformationScreen";

const LastStage = () => {
  const name = localStorage.getItem("name");
  const type = localStorage.getItem("type");
  const [text, setText] = useState('');

  useEffect(()=>{
    switchText();
  }, []);

  const switchText = () => {
    switch(type){
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

  return(
    <InformationScreen iconUrl="src/assets/images/star-eyes.png" text={`Prontinho, ${name}!`} paragraphy="A experiência MIA que vai fazer sua hamburgueria decolar começará nos próximos minutos em seu WhatsApp." hasButton="true" hasLink="true"/>
  )
}

export default LastStage;