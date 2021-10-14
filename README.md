# Book Data Back End

This is a simple REST API for working with data on books an authors.

## Running locally

Run in dev mode using the command `npm run dev`

## API End Points

| HTTP Verb | URL                         |
|-----------|-----------------------------|
| GET       | `/api/v1/authors`           |
| GET       | `/api/v1/books/:authorName` |
| DELETE    | `/api/v1/book/:isbn`        |
 
## Environment Variables

The `PORT` environment variable specifies with port to use. Default is 7000. The server looks for a `.env` file.

## Unit tests

The main functionality is covered by unit tests for the three parts of the service layer. Tests are running using `npm run test`

## Tech Debt

- Non persistence of deletes. Whilst this is implemented with implemented in memory, it has been left for speed of testing. Can be achieved by passing `JSON.stringify(books)` to a write file at the end of the delete method.
