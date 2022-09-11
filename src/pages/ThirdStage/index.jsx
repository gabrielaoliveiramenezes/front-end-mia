import Button from '../../components/Button';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ThirdStage = () => {
  const navigate = useNavigate();
  const [valueButton, setValueButton] = useState();

  const handleClick = (value) => {
    setValueButton(value);
  }

  useEffect(()=>{
    if(valueButton){
      localStorage.setItem("type", valueButton);
      navigate("/fourth-stage", {state: {valueButton: valueButton}});
    }
  }, [valueButton])

  return(
    <Styled.Container>
      <Styled.InfoArea>
        <Styled.Icon src="src/assets/images/bag-icon.png" />
        <Styled.TextArea>Vamos supor que você queira otimizar o <br /> marketing de uma empresa. Qual seria?</Styled.TextArea>

        <Styled.ButtonWrapper>
          <Button text="Hamburgueria" width="448px" height="48px" onClick={() => handleClick("Hamburgueria")} hasIcon="true" iconUrl="src/assets/images/burguer.png"/>
          <Button text="Drogaria" width="448px" height="48px" onClick={() => handleClick("Drogaria")} hasIcon="true" iconUrl="src/assets/images/medicine.png"/>
          <Button text="Loja de roupas" width="448px" height="48px" onClick={() => handleClick("Loja de roupas")} hasIcon="true" iconUrl="src/assets/images/shirt.png"/>
        </Styled.ButtonWrapper>
        
      </Styled.InfoArea>
    </Styled.Container>
  )
}

export default ThirdStage;