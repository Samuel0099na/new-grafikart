//-------------------------------SECOND-CLASS--------------------------------
//-------------------------------SECOND-CLASS--------------------------------
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get perimeter() {
    return (this.height + this.width) * 2;
  }
  get isValide() {
    return this.width > 0 && this.height > 0;
  }
  isBiggerThan(shape) {
    return this.perimeter > shape.perimeter;
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }
}

const r = new Rectangle(10, 20);
console.log(r.perimeter); // 60
console.log(r.isValid); // true
const r2 = new Rectangle(-10, 20);
console.log(r2.isValid); // false
const c = new Square(10);
console.log(c.perimeter); // 40
console.log(r.isBiggerThan(c)); // true
// --------------------------------------------------------
// second exemple
class book {
  #page = 1;
  constructor(tittle, pages) {
    this.tittle = tittle;
    this.pages = pages;
  }
  get page() {
    return this.#page;
  }
  nextPage() {
    if (this.#page > this.pages) {
      this.#page++;
    }
  }
  close() {
    this.#page = 1;
  }
}

class library {
  #books = [];
  addbook(book) {
    this.#books.push(book);
  }
  addbooks(books) {
    for (let book of books) {
      this.addbook(book);
    }
  }
  findBooksByLetters(letter) {
    return this.#books.filter(
      (book) => book.tittle[0].toLowerCase() === letter.toLowerCase()
    );
  }
}

const b = new book("seigneur des anneaux", 200);
console.log(b.page);
b.nextPage();
console.log(b.page);
b.close();
console.log(b.page);

const l = new library();
l.addbook(b);
l.addbooks([
  new book("ready on player", 100),
  new book("atomic habits", 300),
  new book("sillage", 50),
  new book("sil et gam", 150),
]);

console.log(l.findBooksByLetters("s"));
