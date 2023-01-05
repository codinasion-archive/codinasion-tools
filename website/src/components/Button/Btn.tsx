import Link from "next/link";
import React from "react";

interface buttonProp {
  text: string | number;
  href?: string | null;
  target?: string;
  cssStyle?: string;
  icon?: JSX.Element | string;
  state?: boolean;
  ariaLabel: string;
  setState?: (event: boolean) => void;
}

const Btn= ({
  text = "button",
  href = null,
  target = "_self",
  cssStyle,
  icon,
  setState,
  state = false,
  ariaLabel = 'Unknown link',
}: buttonProp) => {
  if (href === null) {
    return (
      <button
        type="button"
        onClick={() => setState && setState(!state)}
        // aria-labelledby={label}
        
        className={`px-8 rounded-xl border-2 py-3 md:text-xl bg-very-dark-blue text-white flex items-center justify-center gap-2 hover:bg-very-light-blue hover:text-very-dark-blue group ${cssStyle}`}
      >
        {text}
        <span className="relative group-hover:scale-110">
          {icon && icon}
        </span>{" "}
      </button>
    );
  } else {
    return (
      <Link
        href={href}
        target={target}
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={`px-8 rounded-2xl border-2 py-3 text-xl bg-very-dark-blue dark:bg-white text-white dark:text-very-dark-blue flex items-center justify-center gap-2 hover:bg-white dark:hover:bg-very-dark-blue dark:hover:text-white shadow-lg  hover:shadow-xl hover:text-very-dark-blue group ${cssStyle}`}
      >
        {text}
        <span className="relative group-hover:scale-125">{icon && icon}</span>
      </Link>
    );
  }
};

export default Btn;
