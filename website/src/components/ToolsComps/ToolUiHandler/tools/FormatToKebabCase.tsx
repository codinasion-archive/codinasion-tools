import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { FormatToKebabCase as FormatToKebabCaseFunc } from "codinasion-tools";

function FormatToKebabCase() {
  const [text, setText] = React.useState("");
  const [kebabCaseText, setKebabCaseText] = React.useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleConvert = () => {
    const kebabCaseText = FormatToKebabCaseFunc(text);
    setKebabCaseText(kebabCaseText);
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
        <ToolLabel label="Kebab Case Text" />
        <ToolInput
          inputPlaceholder="Kebab Case Text"
          inputValue={kebabCaseText}
          disabled
        />
      </div>
    </>
  );
}

export default FormatToKebabCase;
