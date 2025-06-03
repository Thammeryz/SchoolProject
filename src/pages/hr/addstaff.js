import React, { useState } from 'react';
import {
  Box,
  Typography,

} from '@mui/material';
import {
  Work as WorkIcon,
  Email as EmailIcon,
  Save as SaveIcon
} from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Addstaff = () => {
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    surname: '',
    father_name: '',
    email: '',
    gender: '',
    dob: '',
    date_of_joining: '',
    contactno: '',
    marital_status: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const roles = [
    { value: '1', label: 'Admin' },
    { value: '2', label: 'Teacher' },
    { value: '3', label: 'HeadMaster' },
  ];

  return (
    <Box sx={{ pt: 10, px: 3 }}>
      <div className="card">
        <div className="card-header">
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
            <WorkIcon sx={{ mr: 1 }} /> Add Staff
          </Typography>
        </div>
        <div className="card-body">
      

          <form>
            <div className="row">
              {/* Role Field */}
              <div className="col-md-4 mb-3">
                <label className="form-label">Role *</label>
                <select
                  name="role"
                  className="form-select"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {roles.map((role) => (
                    <option key={role.value} value={role.value}>{role.label}</option>
                  ))}
                </select>
              </div>

              {/* Empty column for spacing */}
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>

        
              <div className="col-md-4 mb-3">
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Middle Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="father_name"
                  value={formData.father_name}
                  onChange={handleChange}
                />
              </div>

        
              <div className="col-md-4 mb-3">
                <label className="form-label">Email *</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <EmailIcon fontSize="small" />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

      
              <div className="col-md-4 mb-3">
                <label className="form-label">Gender *</label>
                <select
                  name="gender"
                  className="form-select"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

        
              <div className="col-md-4 mb-3">
                <label className="form-label">Date of Birth *</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12 mt-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <SaveIcon sx={{ mr: 1 }} />
                  Save 
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default Addstaff;