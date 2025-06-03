import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Card,
  CardContent,
  Avatar,
  Divider
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Phone as PhoneIcon,
  MoreVert as MoreVertIcon,
  ViewList as ViewListIcon,
  Apps as AppsIcon
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';  // Import NavLink from react-router-dom

const StaffDirectory = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchCriteria, setSearchCriteria] = useState({
    role: '',
    searchText: ''
  });

  const staffMembers = [
    {
      id: 'T001',
      name: 'Khalid Juma',
      role: 'Teacher',
      mobile: '+255 123 456 789',
      email: 'khalid@gmail.com'
    },
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

  const roles = [
    'Admin', 'HeadMaster', 'Teacher', 
  ];

  return (
    <Box sx={{ pt: 10, pl: 3, pr: 3 }}> {/* Adjusted padding to account for the top bar */}
      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
            <WorkIcon sx={{ mr: 1 }} /> Human Resource
          </Typography>
          <NavLink to="/addstaff" style={{ textDecoration: 'none' }}>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<AddIcon />}
            >
              Add Staff
            </Button>
          </NavLink>
        </Box>

        {/* Search Criteria Section */}
        <Paper elevation={1} sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ mr: 1 }} /> Select Criteria
          </Typography>
          
          <Grid container spacing={3}>
            {/* Role Search */}
            <Grid item xs={12} md={7}>
              <FormControl fullWidth size="small">
                <InputLabel>Role *</InputLabel>
                <Select
                  name="role"
                  value={searchCriteria.role}
                  onChange={handleSearchChange}
                  label="Role *"
                >
                  <MenuItem value="">Select</MenuItem>
                  {roles.map((role, index) => (
                    <MenuItem key={index} value={role}>{role}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Box>
            </Grid>

            {/* Keyword Search */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Search By Keyword"
                name="searchText"
                value={searchCriteria.searchText}
                onChange={handleSearchChange}
                placeholder="Search By Staff ID, Name, Role etc..."
                size="small"
              />
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* View Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Card View" icon={<AppsIcon />} iconPosition="start" />
            <Tab label="List View" icon={<ViewListIcon />} iconPosition="start" />
          </Tabs>
        </Box>

        {/* Tab Content */}
        <Box sx={{ pt: 2 }}>
          {tabValue === 0 && (
            <Grid container spacing={3}>
              {staffMembers.map((staff, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}>
                        <PersonIcon fontSize="large" />
                      </Avatar>
                      <Typography variant="h6">{staff.name}</Typography>
                      <Typography color="text.secondary">{staff.role}</Typography>
                      <Typography color="text.secondary">{staff.department}</Typography>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2">
                          <PhoneIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                          {staff.mobile}
                        </Typography>
                        <IconButton size="small">
                          <MoreVertIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {tabValue === 1 && (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Staff ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Mobile Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {staffMembers.map((staff, index) => (
                    <TableRow key={index}>
                      <TableCell>{staff.id}</TableCell>
                      <TableCell>{staff.name}</TableCell>
                      <TableCell>{staff.role}</TableCell>
                      <TableCell>{staff.mobile}</TableCell>
                      <TableCell>{staff.email}</TableCell>
                      <TableCell align="right">
                        <IconButton size="small">
                          <MoreVertIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default StaffDirectory;
