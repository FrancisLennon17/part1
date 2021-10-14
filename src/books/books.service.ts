import * as fs from 'fs';

import { Book } from './book.interface';

// In-Memory Store
const DATA_PATH = `${__dirname}/../../data/`;
const DATA_FILE_PATH = `${DATA_PATH}books.json`;
const DATA_FILE_MASTER_PATH = `${DATA_PATH}books.master.json`;
let books: Book[];

export const load = (path: string): void => {
    const data = JSON.parse(fs.readFileSync(path, 'utf-8'));
    books = data.books as Book[];
}

export const reloadTestData = (): void => {
    load(DATA_FILE_MASTER_PATH);
}

load(DATA_FILE_PATH);

/**
 * Service Methods
 */
export const findAll = (searchAuthor?: string): Book[] => {

    return searchAuthor ? books.filter(({ author }) => searchAuthor === author) : books;
};

export const findAllAuthors = (): string[] => {

    const authors = books.map(({ author }) => author);
    return Array.from(new Set(authors));
};

export const deleteBook = (isbn: string): number => {

    let count: number = books.length;
    books = books.filter(book => book.isbn !== isbn);
    return count - books.length;
};

export const isValidIsbn = (isbn: string): Boolean => {

    return /^(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$/.test(isbn);

}