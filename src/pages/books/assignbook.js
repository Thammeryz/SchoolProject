import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Divider
} from '@mui/material';
import {
  Search as SearchIcon,
  People as PeopleIcon,
  Book as BookIcon
} from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

const AssignBook = () => {
  const [formData, setFormData] = useState({
    class_id: '17',
    section_id: '',
    category_id: '1',
    gender: 'Male',
    ebook_id: '9'
  });

  const [selectAll, setSelectAll] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);

  // Sample student data
  const students = [
    {
      id: '8587',
      student_session_id: '8587',
      admission_no: '0518',
      name: 'AZHAR MOHD ALI',
      class: 'Class III(A)',
      father_name: '',
      category: '',
      gender: ''
    },
    {
      id: '8588',
      student_session_id: '8588',
      admission_no: '0519',
      name: 'ABUBAKAR KHATIB AMAN',
      class: 'Class III(A)',
      father_name: '',
      category: '',
      gender: ''
    }
  ];

  const classes = [
    { id: '15', name: 'Class I' },
    { id: '16', name: 'Class II' },
    { id: '17', name: 'Class III' },
    { id: '26', name: 'Class IV' },
    { id: '27', name: 'Class V' },
    { id: '28', name: 'Class VI' },
    { id: '29', name: 'Class VII' },
    { id: '30', name: 'Baby' },
    { id: '31', name: 'KG1' },
    { id: '32', name: 'KG2' },
    { id: '40', name: 'Class API' }
  ];

  const categories = [
    { id: '1', name: 'Day' },
  ];

  const genders = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    if (isChecked) {
      setSelectedStudents(students.map(student => student.student_session_id));
    } else {
      setSelectedStudents([]);
    }
  };

  const handleStudentSelect = (e, studentId) => {
    if (e.target.checked) {
      setSelectedStudents(prev => [...prev, studentId]);
    } else {
      setSelectedStudents(prev => prev.filter(id => id !== studentId));
      setSelectAll(false);
    }
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log('Searching with:', formData);
    // API call to filter students would go here
  };

  const handleAssignSubmit = (e) => {
    e.preventDefault();
    console.log('Assigning book to:', selectedStudents);
    // API call to assign ebook would go here
  };

  return (
    <Box sx={{ pt: 10, px: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Search Criteria Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SearchIcon sx={{ mr: 1 }} /> Select Criteria
          </Typography>
          
          <form onSubmit={handleSubmitSearch}>
            <div className="row g-3">
              {/* Class */}
              <div className="col-md-3">
                <div className="form-group">
                  <label className="form-label">Class</label>
                  <select
                    name="class_id"
                    className="form-select"
                    value={formData.class_id}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {classes.map(cls => (
                      <option key={cls.id} value={cls.id}>{cls.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Stream */}
              <div className="col-md-3">
                <div className="form-group">
                  <label className="form-label">Stream</label>
                  <select
                    name="section_id"
                    className="form-select"
                    value={formData.section_id}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                  </select>
                </div>
              </div>

              {/* Category */}
              <div className="col-md-2">
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select
                    name="category_id"
                    className="form-select"
                    value={formData.category_id}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Gender */}
              <div className="col-md-2">
                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <select
                    name="gender"
                    className="form-select"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {genders.map(gender => (
                      <option key={gender.value} value={gender.value}>{gender.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-md-2 d-flex align-items-end">
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  fullWidth
                  startIcon={<SearchIcon />}
                  className="w-100"
                >
                  Search
                </Button>
              </div>
            </div>
          </form>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Assign Ebooks Section */}
        <form onSubmit={handleAssignSubmit}>
          <input type="hidden" name="ebook_id" value={formData.ebook_id} />
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
              <PeopleIcon sx={{ mr: 1 }} /> Issues Books to Students
            </Typography>
          </Box>

          <TableContainer component={Paper}>
            <Table className="table table-hover">
              <TableHead className="table-dark">
                <TableRow>
                  <TableCell>
                    <Checkbox
                      checked={selectAll}
                      onChange={handleSelectAll}
                      inputProps={{ 'aria-label': 'select all students' }}
                    />
                    All
                  </TableCell>
                  <TableCell>Admission No</TableCell>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Class</TableCell>
                  <TableCell>Father Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Gender</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id} hover>
                    <TableCell>
                      <Checkbox
                        checked={selectedStudents.includes(student.student_session_id)}
                        onChange={(e) => handleStudentSelect(e, student.student_session_id)}
                        inputProps={{ 'aria-label': 'select student' }}
                      />
                      <input 
                        type="hidden" 
                        name="student_ids[]" 
                        value={student.id} 
                      />
                    </TableCell>
                    <TableCell>{student.admission_no}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.father_name}</TableCell>
                    <TableCell>{student.category}</TableCell>
                    <TableCell>{student.gender}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              startIcon={<BookIcon />}
              disabled={selectedStudents.length === 0}
              className="px-4"
            >
              Assign E-Book
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AssignBook;