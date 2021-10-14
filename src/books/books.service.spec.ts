import * as BookService from './books.service';

describe('BookService', () => {
  beforeEach(() => {
    BookService.reloadTestData();
  });

  describe('isValidIsbn', () => {
    it('should validate some examples', async () => {
      expect(BookService.isValidIsbn('978-1-56619-909-4 2')).toBe(false);
      expect(BookService.isValidIsbn('978-1-56619-909-4')).toBe(true);
      expect(BookService.isValidIsbn('1-56619-909-3 ')).toBe(false);
      expect(BookService.isValidIsbn('isbn446877428ydh')).toBe(false);
      expect(BookService.isValidIsbn('55 65465 4513574')).toBe(false);
    });
  });

  describe('findAll', () => {
    it('finds all the books', () => {
      const books = BookService.findAll();
      expect(books.length).toBe(10);
      expect(books[2]).toEqual({
        isbn: '9781593277574',
        title: 'Understanding ECMAScript 6',
        subtitle: 'The Definitive Guide for JavaScript Developers',
        author: 'Nicholas C. Zakas',
        published: '2016-09-03T00:00:00.000Z',
        publisher: 'No Starch Press',
        pages: 352,
        description:
          'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.',
        website: 'https://leanpub.com/understandinges6/read',
      });
    });

    it('find books by a particular author', () => {
      const books = BookService.findAll('Robert C. Martin');
      expect(books.length).toBe(2);
      expect(books[0]).toEqual({
        isbn: '9780132350884',
        title: 'Clean Code',
        subtitle: 'A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        published: '2008-08-01T00:00:00.000Z',
        publisher: 'Prentice Hall',
        pages: 464,
        description:
          'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way. Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship . Martin has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of a software craftsman and make you a better programmer—but only if you work at it. What kind of work will you be doing? You’ll be reading code—lots of code. And you will be challenged to think about what’s right about that code, and what’s wrong with it. More importantly, you will be challenged to reassess your professional values and your commitment to your craft. Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code—of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code. Readers will come away from this book understanding How to tell the difference between good and bad code How to write good code and how to transform bad code into good code How to create good names, good functions, good objects, and good classes How to format code for maximum readability How to implement complete error handling without obscuring code logic How to unit test and practice test-driven development This book is a must for any developer, software engineer, project manager, team lead, or systems analyst with an interest in producing better code.',
        website: 'http://cleancoder.com/products',
      });
    });
  });

  describe('deleteBook', () => {
    it('deletes a book', () => {
      const beforeDeleteBooks = BookService.findAll();
      const deleteCount = BookService.deleteBook('9781593277574');
      const afterDeleteBooks = BookService.findAll();
      expect(beforeDeleteBooks.length).toBe(10);
      expect(afterDeleteBooks.length).toBe(9);
      expect(deleteCount).toBe(1);
    });
    it('does not delete a book given an invalid ISBN', () => {
      const beforeDeleteBooks = BookService.findAll();
      const deleteCount = BookService.deleteBook('WRONG-CODE');
      const afterDeleteBooks = BookService.findAll();
      expect(beforeDeleteBooks.length).toEqual(afterDeleteBooks.length);
      expect(deleteCount).toBe(0);
    });
  });
});
