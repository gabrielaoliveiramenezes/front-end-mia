import * as Styled from './styled';

const InformationScreen = ({iconUrl, text, paragraphy}) => {
  return(
    <Styled.Container>
      <Styled.GreetingsArea>
        <Styled.Emoji src={iconUrl}/>
        <Styled.TextArea>
          <span>{text}<br /></span>
          {paragraphy}
        </Styled.TextArea>
      </Styled.GreetingsArea>
    </Styled.Container>
  )
}

export default InformationScreen;