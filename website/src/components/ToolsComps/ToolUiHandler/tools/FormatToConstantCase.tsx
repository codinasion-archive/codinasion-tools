import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { FormatToConstantCase as FormatToConstantCaseFunc } from "codinasion-tools";

function FormatToConstantCase() {
  const [text, setText] = React.useState("");
  const [constantCaseText, setConstantCaseText] = React.useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleConvert = () => {
    const constantCaseText = FormatToConstantCaseFunc(text);
    setConstantCaseText(constantCaseText);
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
        <ToolLabel label="Constant Case Text" />
        <ToolInput
          inputPlaceholder="Constant Case Text"
          inputValue={constantCaseText}
          disabled
        />
      </div>
    </>
  );
}

export default FormatToConstantCase;
