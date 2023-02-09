import React from "react";

import style from "./index.module.scss";

const InputUi = ({ id, label, register, error, ...props }) => {
  return (
    <div className={error ? style.errors__input : style.inputUi}>
      <input {...register} {...props} id={id} />
      <label htmlFor={id}>{label}</label>
      <span className={style.error__span}>{error}</span>
    </div>
  );
};

export default InputUi;
