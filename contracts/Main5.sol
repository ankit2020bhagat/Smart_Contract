// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 < 0.9.0;
contract Main5{
    mapping (uint=>string) public names;
    mapping (uint=>Book) public books;
    struct Book{
        string tillte;
        string author;
    }
    constructor() {
        names[1]="Ankit";
        names[2]="kumar";
        names[3]="Bhagat";
    }
    function addBook(uint _id,string memory _title,string memory _author) public{
        books[_id]=Book(_title,_author);
    }
}