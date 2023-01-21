import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { AddTwoNumbers as AddTwoNumbersFunc } from "codinasion-tools";

function AddTwoNumbers() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleFirstNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNumber(e.target.value);
  };

  const handleSecondNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondNumber(e.target.value);
  };

  const handleConvert = () => {
    const result = AddTwoNumbersFunc(Number(firstNumber), Number(secondNumber));
    setResult(result.toString());
  };

  return (
    <>
      <div>
        <ToolLabel label="First Number" />
        <ToolInput
          inputPlaceholder="Enter First Number"
          inputValue={firstNumber}
          handleInputValueChange={handleFirstNumberChange}
        />
        <ToolLabel label="Second Number" />
        <ToolInput
          inputPlaceholder="Enter Second Number"
          inputValue={secondNumber}
          handleInputValueChange={handleSecondNumberChange}
        />
        <ToolButton
          buttonLabel="Add"
          handleButtonClick={handleConvert}
          disabled={firstNumber === "" || secondNumber === ""}
        />
        <ToolLabel label="Result" />
        <ToolInput inputPlaceholder="Result" inputValue={result} disabled />
      </div>
    </>
  );
}

export default AddTwoNumbers;
