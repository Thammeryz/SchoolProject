import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider
} from '@mui/material';
import {
  Search as SearchIcon,
  List as ListIcon,
  Description as DetailsIcon,
  Person as PersonIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon
} from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentDetailPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchCriteria, setSearchCriteria] = useState({
    class_id: '',
    section_id: '',
    search_text: ''
  });

  // Sample student data
  const students = [
    {
      id: '1',
      admission_no: '0518',
      name: 'JUMA MOHD',
      class: 'Class III(A)',
      father_name: 'Mohd Ali',
      dob: '2015-05-15',
      gender: 'Male',
      category: 'General',
      mobile: '+255 123 456 789'
    }
  ];

  const classes = [
    { id: '15', name: 'Class I' },
    { id: '16', name: 'Class II' },
    { id: '17', name: 'Class III' },
  
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching with:', searchCriteria);
    // API call to search students would go here
  };

  return (
    <Box sx={{ pt: 10, px: 3 }}>
      {/* Header Section */}
      <Paper elevation={0} sx={{ mb: 2, backgroundColor: 'transparent' }}>
        <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center' }}>
          <PersonIcon sx={{ mr: 1 }} /> Student Information
        </Typography>
      </Paper>

      {/* Search Criteria Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <SearchIcon sx={{ mr: 1 }} /> Select Criteria
        </Typography>
        
        <form onSubmit={handleSearchSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6">
                  <FormControl fullWidth size="small" className="mb-3">
                    <InputLabel>Class *</InputLabel>
                    <Select
                      name="class_id"
                      value={searchCriteria.class_id}
                      onChange={handleSearchChange}
                      label="Class *"
                      className="form-select"
                    >
                      <MenuItem value="">Select</MenuItem>
                      {classes.map(cls => (
                        <MenuItem key={cls.id} value={cls.id}>{cls.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="col-sm-6">
                  <FormControl fullWidth size="small" className="mb-3">
                    <InputLabel>Stream</InputLabel>
                    <Select
                      name="section_id"
                      value={searchCriteria.section_id}
                      onChange={handleSearchChange}
                      label="Stream"
                      className="form-select"
                    >
                      <MenuItem value="">Select</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-sm-12">
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="primary"
                      startIcon={<SearchIcon />}
                      className="btn btn-primary btn-sm"
                    >
                      Search
                    </Button>
                  </Box>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-12">
                  <TextField
                    fullWidth
                    label="Search By Keyword"
                    name="search_text"
                    value={searchCriteria.search_text}
                    onChange={handleSearchChange}
                    placeholder="Search By Student Name, Roll Number, Enroll Number, National Id, Local Id Etc."
                    size="small"
                    className="form-control mb-3"
                  />
                </div>
                <div className="col-sm-12">
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="primary"
                      startIcon={<SearchIcon />}
                      className="btn btn-primary btn-sm"
                    >
                      Search
                    </Button>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Paper>

      {/* Tab Section */}
      <Paper elevation={3}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab 
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ListIcon sx={{ mr: 1 }} /> List View
              </Box>
            } 
          />
          <Tab 
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DetailsIcon sx={{ mr: 1 }} /> Details View
              </Box>
            } 
          />
        </Tabs>

        {/* Tab Content */}
        <Box sx={{ p: 3 }}>
          {tabValue === 0 && (
            <TableContainer component={Paper} elevation={0}>
              <Table className="table table-striped table-bordered table-hover">
                <TableHead>
                  <TableRow>
                    <TableCell>Admission No</TableCell>
                    <TableCell>Student Name</TableCell>
                    <TableCell>Class</TableCell>
                    <TableCell>Father Name</TableCell>
                    <TableCell>Date of Birth</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Mobile Number</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.admission_no}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.class}</TableCell>
                      <TableCell>{student.father_name}</TableCell>
                      <TableCell>{student.dob}</TableCell>
                      <TableCell>{student.gender}</TableCell>
                      <TableCell>{student.category}</TableCell>
                      <TableCell>{student.mobile}</TableCell>
                      <TableCell align="right">
                        <Button size="small" color="primary" startIcon={<ViewIcon />}>View</Button>
                        <Button size="small" color="success" startIcon={<EditIcon />} sx={{ ml: 1 }}>Edit</Button>
                        <Button size="small" color="error" startIcon={<DeleteIcon />} sx={{ ml: 1 }}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {tabValue === 1 && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>Detailed Student View</Typography>
              <Paper elevation={3} sx={{ p: 3 }}>
                {students.map((student) => (
                  <Box key={student.id} sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>{student.name}</Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Typography><strong>Admission No:</strong> {student.admission_no}</Typography>
                        <Typography><strong>Class:</strong> {student.class}</Typography>
                        <Typography><strong>Father's Name:</strong> {student.father_name}</Typography>
                        <Typography><strong>Date of Birth:</strong> {student.dob}</Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography><strong>Gender:</strong> {student.gender}</Typography>
                        <Typography><strong>Category:</strong> {student.category}</Typography>
                        <Typography><strong>Mobile Number:</strong> {student.mobile}</Typography>
                      </Grid>
                    </Grid>
                    <Divider sx={{ my: 2 }} />
                  </Box>
                ))}
              </Paper>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default StudentDetailPage;