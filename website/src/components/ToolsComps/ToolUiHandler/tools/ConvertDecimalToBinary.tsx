import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertDecimalToBinary as ConvertDecimalToBinaryFunc } from "codinasion-tools";

function ConvertDecimalToBinary() {
  const [decimalNumber, setDecimalNumber] = React.useState("");
  const [binaryNumber, setBinaryNumber] = React.useState("");

  const handleDecimalNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDecimalNumber(e.target.value);
  };

  const handleConvert = () => {
    const binaryNumber = ConvertDecimalToBinaryFunc(Number(decimalNumber));
    setBinaryNumber(binaryNumber.toString());
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

export default ConvertDecimalToBinary;
