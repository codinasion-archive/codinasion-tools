import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { FormatToDotCase as FormatToDotCaseFunc } from "codinasion-tools";

function FormatToDotCase() {
  const [text, setText] = React.useState("");
  const [dotCaseText, setDotCaseText] = React.useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleConvert = () => {
    const dotCaseText = FormatToDotCaseFunc(text);
    setDotCaseText(dotCaseText);
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
        <ToolLabel label="Dot Case Text" />
        <ToolInput
          inputPlaceholder="Dot Case Text"
          inputValue={dotCaseText}
          disabled
        />
      </div>
    </>
  );
}

export default FormatToDotCase;
