

(function () {

    // ES6 Features

    //Arrow functions
    const nums = [8, 9, 10, 5, 6];
    const exponentTwo = nums.map((x) => x*x);
    console.log(nums);


    //Define object using class
    class Book{
        constructor(isbn, title, author){
            this.isbn = isbn;
            this.title = title;
            this.author = author;
        }

        toString(){
            return this.isbn + ' - ' + this.title + ' - ' + this.author;
        }

        static bookInfo(){
            console.log("This is a static method");
        }

    }

    Book.bookInfo();

    const myBook = new Book('ISBN-783924','Harry Potter','JK Rowling');

    console.log(myBook);

    console.log(myBook.toString());

    //Enhanced object literals

    {
        let isbn = 'ISB-78392';
        let title = 'Harry Potter';
        let author = 'JK Rowling';
        
        const abook = {
            isbn,
            title,
            author
        }

        console.log(abook);
    }

    //Destructing

    var a, b, rest;
    [a, b] = [10, 20];

    console.log(a);

    console.log(b);

    [a, b, ...rest] = [10, 20, 30, 40, 50];

    console.log(rest);


    //Default value for function arguments
    function f(x, y=12) {
        return x + y;
      }
      
      console.log(f(3))


      //Spread operator
      var parts = ["shoulders", "knees"];
      var lyrics = ["head", ...parts, "and", "toes"]; 

     console.log(lyrics);

})();