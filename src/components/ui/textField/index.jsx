import React from "react";

import style from "./index.module.scss";

const TextField = (props) => {
  return (
    <div className={style.textField}>
      <textarea {...props} placeholder="Write text" />
    </div>
  );
};

export default TextField;
