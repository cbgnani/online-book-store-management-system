import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bookAPI } from '../services/api';

function BookEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    price: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const fetchBook = useCallback(async () => {
    try {
      const response = await bookAPI.getBookById(id);
      setFormData(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch book details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

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
      setSubmitting(true);
      setError(null);
      await bookAPI.updateBook(id, formData);
      alert('Book updated successfully!');
      navigate('/books');
    } catch (err) {
      setError('Failed to update book: ' + (err.response?.data?.message || err.message));
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="container mt-5"><p>Loading book details...</p></div>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Edit Book</h2>
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
              disabled={submitting}
            >
              {submitting ? 'Updating...' : 'Update Book'}
            </button>
            <a href="/books" className="btn btn-secondary">Cancel</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookEdit;
