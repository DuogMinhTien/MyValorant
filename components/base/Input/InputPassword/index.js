import { useEffect } from 'react';
import { css } from '~/utils/base';

function Password(e) {
  let iconEye = e?.nativeEvent?.path[1];
  let inputEl = e?.nativeEvent?.path[2].querySelector('input');
  let eyeOpen = iconEye.querySelector('.eye-open');
  let eyeClose = iconEye.querySelector('.eye-close');
  if (eyeClose?.style.display == 'none') {
    css(eyeClose, 'display', 'block');
    css(eyeOpen, 'display', 'none');
    if (inputEl) inputEl.type = 'password';
  } else {
    css(eyeClose, 'display', 'none');
    css(eyeOpen, 'display', 'block');
    if (inputEl) inputEl.type = 'text';
  }
}
export default function InputPassword({ id, placeholder, name, register, style, onKeyPress, ...props }) {
  return (
    <>
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="password"
        placeholder={placeholder}
        style={style}
        onKeyPress={(e) => onKeyPress(e)}
        {...props}
      />
      <div
        className="form-input__icon"
        onClick={(e) => {
          Password(e);
        }}
      >
        <svg
          className="eye-close"
          width="22"
          height="9"
          viewBox="0 0 22 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1C1 1 4.5 5 11 5C17.5 5 21 1 21 1M3 2.645L1 5M21 5L19.004 2.648M7.914 4.68L7 7.5M14.063 4.688L15 7.5"
            stroke="#7E7E7E"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="eye-open"
          width="22"
          height="17"
          viewBox="0 0 22 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.2565 7.462C20.7305 8.082 20.7305 8.919 20.2565 9.538C18.7635 11.487 15.1815 15.5 10.9995 15.5C6.81752 15.5 3.23552 11.487 1.74252 9.538C1.51191 9.24113 1.38672 8.87592 1.38672 8.5C1.38672 8.12408 1.51191 7.75887 1.74252 7.462C3.23552 5.513 6.81752 1.5 10.9995 1.5C15.1815 1.5 18.7635 5.513 20.2565 7.462V7.462Z"
            stroke="#7E7E7E"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11.5C12.6569 11.5 14 10.1569 14 8.5C14 6.84315 12.6569 5.5 11 5.5C9.34315 5.5 8 6.84315 8 8.5C8 10.1569 9.34315 11.5 11 11.5Z"
            stroke="#7E7E7E"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
