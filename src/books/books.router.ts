import express, { Request, Response, Router } from 'express';
import * as BooksService from './books.service';
import { Book } from './book.interface';

export const booksRouter: Router = express.Router();

interface BooksRequestParams {
  author: string;
}

booksRouter.get('/books/:author', (req: Request<BooksRequestParams>, res: Response) => {
  try {
    const { author } = req.params;
    const books: Book[] = BooksService.findAll(author);
    res.status(200).send(books);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

booksRouter.delete('/book/:isbn', (req: Request, res: Response): any => {
  try {
    const { isbn } = req.params;

    if (BooksService.deleteBook(isbn) === 1) {
      return res.sendStatus(204);
    }
    return res.status(500).send('ISBN could not be deleted');
  } catch (e: any) {
    return res.status(500).send(e.message);
  }
});

export default booksRouter;
