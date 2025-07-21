import * as React from "react";
import "./CheckBox.scss";

const CheckBox = ({ checked, onChange, label, disabled = false }) => {
  return (
    <label className={`ins-checkbox ${disabled ? "is-disabled" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-checked={checked}
      />
      <span className="ins-checkbox__box" />
      <span className="ins-checkbox__label">{label}</span>
    </label>
  );
};

export default CheckBox;
