import React from "react";

const Button = ({ name, clickHandler, className }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={() => clickHandler(name)}
    >
      {name}
    </button>
  );
};

export default Button;
