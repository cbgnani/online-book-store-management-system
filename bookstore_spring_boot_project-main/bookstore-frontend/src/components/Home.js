import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Bookstore</h1>
        <p className="lead">Manage your book collection with ease</p>
        <hr className="my-4" />
        <p>Browse available books, add them to your collection, and keep track of your reading library.</p>
        <div className="mt-4">
          <a className="btn btn-primary btn-lg me-2" href="/books" role="button">
            Browse Books
          </a>
          <a className="btn btn-success btn-lg me-2" href="/my-books" role="button">
            My Books
          </a>
          <a className="btn btn-info btn-lg" href="/register" role="button">
            Add New Book
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
