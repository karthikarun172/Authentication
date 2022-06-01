import React from "react";

function Input({
  error = false,
  errorMessage,
  placeholder,
  type = "text",
  name,
  value,
  classNameInput,
  classNameContainer,
  classNameErrorMSG,
  onChange,
}) {
  return (
    <div className={classNameContainer}>
      <input
        className={classNameInput}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error ? <p className={classNameErrorMSG}>{errorMessage}</p> : null}
    </div>
  );
}

export default Input;
