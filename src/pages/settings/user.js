import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  Button,
  Tabs,
  Tab
} from '@mui/material';
import {
  Person as PersonIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
  People as StaffIcon
} from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

const UsersPage = () => {
  const [activeTab, setActiveTab] = useState('staff');
  const [users, setUsers] = useState([
    {
      id: '13682',
      admission_no: '0001',
      name: 'JUMA HASSAN',
      email: 'juma@gmail.com',
      class: 'Class VII(A)',
      father_name: 'Haasan haji',
      mobile: '0773863664',
      active: true
    },
    // Add more users as needed
  ]);

  const handleStatusChange = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, active: !user.active } : user
    ));
  };

  return (
    <Box sx={{ pt: 10, px: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
            <PersonIcon sx={{ mr: 1 }} /> Users Management
          </Typography>
        </Box>

        {/* Tabbed Interface */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab 
              value="staff" 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <StaffIcon sx={{ mr: 1 }} /> Staff
                </Box>
              } 
            />
            {/* Add more tabs as needed */}
          </Tabs>
        </Box>

        {/* Tab Content */}
        <Box sx={{ mt: 3 }}>
          {activeTab === 'staff' && (
            <div className="table-responsive">
              <TableContainer component={Paper} elevation={0}>
                <Table className="table table-striped table-hover">
                  <TableHead>
                    <TableRow>
                      <TableCell>Admission No</TableCell>
                      <TableCell>User Name</TableCell>
                      <TableCell>Mobile/Email</TableCell>
                      <TableCell>Class/Department</TableCell>
                      <TableCell>Father Name</TableCell>
                      <TableCell>Mobile Number</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id} hover>
                        <TableCell>{user.admission_no}</TableCell>
                        <TableCell>
                          <Button 
                            href={`/student/view/${user.id}`}
                            color="primary"
                            startIcon={<PersonIcon />}
                            sx={{ textTransform: 'none' }}
                          >
                            {user.name}
                          </Button>
                        </TableCell>
                        <TableCell>{user.email || '-'}</TableCell>
                        <TableCell>{user.class}</TableCell>
                        <TableCell>{user.father_name || '-'}</TableCell>
                        <TableCell>{user.mobile}</TableCell>
                        <TableCell align="right">
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Button 
                              size="small" 
                              color="primary" 
                              startIcon={<ViewIcon />}
                              sx={{ mr: 1 }}
                            >
                              View
                            </Button>
                            <Button 
                              size="small" 
                              color="success" 
                              startIcon={<EditIcon />}
                              sx={{ mr: 1 }}
                            >
                              Edit
                            </Button>
                            <Button 
                              size="small" 
                              color="error" 
                              startIcon={<DeleteIcon />}
                              sx={{ mr: 1 }}
                            >
                              Delete
                            </Button>
                            <Switch
                              checked={user.active}
                              onChange={() => handleStatusChange(user.id)}
                              color="success"
                              inputProps={{ 'aria-label': 'user status' }}
                            />
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default UsersPage;