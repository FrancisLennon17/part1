# Book Data Back End

This is a simple REST API for working with data on books an authors.

## Running the built code

Running the service is done using the `npm run start` command.

## Running locally with live code reloading

Run in dev mode using the command `npm run dev`

## API End Points

| HTTP Verb | URL                         |
|-----------|-----------------------------|
| GET       | `/api/v1/authors`           |
| GET       | `/api/v1/books/:authorName` |
| DELETE    | `/api/v1/book/:isbn`        |
 
## Environment Variables

The `PORT` environment variable specifies with port to use. Default is 7000. The server looks for a `.env` file.

## Unit Tests

The main functionality is covered by unit tests for the three parts of the service layer. Tests are running using `npm run test`

## Linting & Code Formatting

| Command              | Description                             |
|----------------------|-----------------------------------------|
| `npm run lint`       | ESLint the codebase                     |
| `npm run lint:fix`   | ESLint with `--fix` to fix simple stuff |
| `npm run prettier`   | Make the code all pretty                |

## Tech Debt

- Non persistence of deletes. Whilst this is implemented with implemented in memory, it has been left for speed of testing. Can be achieved by passing `JSON.stringify(books)` to a write file at the end of the delete method. 
