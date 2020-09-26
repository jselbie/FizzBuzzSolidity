
pragma solidity >=0.4.22 <0.8.0;

contract FizzBuzz {

    int _lastNumber = 0;
    string _lastResult = "not set";

    event FizzBuzzed(int value, string result);

    function fizzbuzz(int value) external returns(string memory) {
        string memory result;

        bool isDiv2 = ((value % 2) == 0);
        bool isDiv3 = ((value % 3) == 0);

        if (isDiv2 && isDiv3)
        {
            result = "FizzBuzz";
        } else if (isDiv2) {
            result = "Fizz";
        } else if (isDiv3) {
            result = "Buzz";
        } else {
            result = "Neither";
        }

        _lastNumber = value;
        _lastResult = result;

        emit FizzBuzzed(value, result);

        return result;
    }

    function getLast() external view returns(int, string memory) {
        return (_lastNumber, _lastResult);
    }


}
