import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertCelsiusToFahrenheit as ConvertCelsiusToFahrenheitFunc } from "codinasion-tools";

function ConvertCelsiusToFahrenheit() {
  const [celsiusNumber, setCelsiusNumber] = React.useState("");
  const [fahrenheitNumber, setFahrenheitNumber] = React.useState("");

  const handleCelsiusNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCelsiusNumber(e.target.value);
  };

  const handleConvert = () => {
    const fahrenheitNumber = ConvertCelsiusToFahrenheitFunc(
      Number(celsiusNumber)
    );
    setFahrenheitNumber(fahrenheitNumber.toString());
  };
  return (
    <>
      <div>
        <ToolLabel label="Celsius Number" />
        <ToolInput
          inputPlaceholder="Enter Celsius Number"
          inputValue={celsiusNumber}
          handleInputValueChange={handleCelsiusNumberChange}
        />
        <ToolButton
          buttonLabel="Convert"
          handleButtonClick={handleConvert}
          disabled={celsiusNumber === ""}
        />
        <ToolLabel label="Fahrenheit Number" />
        <ToolInput
          inputPlaceholder="Fahrenheit Number"
          inputValue={fahrenheitNumber}
          disabled
        />
      </div>
    </>
  );
}

export default ConvertCelsiusToFahrenheit;
