import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { FormatToPascalCase as FormatToPascalCaseFunc } from "codinasion-tools";

function FormatToPascalCase() {
  const [text, setText] = React.useState("");
  const [pascalCaseText, setPascalCaseText] = React.useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleConvert = () => {
    const pascalCaseText = FormatToPascalCaseFunc(text);
    setPascalCaseText(pascalCaseText);
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
        <ToolLabel label="Pascal Case Text" />
        <ToolInput
          inputPlaceholder="Pascal Case Text"
          inputValue={pascalCaseText}
          disabled
        />
      </div>
    </>
  );
}

export default FormatToPascalCase;
