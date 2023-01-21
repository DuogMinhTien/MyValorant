import InputDate from './InputDate';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import InputText from './InputText';
import styles from './styles.module.scss';
import { useRef, useEffect } from 'react';

export default function Input({
  type,
  id,
  message,
  placeholder,
  label,
  name,
  icon,
  border = false,
  style,
  responsive = true,
  backgroundColor = '#fff',
  styleIcon = {},
  iconOnClick = function () {},
  value,
  onChange,
  onKeyPressEnter = function () {},
  ...props
}) {
  let InputType;
  if (type === 'password') InputType = InputPassword;
  else if (type === 'email') InputType = InputEmail;
  else if (type === 'date') InputType = InputDate;
  else InputType = InputText;
  return (
    <div
      className={`${styles['form-control']} ${responsive && styles['responsive']}`}
      style={{ ...style, border: border ? '2px solid #b1b5c3' : 'none', backgroundColor: backgroundColor }}
    >
      <label className={styles['form-label']} htmlFor={id}>
        {label}
      </label>
      <div className={styles['form-input']} style={{ backgroundColor: backgroundColor }}>
        <InputType
          value={value}
          onChange={onChange}
          id={id}
          placeholder={placeholder}
          name={name}
          style={{ backgroundColor: backgroundColor }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onKeyPressEnter();
            }
          }}
          {...props}
        />
        <span
          className={styles['form-input__icon']}
          style={styleIcon}
          onClick={() => {
            iconOnClick();
          }}
        >
          {icon}
        </span>
      </div>
      <p className="message-invalid">{message}</p>
    </div>
  );
}
