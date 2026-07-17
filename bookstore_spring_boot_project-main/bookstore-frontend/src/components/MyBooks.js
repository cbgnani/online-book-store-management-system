import React, { useState, useEffect } from 'react';
import { bookAPI } from '../services/api';

function MyBooks() {
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMyBooks();
  }, []);

  const fetchMyBooks = async () => {
    try {
      setLoading(true);
      const response = await bookAPI.getMyBooks();
      setMyBooks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch your books');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveBook = async (id) => {
    if (window.confirm('Are you sure you want to remove this book from your collection?')) {
      try {
        await bookAPI.removeFromMyBooks(id);
        setMyBooks(myBooks.filter(book => book.id !== id));
        alert('Book removed from your collection!');
      } catch (err) {
        alert('Failed to remove book');
        console.error(err);
      }
    }
  };

  if (loading) return <div className="container mt-5"><p>Loading your books...</p></div>;
  if (error) return <div className="container mt-5"><p className="text-danger">{error}</p></div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">My Books</h2>
      {myBooks.length === 0 ? (
        <p>You haven't added any books yet. <a href="/books">Browse available books</a></p>
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
              {myBooks.map(book => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>${book.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemoveBook(book.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <a href="/books" className="btn btn-primary mt-3">Browse More Books</a>
    </div>
  );
}

export default MyBooks;
