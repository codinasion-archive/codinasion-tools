import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { FormatToTitleCase as FormatToTitleCaseFunc } from "codinasion-tools";

function FormatToTitleCase() {
  const [text, setText] = React.useState("");
  const [titleCaseText, setTitleCaseText] = React.useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleConvert = () => {
    const titleCaseText = FormatToTitleCaseFunc(text);
    setTitleCaseText(titleCaseText);
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
        <ToolLabel label="Title Case Text" />
        <ToolInput
          inputPlaceholder="Title Case Text"
          inputValue={titleCaseText}
          disabled
        />
      </div>
    </>
  );
}

export default FormatToTitleCase;
