import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertHexadecimalToDecimal as ConvertHexadecimalToDecimalFunc } from "codinasion-tools";

function ConvertHexadecimalToDecimal() {
  const [hexadecimalNumber, setHexadecimalNumber] = React.useState("");
  const [decimalNumber, setDecimalNumber] = React.useState("");

  const handleHexadecimalNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHexadecimalNumber(e.target.value);
  };

  const handleConvert = () => {
    const decimalNumber = ConvertHexadecimalToDecimalFunc(hexadecimalNumber);
    setDecimalNumber(decimalNumber.toString());
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
        <ToolLabel label="Decimal Number" />
        <ToolInput
          inputPlaceholder="Decimal Number"
          inputValue={decimalNumber}
          disabled
        />
      </div>
    </>
  );
}

export default ConvertHexadecimalToDecimal;
