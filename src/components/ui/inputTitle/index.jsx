import React from "react";

import style from "./index.module.scss";

const InputTitle = (props) => {
  return (
    <div className={style.input__title}>
      <input {...props} type="text" placeholder="Title post" />
    </div>
  );
};

export default InputTitle;
