import React from "react";

import style from "./index.module.scss";

const SelectUi = ({ options, value, onChange }) => {
  return (
    <div className={style.selectUi}>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectUi;
