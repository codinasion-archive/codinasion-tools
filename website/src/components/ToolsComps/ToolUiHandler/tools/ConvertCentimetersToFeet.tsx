import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertCentimetersToFeet as ConvertCentimetersToFeetFunc } from "codinasion-tools";

function ConvertCentimetersToFeet() {
  const [centimeters, setCentimeters] = React.useState("");
  const [feet, setFeet] = React.useState("");

  const handleCentimetersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCentimeters(e.target.value);
  };

  const handleConvert = () => {
    const feet = ConvertCentimetersToFeetFunc(Number(centimeters));
    setFeet(feet.toString());
  };
  return (
    <>
      <div>
        <ToolLabel label="Centimeters" />
        <ToolInput
          inputPlaceholder="Enter Centimeters"
          inputValue={centimeters}
          handleInputValueChange={handleCentimetersChange}
        />
        <ToolButton
          buttonLabel="Convert"
          handleButtonClick={handleConvert}
          disabled={centimeters === ""}
        />
        <ToolLabel label="Feet" />
        <ToolInput inputPlaceholder="Feet" inputValue={feet} disabled />
      </div>
    </>
  );
}

export default ConvertCentimetersToFeet;
