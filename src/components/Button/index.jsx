import * as Styled from './styled';

function Button({
  width,
  height,
  type,
  text,
  onClick,
  align,
  hasIcon,
  iconUrl,
  value
}) {
  return (
    <Styled.Button
      type={type}
      width={width}
      height={height}
      onClick={onClick}
      align={align}
      hasIcon={hasIcon}
      value={value}
    >
      <Styled.TextArea hasIcon={hasIcon}>
        {hasIcon && (<Styled.Icon src={iconUrl} />)}
        <Styled.ButtonText>{text}</Styled.ButtonText>
      </Styled.TextArea>
    </Styled.Button>
  );
}

export default Button;
