import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BookList from './components/BookList';
import BookRegister from './components/BookRegister';
import BookEdit from './components/BookEdit';
import MyBooks from './components/MyBooks';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">📚 Bookstore</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/books">Books</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/my-books">My Books</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register Book</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/register" element={<BookRegister />} />
          <Route path="/edit/:id" element={<BookEdit />} />
          <Route path="/my-books" element={<MyBooks />} />
        </Routes>

        <footer className="bg-dark text-white text-center mt-5 py-3">
          <p>&copy; 2024 Bookstore. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
