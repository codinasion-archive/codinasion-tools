from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# for token authentication
from rest_framework.permissions import IsAuthenticated

import codinasion_tools


class AddTwoNumbersView(APIView):
    def get(self, request, first_number, second_number):
        result = codinasion_tools.AddTwoNumbers(first_number, second_number)
        return Response(data={"result": result}, status=status.HTTP_200_OK)


class ConvertBinaryToDecimalView(APIView):
    def get(self, request, binary_number):
        result = codinasion_tools.ConvertBinaryToDecimal(binary_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertBinaryToHexadecimalView(APIView):
    def get(self, request, binary_number):
        result = codinasion_tools.ConvertBinaryToHexadecimal(binary_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertBinaryToOctalView(APIView):
    def get(self, request, binary_number):
        result = codinasion_tools.ConvertBinaryToOctal(binary_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertCelsiusToFahrenheitView(APIView):
    def get(self, request, celsius):
        result = codinasion_tools.ConvertCelsiusToFahrenheit(celsius)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertCentimetersToFeetView(APIView):
    def get(self, request, centimeters):
        result = codinasion_tools.ConvertCentimetersToFeet(centimeters)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertCentimetersToInchesView(APIView):
    def get(self, request, centimeters):
        result = codinasion_tools.ConvertCentimetersToInches(centimeters)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDaysToHoursView(APIView):
    def get(self, request, days):
        result = codinasion_tools.ConvertDaysToHours(days)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDaysToMinutesView(APIView):
    def get(self, request, days):
        result = codinasion_tools.ConvertDaysToMinutes(days)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDaysToSecondsView(APIView):
    def get(self, request, days):
        result = codinasion_tools.ConvertDaysToSeconds(days)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDecimalToBinaryView(APIView):
    def get(self, request, decimal_number):
        result = codinasion_tools.ConvertDecimalToBinary(decimal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDecimalToHexadecimalView(APIView):
    def get(self, request, decimal_number):
        result = codinasion_tools.ConvertDecimalToHexadecimal(decimal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDecimalToOctalView(APIView):
    def get(self, request, decimal_number):
        result = codinasion_tools.ConvertDecimalToOctal(decimal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertHexadecimalToBinaryView(APIView):
    def get(self, request, hexadecimal_number):
        result = codinasion_tools.ConvertHexadecimalToBinary(hexadecimal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertHexadecimalToDecimalView(APIView):
    def get(self, request, hexadecimal_number):
        result = codinasion_tools.ConvertHexadecimalToDecimal(hexadecimal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertHexadecimalToOctalView(APIView):
    def get(self, request, hexadecimal_number):
        result = codinasion_tools.ConvertHexadecimalToOctal(hexadecimal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertOctalToBinaryView(APIView):
    def get(self, request, octal_number):
        result = codinasion_tools.ConvertOctalToBinary(octal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertOctalToDecimalView(APIView):
    def get(self, request, octal_number):
        result = codinasion_tools.ConvertOctalToDecimal(octal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertOctalToHexadecimalView(APIView):
    def get(self, request, octal_number):
        result = codinasion_tools.ConvertOctalToHexadecimal(octal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToCamelCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToCamelCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToConstantCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToConstantCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToDotCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToDotCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToKebabCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToKebabCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToPascalCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToPascalCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToPathCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToPathCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToSnakeCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToSnakeCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToTitleCaseView(APIView):
    def get(self, request, input_string):
        result = codinasion_tools.FormatToTitleCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class SubstractTwoNumbersView(APIView):
    def get(self, request, first_number, second_number):
        result = codinasion_tools.SubstractTwoNumbers(first_number, second_number)
        return Response({"result": result}, status=status.HTTP_200_OK)
