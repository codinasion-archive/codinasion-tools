import React from "react";

type ToolLabelProps = {
  label: string;
};

function ToolLabel({ label }: ToolLabelProps) {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
    </>
  );
}

export default ToolLabel;
