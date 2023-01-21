import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { FormatToSnakeCase as FormatToSnakeCaseFunc } from "codinasion-tools";

function FormatToSnakeCase() {
  const [text, setText] = React.useState("");
  const [snakeCaseText, setSnakeCaseText] = React.useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleConvert = () => {
    const snakeCaseText = FormatToSnakeCaseFunc(text);
    setSnakeCaseText(snakeCaseText);
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
        <ToolLabel label="Snake Case Text" />
        <ToolInput
          inputPlaceholder="Snake Case Text"
          inputValue={snakeCaseText}
          disabled
        />
      </div>
    </>
  );
}

export default FormatToSnakeCase;
