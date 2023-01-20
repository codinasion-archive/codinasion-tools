import React from "react";

interface activeLangProp {
  activeLang: string;
  setLang: (e: string) => void;
}
function ActiveLang({ activeLang, setLang }: activeLangProp) {
  return (
    <div className="top-0 border-b">
      <button
        onClick={() => {
          setLang("tryit");
        }}
        className="p-2 px-3 relative dark:border-white border-black rounded-lg rounded-b-none"
      >
        Try It
        <span
          style={{
            width: activeLang === "tryit" ? "100%" : 0,
          }}
          className="h-[2px] bg-very-dark-blue dark:bg-very-light-blue absolute bottom-0 left-0"
        ></span>
      </button>
      <button
        onClick={() => {
          setLang("javascript");
        }}
        className="p-2 px-3 relative dark:border-white border-black rounded-lg rounded-b-none"
      >
        Javascript
        <span
          style={{
            width: activeLang === "javascript" ? "100%" : 0,
          }}
          className="h-[2px] bg-very-dark-blue dark:bg-very-light-blue absolute bottom-0 left-0"
        ></span>
      </button>
      <button
        onClick={() => {
          setLang("typescript");
        }}
        className="p-2 relative px-3 dark:border-white border-black rounded-lg rounded-b-[3px]"
      >
        Typescript
        <span
          style={{
            width: activeLang === "typescript" ? "100%" : 0,
          }}
          className="h-[2px] bg-very-dark-blue dark:bg-very-light-blue absolute bottom-0 left-0"
        ></span>
      </button>
      <button
        onClick={() => {
          setLang("python");
        }}
        className="p-2 relative px-3 dark:border-white border-black rounded-lg rounded-b-none"
      >
        Python
        <span
          className="h-[2px] bg-very-dark-blue dark:bg-very-light-blue absolute bottom-0 left-0"
          style={{ width: activeLang === "python" ? "100%" : 0 }}
        ></span>
      </button>
      <button
        onClick={() => {
          setLang("shell");
        }}
        className="p-2 relative px-3 dark:border-white border-black rounded-lg rounded-b-none"
      >
        Shell
        <span
          className="h-[2px] bg-very-dark-blue dark:bg-very-light-blue absolute bottom-0 left-0"
          style={{ width: activeLang === "shell" ? "100%" : 0 }}
        ></span>
      </button>
    </div>
  );
}

export default ActiveLang;
