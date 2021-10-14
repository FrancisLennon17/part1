import express, { Request, Response } from "express";
import * as BooksService from "./books.service";
import { Book } from "./book.interface";

export const booksRouter = express.Router();

booksRouter.get("/books/", (req: Request, res: Response) => {
    try {

        const author: string = req.query?.author;
        const books: Book[] = BooksService.findAll(author);
        res.status(200).send(books);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

booksRouter.delete("/book/:isbn", async (req: Request, res: Response) => {
    try {
        const isbn: string = req.params.isbn;

        if (BooksService.deleteBook(isbn) === 1) {
            return res.sendStatus(204);
        }
        return res.status(500).send('ISBN could not be deleted');

    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

