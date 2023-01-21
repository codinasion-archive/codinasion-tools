import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { SubstractTwoNumbers as SubstractTwoNumbersFunc } from "codinasion-tools";

function SubstractTwoNumbers() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [substractTwoNumbersResult, setSubstractTwoNumbersResult] =
    React.useState("");

  const handleFirstNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNumber(e.target.value);
  };

  const handleSecondNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondNumber(e.target.value);
  };

  const handleSubstractTwoNumbers = () => {
    const substractTwoNumbersResult = SubstractTwoNumbersFunc(
      Number(firstNumber),
      Number(secondNumber)
    );
    setSubstractTwoNumbersResult(substractTwoNumbersResult.toString());
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
          buttonLabel="Substract"
          handleButtonClick={handleSubstractTwoNumbers}
          disabled={firstNumber === "" || secondNumber === ""}
        />
        <ToolLabel label="Substract Two Numbers Result" />
        <ToolInput
          inputPlaceholder="Substract Two Numbers Result"
          inputValue={substractTwoNumbersResult}
          disabled
        />
      </div>
    </>
  );
}

export default SubstractTwoNumbers;
