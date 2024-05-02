import React from "react";

function Input({ label, otherProps }) {
  return (
    <div>
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
}

export default Input;
