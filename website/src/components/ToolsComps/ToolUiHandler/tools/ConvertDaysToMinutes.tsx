import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertDaysToMinutes as ConvertDaysToMinutesFunc } from "codinasion-tools";

function ConvertDaysToMinutes() {
  const [days, setDays] = React.useState("");
  const [minutes, setMinutes] = React.useState("");

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDays(e.target.value);
  };

  const handleConvert = () => {
    const minutes = ConvertDaysToMinutesFunc(Number(days));
    setMinutes(minutes.toString());
  };

  return (
    <>
      <div>
        <ToolLabel label="Days" />
        <ToolInput
          inputPlaceholder="Enter Days"
          inputValue={days}
          handleInputValueChange={handleDaysChange}
        />
        <ToolButton
          buttonLabel="Convert"
          handleButtonClick={handleConvert}
          disabled={days === ""}
        />
        <ToolLabel label="Minutes" />
        <ToolInput inputPlaceholder="Minutes" inputValue={minutes} disabled />
      </div>
    </>
  );
}

export default ConvertDaysToMinutes;
