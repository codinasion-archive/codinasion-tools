import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { FormatToCamelCase as FormatToCamelCaseFunc } from "codinasion-tools";

function FormatToCamelCase() {
  const [text, setText] = React.useState("");
  const [camelCaseText, setCamelCaseText] = React.useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleConvert = () => {
    const camelCaseText = FormatToCamelCaseFunc(text);
    setCamelCaseText(camelCaseText);
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
        <ToolLabel label="Camel Case Text" />
        <ToolInput
          inputPlaceholder="Camel Case Text"
          inputValue={camelCaseText}
          disabled
        />
      </div>
    </>
  );
}

export default FormatToCamelCase;
