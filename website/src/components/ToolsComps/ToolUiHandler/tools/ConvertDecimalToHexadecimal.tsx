import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertDecimalToHexadecimal as ConvertDecimalToHexadecimalFunc } from "codinasion-tools";

function ConvertDecimalToHexadecimal() {
  const [decimalNumber, setDecimalNumber] = React.useState("");
  const [hexadecimalNumber, setHexadecimalNumber] = React.useState("");

  const handleDecimalNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDecimalNumber(e.target.value);
  };

  const handleConvert = () => {
    const hexadecimalNumber = ConvertDecimalToHexadecimalFunc(
      Number(decimalNumber)
    );
    setHexadecimalNumber(hexadecimalNumber.toString());
  };
  return (
    <>
      <div>
        <ToolLabel label="Decimal Number" />
        <ToolInput
          inputPlaceholder="Enter Decimal Number"
          inputValue={decimalNumber}
          handleInputValueChange={handleDecimalNumberChange}
        />
        <ToolButton
          buttonLabel="Convert"
          handleButtonClick={handleConvert}
          disabled={decimalNumber === ""}
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

export default ConvertDecimalToHexadecimal;
