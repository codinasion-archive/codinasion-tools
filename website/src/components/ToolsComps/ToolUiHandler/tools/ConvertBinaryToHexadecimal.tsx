import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertBinaryToHexadecimal as ConvertBinaryToHexadecimalFunc } from "codinasion-tools";

function ConvertBinaryToHexadecimal() {
  const [binaryNumber, setBinaryNumber] = React.useState("");
  const [hexadecimalNumber, setHexadecimalNumber] = React.useState("");

  const handleBinaryNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBinaryNumber(e.target.value);
  };

  const handleConvert = () => {
    const hexadecimalNumber = ConvertBinaryToHexadecimalFunc(binaryNumber);
    setHexadecimalNumber(hexadecimalNumber.toString());
  };
  return (
    <>
      <div>
        <ToolLabel label="Binary Number" />
        <ToolInput
          inputPlaceholder="Enter Binary Number"
          inputValue={binaryNumber}
          handleInputValueChange={handleBinaryNumberChange}
        />
        <ToolButton
          buttonLabel="Convert"
          handleButtonClick={handleConvert}
          disabled={binaryNumber === ""}
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

export default ConvertBinaryToHexadecimal;
