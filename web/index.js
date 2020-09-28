
// HACK - just copied the ABI this file such that it could be included by the html file

window.FizzBuzzContract = 
{
  "contractName": "FizzBuzz",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "result",
          "type": "string"
        }
      ],
      "name": "FizzBuzzed",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        }
      ],
      "name": "fizzbuzz",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getLast",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.7.1+commit.f4a555be\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"result\",\"type\":\"string\"}],\"name\":\"FizzBuzzed\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"name\":\"fizzbuzz\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLast\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/jselbie/source/repos/FizzBuzzSolidity/contracts/FizzBuzz.sol\":\"FizzBuzz\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/jselbie/source/repos/FizzBuzzSolidity/contracts/FizzBuzz.sol\":{\"keccak256\":\"0x8961c111ca53a93274d29e2264f985fddb4d47ec4819feea93dfa8652881f2f1\",\"urls\":[\"bzz-raw://0ccba7c45e2c8a53c63164bb46a88a427dffc93ec9cf4562ca4cbc7cdc2a10ff\",\"dweb:/ipfs/QmPyiaxgBiS3kLUdkop2EX7dA95eCSeLWXuFhGkoy6DPCW\"]}},\"version\":1}",
  "bytecode": "0x6080604052600080556040518060400160405280600781526020017f6e6f74207365740000000000000000000000000000000000000000000000000081525060019080519060200190610053929190610066565b5034801561006057600080fd5b50610103565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a757805160ff19168380011785556100d5565b828001600101855582156100d5579182015b828111156100d45782518255916020019190600101906100b9565b5b5090506100e291906100e6565b5090565b5b808211156100ff5760008160009055506001016100e7565b5090565b6104eb806101126000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063038338651461003b5780634d622831146100e2575b600080fd5b6100676004803603602081101561005157600080fd5b810190808035906020019092919050505061016c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a757808201518184015260208101905061008c565b50505050905090810190601f1680156100d45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100ea61036b565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610130578082015181840152602081019050610115565b50505050905090810190601f16801561015d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6060806000806002858161017c57fe5b071490506000806003868161018d57fe5b0714905081801561019b5750805b156101dd576040518060400160405280600881526020017f46697a7a42757a7a000000000000000000000000000000000000000000000000815250925061029e565b8115610220576040518060400160405280600481526020017f46697a7a00000000000000000000000000000000000000000000000000000000815250925061029d565b8015610263576040518060400160405280600481526020017f42757a7a00000000000000000000000000000000000000000000000000000000815250925061029c565b6040518060400160405280600781526020017f4e6569746865720000000000000000000000000000000000000000000000000081525092505b5b5b8460008190555082600190805190602001906102bb929190610418565b507faea1ba997016130b79d7408e3b76a9a977e5f27f9b680594c2ab4c0334cec6c185846040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561032557808201518184015260208101905061030a565b50505050905090810190601f1680156103525780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1829350505050919050565b600060606000546001808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104095780601f106103de57610100808354040283529160200191610409565b820191906000526020600020905b8154815290600101906020018083116103ec57829003601f168201915b50505050509050915091509091565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061045957805160ff1916838001178555610487565b82800160010185558215610487579182015b8281111561048657825182559160200191906001019061046b565b5b5090506104949190610498565b5090565b5b808211156104b1576000816000905550600101610499565b509056fea2646970667358221220f6a41927f4a4df51cceb78625210c4948349bd6d4230f9688d1c63e7b593144664736f6c63430007010033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063038338651461003b5780634d622831146100e2575b600080fd5b6100676004803603602081101561005157600080fd5b810190808035906020019092919050505061016c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a757808201518184015260208101905061008c565b50505050905090810190601f1680156100d45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100ea61036b565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610130578082015181840152602081019050610115565b50505050905090810190601f16801561015d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6060806000806002858161017c57fe5b071490506000806003868161018d57fe5b0714905081801561019b5750805b156101dd576040518060400160405280600881526020017f46697a7a42757a7a000000000000000000000000000000000000000000000000815250925061029e565b8115610220576040518060400160405280600481526020017f46697a7a00000000000000000000000000000000000000000000000000000000815250925061029d565b8015610263576040518060400160405280600481526020017f42757a7a00000000000000000000000000000000000000000000000000000000815250925061029c565b6040518060400160405280600781526020017f4e6569746865720000000000000000000000000000000000000000000000000081525092505b5b5b8460008190555082600190805190602001906102bb929190610418565b507faea1ba997016130b79d7408e3b76a9a977e5f27f9b680594c2ab4c0334cec6c185846040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561032557808201518184015260208101905061030a565b50505050905090810190601f1680156103525780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1829350505050919050565b600060606000546001808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104095780601f106103de57610100808354040283529160200191610409565b820191906000526020600020905b8154815290600101906020018083116103ec57829003601f168201915b50505050509050915091509091565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061045957805160ff1916838001178555610487565b82800160010185558215610487579182015b8281111561048657825182559160200191906001019061046b565b5b5090506104949190610498565b5090565b5b808211156104b1576000816000905550600101610499565b509056fea2646970667358221220f6a41927f4a4df51cceb78625210c4948349bd6d4230f9688d1c63e7b593144664736f6c63430007010033",
  "immutableReferences": {},
  "sourceMap": "38:844:0:-:0;;;83:1;65:19;;91:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;38:844;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "38:844:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;181:573;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;762:113;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;181:573;227:13;255:20;288:11;318:1;312;304:5;:9;;;;;;303:16;288:32;;331:11;361:1;355;347:5;:9;;;;;;346:16;331:32;;380:6;:16;;;;;390:6;380:16;376:239;;;413:19;;;;;;;;;;;;;;;;;;;376:239;;;454:6;450:165;;;477:15;;;;;;;;;;;;;;;;;;;450:165;;;514:6;510:105;;;537:15;;;;;;;;;;;;;;;;;;;510:105;;;585:18;;;;;;;;;;;;;;;;;;;510:105;450:165;376:239;641:5;627:11;:19;;;;671:6;657:11;:20;;;;;;;;;;;;:::i;:::-;;695:25;706:5;713:6;695:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;740:6;733:13;;;;;181:573;;;:::o;762:113::-;803:3;808:13;842:11;;855;834:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;762:113;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "\r\npragma solidity >=0.4.22 <0.8.0;\r\n\r\ncontract FizzBuzz {\r\n\r\n    int _lastNumber = 0;\r\n    string _lastResult = \"not set\";\r\n\r\n    event FizzBuzzed(int value, string result);\r\n\r\n    function fizzbuzz(int value) external returns(string memory) {\r\n\r\n        string memory result;\r\n\r\n        bool isDiv2 = ((value % 2) == 0);\r\n        bool isDiv3 = ((value % 3) == 0);\r\n\r\n        if (isDiv2 && isDiv3) {\r\n            result = \"FizzBuzz\";\r\n        } else if (isDiv2) {\r\n            result = \"Fizz\";\r\n        } else if (isDiv3) {\r\n            result = \"Buzz\";\r\n        } else {\r\n            result = \"Neither\";\r\n        }\r\n\r\n        _lastNumber = value;\r\n        _lastResult = result;\r\n\r\n        emit FizzBuzzed(value, result);\r\n\r\n        return result;\r\n    }\r\n\r\n    function getLast() external view returns(int, string memory) {\r\n        return (_lastNumber, _lastResult);\r\n    }\r\n\r\n\r\n}\r\n",
  "sourcePath": "C:/Users/jselbie/source/repos/FizzBuzzSolidity/contracts/FizzBuzz.sol",
  "ast": {
    "absolutePath": "/C/Users/jselbie/source/repos/FizzBuzzSolidity/contracts/FizzBuzz.sol",
    "exportedSymbols": {
      "FizzBuzz": [
        100
      ]
    },
    "id": 101,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".22",
          "<",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "2:32:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 100,
        "linearizedBaseContracts": [
          100
        ],
        "name": "FizzBuzz",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "mutability": "mutable",
            "name": "_lastNumber",
            "nodeType": "VariableDeclaration",
            "scope": 100,
            "src": "65:19:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 2,
              "name": "int",
              "nodeType": "ElementaryTypeName",
              "src": "65:3:0",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "83:1:0",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 7,
            "mutability": "mutable",
            "name": "_lastResult",
            "nodeType": "VariableDeclaration",
            "scope": 100,
            "src": "91:30:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "91:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "6e6f7420736574",
              "id": 6,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "112:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_e73ffae0a7c4d243f9b876f9f97727de28a5a9564267b23626dd3b96ea00f81e",
                "typeString": "literal_string \"not set\""
              },
              "value": "not set"
            },
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "id": 13,
            "name": "FizzBuzzed",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 13,
                  "src": "147:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "147:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "result",
                  "nodeType": "VariableDeclaration",
                  "scope": 13,
                  "src": "158:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "146:26:0"
            },
            "src": "130:43:0"
          },
          {
            "body": {
              "id": 86,
              "nodeType": "Block",
              "src": "242:512:0",
              "statements": [
                {
                  "assignments": [
                    21
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21,
                      "mutability": "mutable",
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 86,
                      "src": "255:20:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 20,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "255:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "255:20:0"
                },
                {
                  "assignments": [
                    24
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 24,
                      "mutability": "mutable",
                      "name": "isDiv2",
                      "nodeType": "VariableDeclaration",
                      "scope": 86,
                      "src": "288:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 23,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "288:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32,
                  "initialValue": {
                    "components": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 30,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 27,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 25,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 15,
                                "src": "304:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "%",
                              "rightExpression": {
                                "hexValue": "32",
                                "id": 26,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "312:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "304:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 28,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "303:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 29,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "318:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "303:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 31,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "302:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "288:32:0"
                },
                {
                  "assignments": [
                    34
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34,
                      "mutability": "mutable",
                      "name": "isDiv3",
                      "nodeType": "VariableDeclaration",
                      "scope": 86,
                      "src": "331:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 33,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "331:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42,
                  "initialValue": {
                    "components": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 40,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 37,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 35,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 15,
                                "src": "347:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "%",
                              "rightExpression": {
                                "hexValue": "33",
                                "id": 36,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "355:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_3_by_1",
                                  "typeString": "int_const 3"
                                },
                                "value": "3"
                              },
                              "src": "347:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 38,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "346:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 39,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "361:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "346:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 41,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "345:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "331:32:0"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 45,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43,
                      "name": "isDiv2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24,
                      "src": "380:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 44,
                      "name": "isDiv3",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "390:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "380:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "id": 51,
                      "name": "isDiv2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24,
                      "src": "454:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "id": 57,
                        "name": "isDiv3",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "514:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "id": 67,
                        "nodeType": "Block",
                        "src": "570:45:0",
                        "statements": [
                          {
                            "expression": {
                              "id": 65,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 63,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21,
                                "src": "585:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "hexValue": "4e656974686572",
                                "id": 64,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "594:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_a379c2ee16f27316aceba4a288d7092481d9047c489b30627f5146656e735dd7",
                                  "typeString": "literal_string \"Neither\""
                                },
                                "value": "Neither"
                              },
                              "src": "585:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            "id": 66,
                            "nodeType": "ExpressionStatement",
                            "src": "585:18:0"
                          }
                        ]
                      },
                      "id": 68,
                      "nodeType": "IfStatement",
                      "src": "510:105:0",
                      "trueBody": {
                        "id": 62,
                        "nodeType": "Block",
                        "src": "522:42:0",
                        "statements": [
                          {
                            "expression": {
                              "id": 60,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 58,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21,
                                "src": "537:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "hexValue": "42757a7a",
                                "id": 59,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "546:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_4f414b7db90fd5ab632938c50a533fcd3ffc27bf2ca24a5cb838ac516d81829b",
                                  "typeString": "literal_string \"Buzz\""
                                },
                                "value": "Buzz"
                              },
                              "src": "537:15:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            "id": 61,
                            "nodeType": "ExpressionStatement",
                            "src": "537:15:0"
                          }
                        ]
                      }
                    },
                    "id": 69,
                    "nodeType": "IfStatement",
                    "src": "450:165:0",
                    "trueBody": {
                      "id": 56,
                      "nodeType": "Block",
                      "src": "462:42:0",
                      "statements": [
                        {
                          "expression": {
                            "id": 54,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 52,
                              "name": "result",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "477:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "hexValue": "46697a7a",
                              "id": 53,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "486:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_59e3bf301050d124d02a39233efeec938b7331ad548cea4aa30e33557064fdd8",
                                "typeString": "literal_string \"Fizz\""
                              },
                              "value": "Fizz"
                            },
                            "src": "477:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "id": 55,
                          "nodeType": "ExpressionStatement",
                          "src": "477:15:0"
                        }
                      ]
                    }
                  },
                  "id": 70,
                  "nodeType": "IfStatement",
                  "src": "376:239:0",
                  "trueBody": {
                    "id": 50,
                    "nodeType": "Block",
                    "src": "398:46:0",
                    "statements": [
                      {
                        "expression": {
                          "id": 48,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 46,
                            "name": "result",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21,
                            "src": "413:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "46697a7a42757a7a",
                            "id": 47,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "422:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6c0ab6f5870129d6a8caa453bd249f5b67800666065324e5c1d1dad130981117",
                              "typeString": "literal_string \"FizzBuzz\""
                            },
                            "value": "FizzBuzz"
                          },
                          "src": "413:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 49,
                        "nodeType": "ExpressionStatement",
                        "src": "413:19:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 73,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 71,
                      "name": "_lastNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "627:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 72,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15,
                      "src": "641:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "627:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 74,
                  "nodeType": "ExpressionStatement",
                  "src": "627:19:0"
                },
                {
                  "expression": {
                    "id": 77,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 75,
                      "name": "_lastResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "657:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 76,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "671:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "657:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 78,
                  "nodeType": "ExpressionStatement",
                  "src": "657:20:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 80,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15,
                        "src": "706:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 81,
                        "name": "result",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "713:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 79,
                      "name": "FizzBuzzed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13,
                      "src": "695:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_int256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (int256,string memory)"
                      }
                    },
                    "id": 82,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "695:25:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 83,
                  "nodeType": "EmitStatement",
                  "src": "690:30:0"
                },
                {
                  "expression": {
                    "id": 84,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21,
                    "src": "740:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 19,
                  "id": 85,
                  "nodeType": "Return",
                  "src": "733:13:0"
                }
              ]
            },
            "functionSelector": "03833865",
            "id": 87,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fizzbuzz",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "199:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "199:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "198:11:0"
            },
            "returnParameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "227:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "227:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "226:15:0"
            },
            "scope": 100,
            "src": "181:573:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 98,
              "nodeType": "Block",
              "src": "823:52:0",
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "id": 94,
                        "name": "_lastNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "842:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 95,
                        "name": "_lastResult",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "855:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      }
                    ],
                    "id": 96,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "841:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_int256_$_t_string_storage_$",
                      "typeString": "tuple(int256,string storage ref)"
                    }
                  },
                  "functionReturnParameters": 93,
                  "id": 97,
                  "nodeType": "Return",
                  "src": "834:33:0"
                }
              ]
            },
            "functionSelector": "4d622831",
            "id": 99,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getLast",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 88,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "778:2:0"
            },
            "returnParameters": {
              "id": 93,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 99,
                  "src": "803:3:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "803:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 99,
                  "src": "808:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "802:20:0"
            },
            "scope": 100,
            "src": "762:113:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 101,
        "src": "38:844:0"
      }
    ],
    "src": "2:882:0"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/jselbie/source/repos/FizzBuzzSolidity/contracts/FizzBuzz.sol",
    "exportedSymbols": {
      "FizzBuzz": [
        100
      ]
    },
    "id": 101,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".22",
          "<",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "2:32:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 100,
        "linearizedBaseContracts": [
          100
        ],
        "name": "FizzBuzz",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "mutability": "mutable",
            "name": "_lastNumber",
            "nodeType": "VariableDeclaration",
            "scope": 100,
            "src": "65:19:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 2,
              "name": "int",
              "nodeType": "ElementaryTypeName",
              "src": "65:3:0",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "83:1:0",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 7,
            "mutability": "mutable",
            "name": "_lastResult",
            "nodeType": "VariableDeclaration",
            "scope": 100,
            "src": "91:30:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "91:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "6e6f7420736574",
              "id": 6,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "112:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_e73ffae0a7c4d243f9b876f9f97727de28a5a9564267b23626dd3b96ea00f81e",
                "typeString": "literal_string \"not set\""
              },
              "value": "not set"
            },
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "id": 13,
            "name": "FizzBuzzed",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 13,
                  "src": "147:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "147:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "result",
                  "nodeType": "VariableDeclaration",
                  "scope": 13,
                  "src": "158:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "146:26:0"
            },
            "src": "130:43:0"
          },
          {
            "body": {
              "id": 86,
              "nodeType": "Block",
              "src": "242:512:0",
              "statements": [
                {
                  "assignments": [
                    21
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21,
                      "mutability": "mutable",
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 86,
                      "src": "255:20:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 20,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "255:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 22,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "255:20:0"
                },
                {
                  "assignments": [
                    24
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 24,
                      "mutability": "mutable",
                      "name": "isDiv2",
                      "nodeType": "VariableDeclaration",
                      "scope": 86,
                      "src": "288:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 23,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "288:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 32,
                  "initialValue": {
                    "components": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 30,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 27,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 25,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 15,
                                "src": "304:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "%",
                              "rightExpression": {
                                "hexValue": "32",
                                "id": 26,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "312:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "304:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 28,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "303:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 29,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "318:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "303:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 31,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "302:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "288:32:0"
                },
                {
                  "assignments": [
                    34
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34,
                      "mutability": "mutable",
                      "name": "isDiv3",
                      "nodeType": "VariableDeclaration",
                      "scope": 86,
                      "src": "331:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 33,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "331:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42,
                  "initialValue": {
                    "components": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 40,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 37,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 35,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 15,
                                "src": "347:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "%",
                              "rightExpression": {
                                "hexValue": "33",
                                "id": 36,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "355:1:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_3_by_1",
                                  "typeString": "int_const 3"
                                },
                                "value": "3"
                              },
                              "src": "347:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 38,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "346:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 39,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "361:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "346:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 41,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "345:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "331:32:0"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 45,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43,
                      "name": "isDiv2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24,
                      "src": "380:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 44,
                      "name": "isDiv3",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "390:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "380:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "id": 51,
                      "name": "isDiv2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24,
                      "src": "454:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "id": 57,
                        "name": "isDiv3",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "514:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "id": 67,
                        "nodeType": "Block",
                        "src": "570:45:0",
                        "statements": [
                          {
                            "expression": {
                              "id": 65,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 63,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21,
                                "src": "585:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "hexValue": "4e656974686572",
                                "id": 64,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "594:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_a379c2ee16f27316aceba4a288d7092481d9047c489b30627f5146656e735dd7",
                                  "typeString": "literal_string \"Neither\""
                                },
                                "value": "Neither"
                              },
                              "src": "585:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            "id": 66,
                            "nodeType": "ExpressionStatement",
                            "src": "585:18:0"
                          }
                        ]
                      },
                      "id": 68,
                      "nodeType": "IfStatement",
                      "src": "510:105:0",
                      "trueBody": {
                        "id": 62,
                        "nodeType": "Block",
                        "src": "522:42:0",
                        "statements": [
                          {
                            "expression": {
                              "id": 60,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 58,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21,
                                "src": "537:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "hexValue": "42757a7a",
                                "id": 59,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "546:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_4f414b7db90fd5ab632938c50a533fcd3ffc27bf2ca24a5cb838ac516d81829b",
                                  "typeString": "literal_string \"Buzz\""
                                },
                                "value": "Buzz"
                              },
                              "src": "537:15:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            "id": 61,
                            "nodeType": "ExpressionStatement",
                            "src": "537:15:0"
                          }
                        ]
                      }
                    },
                    "id": 69,
                    "nodeType": "IfStatement",
                    "src": "450:165:0",
                    "trueBody": {
                      "id": 56,
                      "nodeType": "Block",
                      "src": "462:42:0",
                      "statements": [
                        {
                          "expression": {
                            "id": 54,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 52,
                              "name": "result",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21,
                              "src": "477:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "hexValue": "46697a7a",
                              "id": 53,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "486:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_59e3bf301050d124d02a39233efeec938b7331ad548cea4aa30e33557064fdd8",
                                "typeString": "literal_string \"Fizz\""
                              },
                              "value": "Fizz"
                            },
                            "src": "477:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "id": 55,
                          "nodeType": "ExpressionStatement",
                          "src": "477:15:0"
                        }
                      ]
                    }
                  },
                  "id": 70,
                  "nodeType": "IfStatement",
                  "src": "376:239:0",
                  "trueBody": {
                    "id": 50,
                    "nodeType": "Block",
                    "src": "398:46:0",
                    "statements": [
                      {
                        "expression": {
                          "id": 48,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 46,
                            "name": "result",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21,
                            "src": "413:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "46697a7a42757a7a",
                            "id": 47,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "422:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_6c0ab6f5870129d6a8caa453bd249f5b67800666065324e5c1d1dad130981117",
                              "typeString": "literal_string \"FizzBuzz\""
                            },
                            "value": "FizzBuzz"
                          },
                          "src": "413:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "id": 49,
                        "nodeType": "ExpressionStatement",
                        "src": "413:19:0"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 73,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 71,
                      "name": "_lastNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "627:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 72,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15,
                      "src": "641:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "627:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 74,
                  "nodeType": "ExpressionStatement",
                  "src": "627:19:0"
                },
                {
                  "expression": {
                    "id": 77,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 75,
                      "name": "_lastResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "657:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 76,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "671:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "657:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 78,
                  "nodeType": "ExpressionStatement",
                  "src": "657:20:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 80,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15,
                        "src": "706:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 81,
                        "name": "result",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "713:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 79,
                      "name": "FizzBuzzed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13,
                      "src": "695:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_int256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (int256,string memory)"
                      }
                    },
                    "id": 82,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "695:25:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 83,
                  "nodeType": "EmitStatement",
                  "src": "690:30:0"
                },
                {
                  "expression": {
                    "id": 84,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21,
                    "src": "740:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 19,
                  "id": 85,
                  "nodeType": "Return",
                  "src": "733:13:0"
                }
              ]
            },
            "functionSelector": "03833865",
            "id": 87,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fizzbuzz",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15,
                  "mutability": "mutable",
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "199:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "199:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "198:11:0"
            },
            "returnParameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "227:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "227:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "226:15:0"
            },
            "scope": 100,
            "src": "181:573:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 98,
              "nodeType": "Block",
              "src": "823:52:0",
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "id": 94,
                        "name": "_lastNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "842:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 95,
                        "name": "_lastResult",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "855:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      }
                    ],
                    "id": 96,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "841:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_int256_$_t_string_storage_$",
                      "typeString": "tuple(int256,string storage ref)"
                    }
                  },
                  "functionReturnParameters": 93,
                  "id": 97,
                  "nodeType": "Return",
                  "src": "834:33:0"
                }
              ]
            },
            "functionSelector": "4d622831",
            "id": 99,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getLast",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 88,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "778:2:0"
            },
            "returnParameters": {
              "id": 93,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 99,
                  "src": "803:3:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "803:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 99,
                  "src": "808:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "802:20:0"
            },
            "scope": 100,
            "src": "762:113:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 101,
        "src": "38:844:0"
      }
    ],
    "src": "2:882:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.1+commit.f4a555be.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0xaea1ba997016130b79d7408e3b76a9a977e5f27f9b680594c2ab4c0334cec6c1": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "result",
              "type": "string"
            }
          ],
          "name": "FizzBuzzed",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xBACC648E3ceaff1d8411fdDCdf3029bBf9dc4A72",
      "transactionHash": "0xe1de65b7539e5c0d7ecdae3d8ec66fc328e2c503c2101f05d408714ce950f5dc"
    }
  },
  "schemaVersion": "3.2.5",
  "updatedAt": "2020-09-28T05:36:41.349Z",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}