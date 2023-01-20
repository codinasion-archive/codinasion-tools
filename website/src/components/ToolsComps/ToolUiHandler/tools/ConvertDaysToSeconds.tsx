import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertDaysToSeconds as ConvertDaysToSecondsFunc } from "codinasion-tools";

function ConvertDaysToSeconds() {
  const [days, setDays] = React.useState("");
  const [seconds, setSeconds] = React.useState("");

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDays(e.target.value);
  };

  const handleConvert = () => {
    const seconds = ConvertDaysToSecondsFunc(Number(days));
    setSeconds(seconds.toString());
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
        <ToolLabel label="Seconds" />
        <ToolInput inputPlaceholder="Seconds" inputValue={seconds} disabled />
      </div>
    </>
  );
}

export default ConvertDaysToSeconds;
