import React from "react";

import SearchSvg from "../../../assets/svg/SearchSvg";

import style from "./index.module.scss";

const SearchUi = (props) => {
  return (
    <div className={style.searchUi}>
      <span className={style.searchUi__icon}>
        <SearchSvg className={style.icon} />
      </span>
      <input {...props} type="text" placeholder="Search title..." />
    </div>
  );
};

export default SearchUi;
