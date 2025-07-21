import * as React from "react";
import "./Button.scss";

const Button = ({ type, icon = null, onClick, children }) => {
  let btnClassName = "ins-button";
  const textClassName = "ins-button__text"; // always the same

  switch (type) {
    case "outlined":
      btnClassName += " outlined";
      break;
    case "dark-outlined":
      btnClassName += " dark-outlined";
      break;
    case "darkText-outlined":
      btnClassName += " darkText-outlined";
      break;
    default:
      btnClassName += " filled";
      break;
  }

  return (
    <button type="button" className={btnClassName} onClick={onClick}>
      {icon && <img src={icon} alt="button icon" />}
      {children ? <p className={textClassName}>{children}</p> : ""}
    </button>
  );
};

export default Button;
