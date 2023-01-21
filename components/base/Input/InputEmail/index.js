export default function InputEmail({ id, placeholder, register, name, style, onKeyPress, ...props }) {
  return (
    <>
      <input
        id={id}
        style={style}
        name={name}
        type="email"
        placeholder={placeholder}
        onKeyPress={(e) => onKeyPress(e)}
        {...props}
      />
    </>
  );
}
