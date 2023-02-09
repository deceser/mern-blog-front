import React from "react";

import style from "./index.module.scss";

const InputFile = (props) => {
  return (
    <label className={style.upload}>
      Upload image
      <input {...props} type="file" className={style.input__file} />
    </label>
  );
};

export default InputFile;
