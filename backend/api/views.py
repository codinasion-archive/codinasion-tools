from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# for token authentication
from rest_framework.permissions import IsAuthenticated

import opentoolshub


class AddTwoNumbersView(APIView):
    def get(self, request, first_number, second_number):
        result = opentoolshub.AddTwoNumbers(first_number, second_number)
        return Response(data={"result": result}, status=status.HTTP_200_OK)


class ConvertBinaryToDecimalView(APIView):
    def get(self, request, binary_number):
        result = opentoolshub.ConvertBinaryToDecimal(binary_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertBinaryToHexadecimalView(APIView):
    def get(self, request, binary_number):
        result = opentoolshub.ConvertBinaryToHexadecimal(binary_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertBinaryToOctalView(APIView):
    def get(self, request, binary_number):
        result = opentoolshub.ConvertBinaryToOctal(binary_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertCelsiusToFahrenheitView(APIView):
    def get(self, request, celsius):
        result = opentoolshub.ConvertCelsiusToFahrenheit(celsius)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertCentimetersToFeetView(APIView):
    def get(self, request, centimeters):
        result = opentoolshub.ConvertCentimetersToFeet(centimeters)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertCentimetersToInchesView(APIView):
    def get(self, request, centimeters):
        result = opentoolshub.ConvertCentimetersToInches(centimeters)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDaysToHoursView(APIView):
    def get(self, request, days):
        result = opentoolshub.ConvertDaysToHours(days)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDaysToMinutesView(APIView):
    def get(self, request, days):
        result = opentoolshub.ConvertDaysToMinutes(days)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDaysToSecondsView(APIView):
    def get(self, request, days):
        result = opentoolshub.ConvertDaysToSeconds(days)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDecimalToBinaryView(APIView):
    def get(self, request, decimal_number):
        result = opentoolshub.ConvertDecimalToBinary(decimal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDecimalToHexadecimalView(APIView):
    def get(self, request, decimal_number):
        result = opentoolshub.ConvertDecimalToHexadecimal(decimal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertDecimalToOctalView(APIView):
    def get(self, request, decimal_number):
        result = opentoolshub.ConvertDecimalToOctal(decimal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertHexadecimalToBinaryView(APIView):
    def get(self, request, hexadecimal_number):
        result = opentoolshub.ConvertHexadecimalToBinary(hexadecimal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertHexadecimalToDecimalView(APIView):
    def get(self, request, hexadecimal_number):
        result = opentoolshub.ConvertHexadecimalToDecimal(hexadecimal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertHexadecimalToOctalView(APIView):
    def get(self, request, hexadecimal_number):
        result = opentoolshub.ConvertHexadecimalToOctal(hexadecimal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertOctalToBinaryView(APIView):
    def get(self, request, octal_number):
        result = opentoolshub.ConvertOctalToBinary(octal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertOctalToDecimalView(APIView):
    def get(self, request, octal_number):
        result = opentoolshub.ConvertOctalToDecimal(octal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class ConvertOctalToHexadecimalView(APIView):
    def get(self, request, octal_number):
        result = opentoolshub.ConvertOctalToHexadecimal(octal_number)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToCamelCaseView(APIView):
    def get(self, request, input_string):
        result = opentoolshub.FormatToCamelCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToConstantCaseView(APIView):
    def get(self, request, input_string):
        result = opentoolshub.FormatToConstantCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToDotCaseView(APIView):
    def get(self, request, input_string):
        result = opentoolshub.FormatToDotCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToKebabCaseView(APIView):
    def get(self, request, input_string):
        result = opentoolshub.FormatToKebabCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToPascalCaseView(APIView):
    def get(self, request, input_string):
        result = opentoolshub.FormatToPascalCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToPathCaseView(APIView):
    def get(self, request, input_string):
        result = opentoolshub.FormatToPathCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToSnakeCaseView(APIView):
    def get(self, request, input_string):
        result = opentoolshub.FormatToSnakeCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class FormatToTitleCaseView(APIView):
    def get(self, request, input_string):
        result = opentoolshub.FormatToTitleCase(input_string)
        return Response({"result": result}, status=status.HTTP_200_OK)


class SubstractTwoNumbersView(APIView):
    def get(self, request, first_number, second_number):
        result = opentoolshub.SubstractTwoNumbers(first_number, second_number)
        return Response({"result": result}, status=status.HTTP_200_OK)
