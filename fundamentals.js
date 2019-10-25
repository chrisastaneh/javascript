'use strict'

console.log("Hi there");

//Data types

var author;
console.log(typeof author);

author = "Johana Lindsay"
console.log(typeof author);

var numberOfAuthors = 4;
console.log(typeof numberOfAuthors);

author = {name: "Johana", lastName: "Lindsay"};
console.log(typeof author);

console.log(null === undefined)         // false
console.log(null == undefined)          // true

console.log(typeof function myFunc(){});

//Functions

var book = {title: "Gentle Rogue", ISBN: "SomeISBN"};

//book = undefined;

function displayAuthorName(book) {
    if(book){
        return book.title;              
    }
    return "book is empty";
}

console.log(displayAuthorName(book));


//Objects

var author1 = {
    id       : 1,
    firstName: "Johana",
    lastName : "Lindsay",
    getInfo : function() {
        return this.id +  " " + this.firstName + " " + this.lastName;
    }
};

console.log(author1.getInfo());


//ES6 let & const
//ES5 had only local/function and global scope.
// Ecmascript 2015 enabled block scope.

var x = 10;
{ 
    const x = 2;
}

console.log(x);

const arrow = (x, y) => x * y;

console.log(arrow(4,5));


//Define an object

const publisher = new Object();
publisher.companyName = "Best Publisher LLC";
publisher.address = "NYC";

console.log(publisher);

//Define object using constructor
function Author(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
}

//Author.company = "some company";
Author.prototype.company = "some company";


const myAuthor = new Author(1, "Johana" , "Lindsay");

console.log(myAuthor);
console.log(myAuthor.company);


//Ajax
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }

  };

xhttp.open("GET", "http://www.mocky.io/v2/5daca80c30000092002987ad", true);
xhttp.send();
