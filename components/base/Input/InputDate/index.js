function a(e) {
  let InputEl = e.target;
  InputEl.type = 'date';
}

export default function InputDate({ id, placeholder, name, style, onKeyPress, ...props }) {
  return (
    <input
      ref={inputRef}
      style={style}
      id={id}
      name={name}
      type="text"
      placeholder={placeholder}
      onFocus={(e) => {
        a(e);
      }}
      onKeyPress={(e) => onKeyPress(e)}
      {...props}
    />
  );
}
