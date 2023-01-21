import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertHexadecimalToBinary as ConvertHexadecimalToBinaryFunc } from "codinasion-tools";

function ConvertHexadecimalToBinary() {
  const [hexadecimalNumber, setHexadecimalNumber] = React.useState("");
  const [binaryNumber, setBinaryNumber] = React.useState("");

  const handleHexadecimalNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHexadecimalNumber(e.target.value);
  };

  const handleConvert = () => {
    const binaryNumber = ConvertHexadecimalToBinaryFunc(hexadecimalNumber);
    setBinaryNumber(binaryNumber.toString());
  };

  return (
    <>
      <div>
        <ToolLabel label="Hexadecimal Number" />
        <ToolInput
          inputPlaceholder="Enter Hexadecimal Number"
          inputValue={hexadecimalNumber}
          handleInputValueChange={handleHexadecimalNumberChange}
        />
        <ToolButton
          buttonLabel="Convert"
          handleButtonClick={handleConvert}
          disabled={hexadecimalNumber === ""}
        />
        <ToolLabel label="Binary Number" />
        <ToolInput
          inputPlaceholder="Binary Number"
          inputValue={binaryNumber}
          disabled
        />
      </div>
    </>
  );
}

export default ConvertHexadecimalToBinary;
