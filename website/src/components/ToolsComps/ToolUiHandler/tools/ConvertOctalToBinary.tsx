import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertOctalToBinary as ConvertOctalToBinaryFunc } from "codinasion-tools";

function ConvertOctalToBinary() {
  const [octalNumber, setOctalNumber] = React.useState("");
  const [binaryNumber, setBinaryNumber] = React.useState("");

  const handleOctalNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOctalNumber(e.target.value);
  };

  const handleConvert = () => {
    const binaryNumber = ConvertOctalToBinaryFunc(Number(octalNumber));
    setBinaryNumber(binaryNumber.toString());
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

export default ConvertOctalToBinary;
