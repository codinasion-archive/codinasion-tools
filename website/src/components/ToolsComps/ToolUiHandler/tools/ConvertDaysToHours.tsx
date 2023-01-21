import React from "react";

import ToolLabel from "../ToolLabel";
import ToolInput from "../ToolInput";
import ToolButton from "../ToolButton";

import { ConvertDaysToHours as ConvertDaysToHoursFunc } from "codinasion-tools";

function ConvertDaysToHours() {
  const [days, setDays] = React.useState("");
  const [hours, setHours] = React.useState("");

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDays(e.target.value);
  };

  const handleConvert = () => {
    const hours = ConvertDaysToHoursFunc(Number(days));
    setHours(hours.toString());
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
        <ToolLabel label="Hours" />
        <ToolInput inputPlaceholder="Hours" inputValue={hours} disabled />
      </div>
    </>
  );
}

export default ConvertDaysToHours;
