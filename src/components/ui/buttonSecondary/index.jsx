import React from "react";

import style from "./index.module.scss";

const ButtonSecondary = ({ children, ...props }) => {
  return (
    <button {...props} variant="contained" className={style.ButtonSecondary}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
