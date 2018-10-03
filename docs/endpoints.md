# Endpoints
### Create book
**Endpoint**:  `POST: /api/books`

**Body**:

    name: String!
    author: String!
    numberOfPages: Number!
    yearOfPublication: Number!

**Response**:

    {
      "borrowCount": 0,
      "_id": "5bb51ee4e4ca7e391e365dd6",
      "name": "Sample Book",
      "author": "Some Author",
      "yearOfPublication": 2018,
      "numberOfPages": 200,
      "__v": 0
    }

### Get book
**Endpoint**:  `GET: /api/books/:bookId`

**Response**:

    {
      "borrowCount": 0,
      "_id": "5bb51ee4e4ca7e391e365dd6",
      "name": "Sample Book",
      "author": "Some Author",
      "yearOfPublication": 2018,
      "numberOfPages": 200,
      "__v": 0
    }


### Get books
**Endpoint**:  `GET: /api/books`

**Query**:

    name: String
    author: String

**Response**:

    [
      {
        "borrowCount": 0,
        "_id": "5bb51ee4e4ca7e391e365dd6",
        "name": "Sample Book",
        "author": "Some Author",
        "yearOfPublication": 2018,
        "numberOfPages": 200,
        "__v": 0
      }
    ]

### Update book
**Endpoint**:  `PUT: /api/books/:bookId`

**Body**:

    name: String!
    author: String!
    numberOfPages: Number!
    yearOfPublication: Number!

**Response**:

    {
      "borrowCount": 0,
      "_id": "5bb51ee4e4ca7e391e365dd6",
      "name": "Sample Book",
      "author": "Some Author",
      "yearOfPublication": 2017,
      "numberOfPages": 100,
      "__v": 0
    }

### Delete book
**Endpoint**:  `DELETE: /api/books/:bookId`

**Response**:

    {
      "message": "Book deleted"
    }

### Borrow book
**Endpoint**:  `PUT: /api/books/:bookId/borrow`

**Response**:

    {
      "message": "Book borrowed"
    }


### Return book
**Endpoint**:  `PUT: /api/books/:bookId/return`

**Response**:

    {
      "message": "Book returned"
    }

### Clear book
**Endpoint**:  `PUT: /api/books/:bookId/clear`

**Response**:

    {
      "message": "Book cleared"
    }
