import * as Styled from './styled';

function Input({
  height,
  width,
  type,
  placeholder,
  name,
  label,
  value,
  onChange,
  description,
  hasSpan
}) {
  return (
    <Styled.InputArea height={height} width={width}>
      <label htmlFor={name}>{label}</label>
      {hasSpan && (
        <span>{description}</span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Styled.InputArea>
  );
}

export default Input;
