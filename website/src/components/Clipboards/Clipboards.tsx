import React, { useEffect, useState } from "react";
import { TbClipboardText } from "react-icons/tb";

type clipboardType = {
  clipText: string;
  cssStyle?: string;
};

function Clipboards({ clipText, cssStyle }: clipboardType) {
  const [clipState, setClipState] = useState<boolean>(false);

  const handleClipboard = (clip: string) => {
    navigator.clipboard.writeText(clip);
    setClipState(true);
  };
  
  return (
    <button
      className={`group bg-very-dark-blue ${cssStyle}`}
      type="button"
      onClick={() => {
        handleClipboard(clipText);
        setTimeout(() => {
          setClipState(false);
        }, 3000);
      }}
      style={{ color: clipState ? "rgb(0, 255, 0)" : "#fff" }}
      title={`${clipState ? "copied" : "copy"}`}
    >
      <TbClipboardText className="group-hover:scale-125 text-xl"/>
    </button>
  );
}

export default Clipboards;
