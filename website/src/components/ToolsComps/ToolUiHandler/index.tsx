import AddTwoNumbersToolUi from "./tools/AddTwoNumbers";
import ConvertBinaryToDecimalToolUi from "./tools/ConvertBinaryToDecimal";
import ConvertBinaryToHexadecimalToolUi from "./tools/ConvertBinaryToHexadecimal";
import ConvertBinaryToOctalToolUi from "./tools/ConvertBinaryToOctal";
import ConvertCelsiusToFahrenheitToolUi from "./tools/ConvertCelsiusToFahrenheit";
import ConvertCentimetersToFeetToolUi from "./tools/ConvertCentimetersToFeet";
import ConvertCentimetersToInchesToolUi from "./tools/ConvertCentimetersToInches";
import ConvertDaysToHoursToolUi from "./tools/ConvertDaysToHours";
import ConvertDaysToMinutesToolUi from "./tools/ConvertDaysToMinutes";
import ConvertDaysToSecondsToolUi from "./tools/ConvertDaysToSeconds";
import ConvertDecimalToBinaryToolUi from "./tools/ConvertDecimalToBinary";
import ConvertDecimalToHexadecimalToolUi from "./tools/ConvertDecimalToHexadecimal";
import ConvertDecimalToOctalToolUi from "./tools/ConvertDecimalToOctal";
import ConvertHexadecimalToBinaryToolUi from "./tools/ConvertHexadecimalToBinary";
import ConvertHexadecimalToDecimalToolUi from "./tools/ConvertHexadecimalToDecimal";
import ConvertHexadecimalToOctalToolUi from "./tools/ConvertHexadecimalToOctal";
import ConvertOctalToBinaryToolUi from "./tools/ConvertOctalToBinary";
import ConvertOctalToDecimalToolUi from "./tools/ConvertOctalToDecimal";
import ConvertOctalToHexadecimalToolUi from "./tools/ConvertOctalToHexadecimal";
import FormatToCamelCaseToolUi from "./tools/FormatToCamelCase";
import FormatToConstantCaseToolUi from "./tools/FormatToConstantCase";
import FormatToDotCaseToolUi from "./tools/FormatToDotCase";
import FormatToKebabCaseToolUi from "./tools/FormatToKebabCase";
import FormatToPascalCaseToolUi from "./tools/FormatToPascalCase";
import FormatToPathCaseToolUi from "./tools/FormatToPathCase";
import FormatToSnakeCaseToolUi from "./tools/FormatToSnakeCase";
import FormatToTitleCaseToolUi from "./tools/FormatToTitleCase";
import SubstractTwoNumbersToolUi from "./tools/SubstractTwoNumbers";

type ToolHandlerProps = {
  slug: string;
};

function ToolUiHandler({ slug }: ToolHandlerProps) {
  return (
    <>
      <div className="p-4">
        {slug === "add-two-numbers" ? (
          <AddTwoNumbersToolUi />
        ) : slug === "convert-binary-to-decimal" ? (
          <ConvertBinaryToDecimalToolUi />
        ) : slug === "convert-binary-to-hexadecimal" ? (
          <ConvertBinaryToHexadecimalToolUi />
        ) : slug === "convert-binary-to-octal" ? (
          <ConvertBinaryToOctalToolUi />
        ) : slug === "convert-celsius-to-fahrenheit" ? (
          <ConvertCelsiusToFahrenheitToolUi />
        ) : slug === "convert-centimeters-to-feet" ? (
          <ConvertCentimetersToFeetToolUi />
        ) : slug === "convert-centimeters-to-inches" ? (
          <ConvertCentimetersToInchesToolUi />
        ) : slug === "convert-days-to-hours" ? (
          <ConvertDaysToHoursToolUi />
        ) : slug === "convert-days-to-minutes" ? (
          <ConvertDaysToMinutesToolUi />
        ) : slug === "convert-days-to-seconds" ? (
          <ConvertDaysToSecondsToolUi />
        ) : slug === "convert-decimal-to-binary" ? (
          <ConvertDecimalToBinaryToolUi />
        ) : slug === "convert-decimal-to-hexadecimal" ? (
          <ConvertDecimalToHexadecimalToolUi />
        ) : slug === "convert-decimal-to-octal" ? (
          <ConvertDecimalToOctalToolUi />
        ) : slug === "convert-hexadecimal-to-binary" ? (
          <ConvertHexadecimalToBinaryToolUi />
        ) : slug === "convert-hexadecimal-to-decimal" ? (
          <ConvertHexadecimalToDecimalToolUi />
        ) : slug === "convert-hexadecimal-to-octal" ? (
          <ConvertHexadecimalToOctalToolUi />
        ) : slug === "convert-octal-to-binary" ? (
          <ConvertOctalToBinaryToolUi />
        ) : slug === "convert-octal-to-decimal" ? (
          <ConvertOctalToDecimalToolUi />
        ) : slug === "convert-octal-to-hexadecimal" ? (
          <ConvertOctalToHexadecimalToolUi />
        ) : slug === "format-to-camelcase" ? (
          <FormatToCamelCaseToolUi />
        ) : slug === "format-to-constantcase" ? (
          <FormatToConstantCaseToolUi />
        ) : slug === "format-to-dotcase" ? (
          <FormatToDotCaseToolUi />
        ) : slug === "format-to-kebabcase" ? (
          <FormatToKebabCaseToolUi />
        ) : slug === "format-to-pascalcase" ? (
          <FormatToPascalCaseToolUi />
        ) : slug === "format-to-pathcase" ? (
          <FormatToPathCaseToolUi />
        ) : slug === "format-to-snakecase" ? (
          <FormatToSnakeCaseToolUi />
        ) : slug === "format-to-titlecase" ? (
          <FormatToTitleCaseToolUi />
        ) : slug === "substract-two-numbers" ? (
          <SubstractTwoNumbersToolUi />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default ToolUiHandler;
