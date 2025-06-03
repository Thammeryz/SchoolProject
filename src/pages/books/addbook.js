import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider
} from '@mui/material';
import {
  Book as BookIcon,
  Add as AddIcon
} from '@mui/icons-material';

const AddBook = () => {
  const [formData, setFormData] = useState({
    book_title: '',
    class_id: '',
    subject_group_id: '',
    subject_id: '',
    category_id: '',
    edition_number: '',
    publisher_name: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', formData);
    // You would send formData to your API here
  };

  return (
    <Box sx={{ pt: 10, px: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
            <BookIcon sx={{ mr: 1 }} /> Add Book 
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* Book Title */}
            <div className="col-md-3">
              <div className="form-group">
                <label>Book Title *</label>
                <input
                  type="text"
                  className="form-control"
                  name="book_title"
                  value={formData.book_title}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Class */}
            <div className="col-md-3">
              <div className="form-group">
                <label>Class *</label>
                <select
                  name="class_id"
                  className="form-control"
                  value={formData.class_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="15">Class I</option>
                  <option value="16">Class II</option>
                  <option value="17">Class III</option>
                  <option value="26">Class IV</option>
                  <option value="27">Class V</option>
               
                </select>
              </div>
            </div>

            {/* Subject  */}
            <div className="col-md-3">
              <div className="form-group">
                <label>Subject</label>
                <select
                  name="subject_group_id"
                  className="form-control"
                  value={formData.subject_group_id}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="15">Mathematics</option>
                  <option value="16">English</option>
                  <option value="17">Kiswahili</option>
                  <option value="26">Dini</option>
                  <option value="27">History</option>
                </select>
              </div>
            </div>

            {/* Subject */}
            <div className="col-md-3">
              <div className="form-group">
                <label>Post Date</label>
                <select
                  name="subject_id"
                  className="form-control"
                  value={formData.subject_id}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                </select>
              </div>
            </div>

            {/* Category */}
            <div className="col-md-3">
              <div className="form-group">
                <label>Category</label>
                <select
                  name="category_id"
                  className="form-control"
                  value={formData.category_id}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="1">Theory</option>
                </select>
              </div>
            </div>
             {/* Category */}
            <div className="col-md-3">
              <div className="form-group">
                <label>Condition</label>
                <select
                  name="category_id"
                  className="form-control"
                  value={formData.category_id}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="1">Good</option>
                  <option value="1">New</option>
                  <option value="1">Poor</option>
                  <option value="1">Bad</option>

                </select>
              </div>
            </div>

          

            {/* Publisher Name */}
            <div className="col-md-3">
              <div className="form-group">
                <label>Publisher Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="publisher_name"
                  value={formData.publisher_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label> Total Quantity *</label>
                <input
                  type="text"
                  className="form-control"
                  name="edition_number"
                  value={formData.edition_number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-md-12 mt-3">
              <div className="form-group text-right">
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  startIcon={<AddIcon />}
                  sx={{ px: 4, py: 1 }}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Paper>
    </Box>
  );
};

export default AddBook;