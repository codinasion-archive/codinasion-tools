import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertBinaryToDecimal as ConvertBinaryToDecimalFunc } from "codinasion-tools";

function ConvertBinaryToDecimal() {
  const [binaryNumber, setBinaryNumber] = React.useState("");
  const [decimalNumber, setDecimalNumber] = React.useState("");

  const handleBinaryNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBinaryNumber(e.target.value);
  };

  const handleConvert = () => {
    const decimalNumber = ConvertBinaryToDecimalFunc(binaryNumber);
    setDecimalNumber(decimalNumber.toString());
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

export default ConvertBinaryToDecimal;
