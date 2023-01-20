import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertOctalToHexadecimal as ConvertOctalToHexadecimalFunc } from "codinasion-tools";

function ConvertOctalToHexadecimal() {
  const [octalNumber, setOctalNumber] = React.useState("");
  const [hexadecimalNumber, setHexadecimalNumber] = React.useState("");

  const handleOctalNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOctalNumber(e.target.value);
  };

  const handleConvert = () => {
    const hexadecimalNumber = ConvertOctalToHexadecimalFunc(
      Number(octalNumber)
    );
    setHexadecimalNumber(hexadecimalNumber.toString());
  };

  return (
    <>
      <div>
        <ToolLabel label="Octal Number" />
        <ToolInput
          inputPlaceholder="Enter Octal Number"
          inputValue={octalNumber}
          handleInputValueChange={handleOctalNumberChange}
        />
        <ToolButton
          buttonLabel="Convert"
          handleButtonClick={handleConvert}
          disabled={octalNumber === ""}
        />
        <ToolLabel label="Hexadecimal Number" />
        <ToolInput
          inputPlaceholder="Hexadecimal Number"
          inputValue={hexadecimalNumber}
          disabled
        />
      </div>
    </>
  );
}

export default ConvertOctalToHexadecimal;
