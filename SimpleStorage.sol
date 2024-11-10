// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract SimpleStorage {
    uint256 storedNumber;

    struct Person {
        uint256 favoriteNumber;
        string name;
    }

    Person[] public peopleList;
    mapping(string => uint256) public nameToFavNumber;

    function setNumber(uint256 _number) public {
        storedNumber = _number;
    }

    function retrieve() public view returns (uint256) {
        return storedNumber;
    }

    function addPerson(string memory _name, uint256 _favNumber) public {
        peopleList.push(Person(_favNumber, _name));
        nameToFavNumber[_name] = _favNumber;
    }
}
