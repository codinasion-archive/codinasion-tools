import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertDecimalToOctal as ConvertDecimalToOctalFunc } from "codinasion-tools";

function ConvertDecimalToOctal() {
  const [decimalNumber, setDecimalNumber] = React.useState("");
  const [octalNumber, setOctalNumber] = React.useState("");

  const handleDecimalNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDecimalNumber(e.target.value);
  };

  const handleConvert = () => {
    const octalNumber = ConvertDecimalToOctalFunc(Number(decimalNumber));
    setOctalNumber(octalNumber.toString());
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

export default ConvertDecimalToOctal;
