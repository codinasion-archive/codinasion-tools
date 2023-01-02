import React from "react";

interface headerProp {
  title: string;
  subTitle: string;
  cssStyle?: string;
}

const Header: React.FC<headerProp> = ({ title, subTitle, cssStyle }) => {
  return (
    <header
      className={`text-center w-full flex flex-col items-center justify-center gap-2 ${cssStyle} dark:text-white`}
      aria-label={`this is title of ${title}`}
      
    >
      <h2 className="text-3xl sm:text-5xl font-bold">{title}</h2>
      <h3 className="opacity-75 text-lg sm:text-xl">{subTitle}</h3>
    </header>
  );
};

export default Header;
