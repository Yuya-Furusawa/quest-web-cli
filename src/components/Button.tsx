import * as React from "react";

type Props = {
  text: string;
  primary: boolean;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ text, primary, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center justify-center rounded cursor-pointer hover:opacity-75 px-3 py-2 text-sm min-w-[80px] ${
      primary ? "bg-sky-600 text-white" : "text-sky-600 border border-sky-600"
    }`}
  >
    {text}
  </div>
);

export default Button;
