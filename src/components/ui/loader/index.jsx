import React from "react";

import style from "./index.module.scss";

const loader = () => {
  return <div className={style.spinner}></div>;
};

export default loader;
