export default function InputText({ id, placeholder, name, style = {}, value, onChange, onKeyPress, ...props }) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        style={{ ...style }}
        onKeyPress={(e) => onKeyPress(e)}
        {...props}
      />
    </>
  );
}
