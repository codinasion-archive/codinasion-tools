import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertOctalToDecimal as ConvertOctalToDecimalFunc } from "codinasion-tools";

function ConvertOctalToDecimal() {
  const [octalNumber, setOctalNumber] = React.useState("");
  const [decimalNumber, setDecimalNumber] = React.useState("");

  const handleOctalNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOctalNumber(e.target.value);
  };

  const handleConvert = () => {
    const decimalNumber = ConvertOctalToDecimalFunc(Number(octalNumber));
    setDecimalNumber(decimalNumber.toString());
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

export default ConvertOctalToDecimal;
