import React from 'react';
import "./style.css";

const Button = ({ onClickHandler, value, title }: any) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};

export default Button