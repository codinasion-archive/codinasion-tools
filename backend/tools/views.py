from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# for token authentication
from rest_framework.permissions import IsAuthenticated

import codinasion_tools

from tools_data import models as tools_data_models


class AddTwoNumbersView(APIView):
    def get(self, request, first_number, second_number):
        result = codinasion_tools.AddTwoNumbers(first_number, second_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(slug="add-two-numbers")
        tool.used += 1
        tool.save()

        return Response(data={"result": result}, status=status.HTTP_200_OK)


class ConvertBinaryToDecimalView(APIView):
    def get(self, request, binary_number):
        result = codinasion_tools.ConvertBinaryToDecimal(binary_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-binary-to-decimal")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertBinaryToHexadecimalView(APIView):
    def get(self, request, binary_number):
        result = codinasion_tools.ConvertBinaryToHexadecimal(binary_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-binary-to-hexadecimal")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertBinaryToOctalView(APIView):
    def get(self, request, binary_number):
        result = codinasion_tools.ConvertBinaryToOctal(binary_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-binary-to-octal")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertCelsiusToFahrenheitView(APIView):
    def get(self, request, celsius):
        result = codinasion_tools.ConvertCelsiusToFahrenheit(celsius)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-celsius-to-fahrenheit")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertCentimetersToFeetView(APIView):
    def get(self, request, centimeters):
        result = codinasion_tools.ConvertCentimetersToFeet(centimeters)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-centimeters-to-feet")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertCentimetersToInchesView(APIView):
    def get(self, request, centimeters):
        result = codinasion_tools.ConvertCentimetersToInches(centimeters)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-centimeters-to-inches")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDaysToHoursView(APIView):
    def get(self, request, days):
        result = codinasion_tools.ConvertDaysToHours(days)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-days-to-hours")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDaysToMinutesView(APIView):
    def get(self, request, days):
        result = codinasion_tools.ConvertDaysToMinutes(days)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-days-to-minutes")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDaysToSecondsView(APIView):
    def get(self, request, days):
        result = codinasion_tools.ConvertDaysToSeconds(days)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-days-to-seconds")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDecimalToBinaryView(APIView):
    def get(self, request, decimal_number):
        result = codinasion_tools.ConvertDecimalToBinary(decimal_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-decimal-to-binary")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDecimalToHexadecimalView(APIView):
    def get(self, request, decimal_number):
        result = codinasion_tools.ConvertDecimalToHexadecimal(decimal_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-decimal-to-hexadecimal")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDecimalToOctalView(APIView):
    def get(self, request, decimal_number):
        result = codinasion_tools.ConvertDecimalToOctal(decimal_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-decimal-to-octal")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertHexadecimalToBinaryView(APIView):
    def get(self, request, hexadecimal_number):
        result = codinasion_tools.ConvertHexadecimalToBinary(
            hexadecimal_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-hexadecimal-to-binary")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertHexadecimalToDecimalView(APIView):
    def get(self, request, hexadecimal_number):
        result = codinasion_tools.ConvertHexadecimalToDecimal(
            hexadecimal_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-hexadecimal-to-decimal")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertHexadecimalToOctalView(APIView):
    def get(self, request, hexadecimal_number):
        result = codinasion_tools.ConvertHexadecimalToOctal(hexadecimal_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-hexadecimal-to-octal")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertOctalToBinaryView(APIView):
    def get(self, request, octal_number):
        result = codinasion_tools.ConvertOctalToBinary(octal_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-octal-to-binary")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertOctalToDecimalView(APIView):
    def get(self, request, octal_number):
        result = codinasion_tools.ConvertOctalToDecimal(octal_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-octal-to-decimal")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertOctalToHexadecimalView(APIView):
    def get(self, request, octal_number):
        result = codinasion_tools.ConvertOctalToHexadecimal(octal_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="convert-octal-to-hexadecimal")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToCamelCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToCamelCase(input_string)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="format-to-camelcase")
        tool.used += 1
        tool.save()
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToConstantCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToConstantCase(input_string)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="format-to-constantcase")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToDotCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToDotCase(input_string)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="format-to-dotcase")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToKebabCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToKebabCase(input_string)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="format-to-kebabcase")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToPascalCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToPascalCase(input_string)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="format-to-pascalcase")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToPathCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToPathCase(input_string)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="format-to-pathcase")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToSnakeCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToSnakeCase(input_string)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="format-to-snakecase")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToTitleCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToTitleCase(input_string)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="format-to-titlecase")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)


class SubstractTwoNumbersView(APIView):
    def get(self, request, first_number, second_number):
        result = codinasion_tools.SubstractTwoNumbers(
            first_number, second_number)

        # Update used count
        tool = tools_data_models.ToolModel.objects.get(
            slug="substract-two-numbers")
        tool.used += 1
        tool.save()

        return Response({"result": result}, status=status.HTTP_200_OK)
