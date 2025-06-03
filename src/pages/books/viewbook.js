import React, { useState } from 'react';
import {
  Box,
  Typography,
  Divider,
  IconButton
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  PersonAdd as PersonAddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Book as BookIcon
} from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

const EBooksPage = () => {
  const [filters, setFilters] = useState({
    class_id: '',
    subject_id: '',
    category_id: ''
  });

  // Sample data with additional fields
  const ebooks = [
    {
      id: 9,
      title: 'English Text Book',
      subject: 'English',
      class: 'Class I',
      publisher: 'Tanzania Institute of Education',
      edition: '2023',
      category: 'Theory',
      quantity: 50,
      available: 45,
      postDate: '2023-05-15'
    },
    {
      id: 10,
      title: 'Mathematics_Book',
      subject: 'Mathematics',
      class: 'Class I',
      publisher: 'Tanzania Institute of Education',
      edition: '2023',
      category: 'Theory',
      quantity: 60,
      available: 58,
      postDate: '2023-06-20'
    }
  ];

  const classes = [
    { id: 15, name: 'Class I' },
    { id: 16, name: 'Class II' },
    // Add all other classes
  ];

  const categories = [
    { id: 1, name: 'Theory' },
    { id: 2, name: 'Practical' }
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Box sx={{ pt: 10, px: 3 }}>
      <div className="card">
        <div className="card-header">
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
            <BookIcon sx={{ mr: 1 }} /> All Books List 
          </Typography>
        </div>
        <div className="card-body">
          {/* Filter Section */}
          <form className="mb-4">
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Class</label>
                  <select 
                    name="class_id"
                    className="form-control"
                    value={filters.class_id}
                    onChange={handleFilterChange}
                  >
                    <option value="">Select</option>
                    {classes.map(cls => (
                      <option key={cls.id} value={cls.id}>{cls.name}</option>
                    ))}
                  </select>
                </div>
              </div>

           

              <div className="col-md-3">
                <div className="form-group">
                  <label>Subject</label>
                  <select 
                    name="subject_id"
                    className="form-control"
                    value={filters.subject_id}
                    onChange={handleFilterChange}
                  >
                    <option value="">Select</option>
                  </select>
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label>Category</label>
                  <select 
                    name="category_id"
                    className="form-control"
                    value={filters.category_id}
                    onChange={handleFilterChange}
                  >
                    <option value="">Select</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-12 text-right">
                <button type="submit" className="btn btn-primary">
                  Filter
                </button>
              </div>
            </div>
          </form>

          <Divider sx={{ my: 3 }} />

          {/* E-Books Table */}
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Book Title</th>
                  <th>Subject</th>
                  <th>Class</th>
                  <th>Publisher</th>
                  <th>Edition</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Available</th>
                  <th>Post Date</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {ebooks.map((book) => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.subject}</td>
                    <td>{book.class}</td>
                    <td>{book.publisher}</td>
                    <td>{book.edition}</td>
                    <td>{book.category}</td>
                    <td>{book.quantity}</td>
                    <td>{book.available}</td>
                    <td>{formatDate(book.postDate)}</td>
                    <td className="text-right">
                      <IconButton 
                        color="success" 
                        size="small"
                        href={`/admin/ebook/view_pdf/${book.id}`}
                        target="_blank"
                      >
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                      <IconButton 
                        color="warning" 
                        size="small"
                        href={`/admin/ebook/assignbook/${book.id}`}
                      >
                        <PersonAddIcon fontSize="small" />
                      </IconButton>
                      <IconButton 
                        color="primary" 
                        size="small"
                        href={`/admin/ebook/edit/${book.id}`}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton 
                        color="error" 
                        size="small"
                        href={`/admin/ebook/delete/${book.id}`}
                        onClick={(e) => {
                          if (!window.confirm('Are you sure you want to delete?')) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination-summary mt-3">
            Showing 1 to {ebooks.length} of {ebooks.length} entries
          </div>
        </div>
      </div>
    </Box>
  );
};

export default EBooksPage;