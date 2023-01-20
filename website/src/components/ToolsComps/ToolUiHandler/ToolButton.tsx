import React from "react";

type ToolButtonProps = {
  handleButtonClick: () => void;
  buttonLabel: string;
  disabled?: boolean;
};

function ToolButton({
  handleButtonClick,
  buttonLabel,
  disabled,
}: ToolButtonProps) {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full my-2"
        onClick={handleButtonClick}
        disabled={disabled}
      >
        {buttonLabel}
      </button>
    </>
  );
}

export default ToolButton;
