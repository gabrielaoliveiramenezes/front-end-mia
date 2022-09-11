import Button from '../Button';
import * as Styled from './styled';

const InformationScreen = ({iconUrl, text, paragraphy, hasButton, hasLink}) => {
  const textButton = (
    <span>Indique um amigo e concorra a um <br/> iPhone 13 Pro Max</span>
  )

  return(
    <Styled.Container>
      <Styled.GreetingsArea>
        <Styled.Emoji src={iconUrl}/>
        <Styled.TextArea>
          <span>{text}<br /></span>
          {paragraphy}
        </Styled.TextArea>

        {hasButton && (
          <Button text={textButton} width="448px" height="82px" onClick={() => {}} hasIcon="true" iconUrl="assets/images/iPhone.png" align="left" widthIcon="58px" heightIcon="58px"/>
        )}

        {hasLink && (
          <Styled.CustomLink to="/">Finalizar</Styled.CustomLink>
        )}
      </Styled.GreetingsArea>
    </Styled.Container>
  )
}

export default InformationScreen;