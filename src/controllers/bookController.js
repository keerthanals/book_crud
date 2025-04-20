const { json } = require("express");

const books = [];
let currentId = 1

//create book 

exports.createBook = (req, res) => {
    if (books.length >= 3) {
        return res.status(400).json({ message: "Book limit reached. Cannot add more than 3 books." });
    }

    const { title, author, publishedYear, price } = req.body;
    const book = { id: currentId++, title, author, publishedYear, price };
    books.push(book);
    res.status(201).json(book);
};


//Get all books with optional search

exports.getAllBooks = (req, res) => {
    const { search } = req.query;
    if (search) {
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
        );
        return res.json(filteredBooks);
    }

    res.json(books)
}

//get book by id

exports.getBookById = (req, res) => {
    const book = books.find((b) => {
        return b.id === parseInt(req.params.id)
    });
    if (!book) return res.status(404).send('book not found');
    res.json(book);
}

//update book by id

exports.updateBookById = (req, res) => {
    const book = books.find((b) => {
        return b.id === parseInt(req.params.id)
    });
    if (!book) return res.status(404).send('book not found');

    const { title, author, publishedYear, price } = req.body;
    if (title) {
        book.title = title;
    }
    if (author) {
        book.author = author;
    }
    if (publishedYear) {
        book.publishedYear = publishedYear;
    }
    if (price) {
        book.price = price;
    }
    res.json(book);
}

//partially update a book by id

exports.partialUpdateBookById = (req, res) => {
    const book = books.find((b) => {
        return b.id === parseInt(req.params.id)
    });
    if (!book) return res.status(404).send('book not found');

    const { title, author, publishedYear, price } = req.body;

    if (title !== undefined) {
        book.title = title;
    }
    if (author !== undefined) {
        book.author = author;
    }
    if (publishedYear !== undefined) {
        book.publishedYear = publishedYear;
    }
    if (price !== undefined) {
        book.price = price;
    }
    res.json(book);

}

// delete a book  by id

exports.deleteBookById = (req, res) => {
    const index = books.findIndex((b) => {
        return b.id === parseInt(req.params.id)
    })
    if (index === -1) {
        return res.status(404).send('book not found');
    }
    books.splice(index, 1);
    res.status(204).send()
};