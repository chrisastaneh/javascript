'use strict';

(function () {

    const author = {};


    Object.defineProperty(author, 'id', {
      value: 1,
      writable: false
    });

    //author.id = 5;

    Object.defineProperty(author, 'books', {
        value: ['book1', 'book2', 'book3'],
        configurable: false
      });
    
    console.log(author);
    //delete author.books;

    Object.defineProperty(author, 'ssn', {
        value: '123-456-789',
        enumerable: false
      });

    console.log(Object.keys(author));

})();

