import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertBinaryToOctal as ConvertBinaryToOctalFunc } from "codinasion-tools";

function ConvertBinaryToOctal() {
  const [binaryNumber, setBinaryNumber] = React.useState("");
  const [octalNumber, setOctalNumber] = React.useState("");

  const handleBinaryNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBinaryNumber(e.target.value);
  };

  const handleConvert = () => {
    const octalNumber = ConvertBinaryToOctalFunc(binaryNumber);
    setOctalNumber(octalNumber.toString());
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

export default ConvertBinaryToOctal;
