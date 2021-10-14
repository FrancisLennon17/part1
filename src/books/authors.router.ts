import express, { Request, Response } from 'express';
import * as BooksService from './books.service';

export const authorsRouter = express.Router();

authorsRouter.get('/', (req: Request, res: Response) => {
  try {
    const authors: string[] = BooksService.findAllAuthors();
    res.status(200).send(authors);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

export default authorsRouter;
