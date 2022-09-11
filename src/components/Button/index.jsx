import * as Styled from './styled';

function Button({
  width,
  height,
  type,
  text,
  onClick,
}) {
  return (
    <Styled.Button
      type={type}
      width={width}
      height={height}
      onClick={onClick}
    >
      <Styled.ButtonText>{text}</Styled.ButtonText>
    </Styled.Button>
  );
}

export default Button;
