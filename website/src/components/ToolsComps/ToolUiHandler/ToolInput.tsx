import React from "react";

import Clipboards from "@/components/Clipboards/Clipboards";

type ToolInputProps = {
  inputPlaceholder: string;
  inputValue: string;
  handleInputValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

function ToolInput({
  inputPlaceholder,
  inputValue,
  handleInputValueChange,
  disabled,
}: ToolInputProps) {
  return (
    <>
      {disabled ? (
        <>
          <div className="relative">
            <Clipboards
              clipText={inputValue}
              cssStyle={"p-2 absolute top-2 right-2 rounded-full z-10"}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={inputPlaceholder}
              value={inputValue}
              onChange={handleInputValueChange}
              disabled={disabled}
            />
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={handleInputValueChange}
            disabled={disabled}
          />
        </>
      )}
    </>
  );
}

export default ToolInput;
