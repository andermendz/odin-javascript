// Write a constructor for making “Book” objects.
// We will revisit this in the project at the end of this lesson.
// Your book objects should have the book’s title, author, 
// the number of pages, and whether or not you have read the book.

function book(title, author, numPages, readStatus){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.readStatus = readStatus;
    this.info = function(){
        return (this.title + " By  " + this.author +
                        ",  " + this.numPages + " pages "+
                                          this.readStatus);
    };
}

let book1 = new book("test book ", "Me", 325, "Read");

book.prototype.isDigital = function(){
    return "Available on digital"
}
let book2 = new book("test book ", "other dude", 34, "not Read");


// console.log(book1.info());
// console.log(book1.isDigital());
// console.log(book2.isDigital());

