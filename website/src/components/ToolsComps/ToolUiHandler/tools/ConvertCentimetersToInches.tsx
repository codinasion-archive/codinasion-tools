import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertCentimetersToInches as ConvertCentimetersToInchesFunc } from "codinasion-tools";

function ConvertCentimetersToInches() {
  const [centimeters, setCentimeters] = React.useState("");
  const [inches, setInches] = React.useState("");

  const handleCentimetersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCentimeters(e.target.value);
  };

  const handleConvert = () => {
    const inches = ConvertCentimetersToInchesFunc(Number(centimeters));
    setInches(inches.toString());
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
        <ToolLabel label="Inches" />
        <ToolInput inputPlaceholder="Inches" inputValue={inches} disabled />
      </div>
    </>
  );
}

export default ConvertCentimetersToInches;
