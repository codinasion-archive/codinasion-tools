import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { FormatToPathCase as FormatToPathCaseFunc } from "codinasion-tools";

function FormatToPathCase() {
  const [text, setText] = React.useState("");
  const [pathCaseText, setPathCaseText] = React.useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleConvert = () => {
    const pathCaseText = FormatToPathCaseFunc(text);
    setPathCaseText(pathCaseText);
  };

  return (
    <>
      <div>
        <ToolLabel label="Text" />
        <ToolInput
          inputPlaceholder="Enter Text"
          inputValue={text}
          handleInputValueChange={handleTextChange}
        />
        <ToolButton
          buttonLabel="Convert"
          handleButtonClick={handleConvert}
          disabled={text === ""}
        />
        <ToolLabel label="Path Case Text" />
        <ToolInput
          inputPlaceholder="Path Case Text"
          inputValue={pathCaseText}
          disabled
        />
      </div>
    </>
  );
}

export default FormatToPathCase;
