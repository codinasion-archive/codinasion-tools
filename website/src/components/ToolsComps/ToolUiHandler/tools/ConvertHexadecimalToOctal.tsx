import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertHexadecimalToOctal as ConvertHexadecimalToOctalFunc } from "codinasion-tools";

function ConvertHexadecimalToOctal() {
  const [hexadecimalNumber, setHexadecimalNumber] = React.useState("");
  const [octalNumber, setOctalNumber] = React.useState("");

  const handleHexadecimalNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHexadecimalNumber(e.target.value);
  };

  const handleConvert = () => {
    const octalNumber = ConvertHexadecimalToOctalFunc(hexadecimalNumber);
    setOctalNumber(octalNumber.toString());
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
        <ToolLabel label="Octal Number" />
        <ToolInput
          inputPlaceholder="Octal Number"
          inputValue={octalNumber}
          disabled
        />
      </div>
    </>
  );
}

export default ConvertHexadecimalToOctal;
