// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract Main2{
    struct Book{
        string title;
        string author;
        uint book_id;
    }
    Book book;
    function setbook() public{
        book=Book("solidty","tp",1);
    }
    function getbookid()public view returns (uint){
        return book.book_id;
    }
    
}