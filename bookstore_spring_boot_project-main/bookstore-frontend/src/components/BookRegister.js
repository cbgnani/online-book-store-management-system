import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bookAPI } from '../services/api';

function BookRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    price: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.author || !formData.price) {
      setError('All fields are required');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await bookAPI.createBook(formData);
      alert('Book added successfully!');
      navigate('/books');
    } catch (err) {
      setError('Failed to add book: ' + (err.response?.data?.message || err.message));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Register New Book</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Book Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary me-2"
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add Book'}
            </button>
            <a href="/books" className="btn btn-secondary">Cancel</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookRegister;
