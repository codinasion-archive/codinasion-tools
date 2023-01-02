import Link from "next/link";
import React from "react";

interface urlBtnProp {
  name: string;
  href: string;
  ariaLabel: string;
  target?: string;
  cssStyle?: string;
  icon?: JSX.Element | string;
}

const UrlBtn: React.FC<urlBtnProp> = ({
  name,
  ariaLabel='',
  href = "#",
  target = "_top",
  icon = null,
  cssStyle,
}) => {
  return (
    <Link
      href={href}
      target={target}
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`relative z-10 border-transparent px-4 p-1 hover:opacity-75 group dark:text-white ${cssStyle}`}
    >
      {name}
      <span className="group-hover:scale-125">{icon && icon}</span>
    </Link>
  );
};

export default UrlBtn;
