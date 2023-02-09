import React from "react";

import style from "./index.module.scss";

const buttonDefault = ({ children, ...props }) => {
  return (
    <button {...props} variant="contained" className={style.buttonDefault}>
      {children}
    </button>
  );
};

export default buttonDefault;
