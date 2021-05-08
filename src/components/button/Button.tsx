import React, { FC } from "react";
import "./button.css";

type ButtonProps = {
  name?: string;
  text: string;
  onClick?: any;
  isDisabled?: boolean;
  variant?: string;
};

const Button: FC<ButtonProps> = (props) => {
  const { name, text, onClick, isDisabled = false, variant } = props;
  return (
    <button
      className={`primaryBtn ${variant}`}
      name={name}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
