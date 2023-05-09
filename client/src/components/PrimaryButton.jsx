import React from "react";

export default function PrimaryButton({ text, style, onClickHandler }) {
  return (
    <div
      onClick={onClickHandler}
      className={`text-center text-white bg-gradient-to-tr from-primary2 to-primary px-6 py-2 rounded cursor-pointer ${style} hover:shadow-xl transition-all duration-200`}
    >
      {text}
    </div>
  );
}
