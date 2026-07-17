import React, { useState, useEffect } from 'react';
import { bookAPI } from '../services/api';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await bookAPI.getAllBooks();
      setBooks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch books');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToMyBooks = async (book) => {
    try {
      await bookAPI.addToMyBooks(book);
      alert('Book added to your collection!');
    } catch (err) {
      alert('Failed to add book');
      console.error(err);
    }
  };

  const handleDeleteBook = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await bookAPI.deleteBook(id);
        setBooks(books.filter(book => book.id !== id));
        alert('Book deleted successfully!');
      } catch (err) {
        alert('Failed to delete book');
        console.error(err);
      }
    }
  };

  if (loading) return <div className="container mt-5"><p>Loading books...</p></div>;
  if (error) return <div className="container mt-5"><p className="text-danger">{error}</p></div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Available Books</h2>
      {books.length === 0 ? (
        <p>No books available. <a href="/register">Add a new book</a></p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Author</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>${book.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => handleAddToMyBooks(book)}
                    >
                      Add to My Books
                    </button>
                    <a
                      href={`/edit/${book.id}`}
                      className="btn btn-sm btn-warning me-2"
                    >
                      Edit
                    </a>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteBook(book.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <a href="/register" className="btn btn-primary mt-3">Add New Book</a>
    </div>
  );
}

export default BookList;
