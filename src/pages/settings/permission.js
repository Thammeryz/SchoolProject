// PermissionPage.js
import React, { useState } from 'react';
import {
  Box, Typography, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Checkbox, Button
} from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

const PermissionPage = () => {
  const { roleId } = useParams();
  const navigate = useNavigate();
  const roleName = ['Admin', 'Teacher', 'Accountant', 'Custom'][roleId - 1] || 'Custom Role';

  const [permissions, setPermissions] = useState([
    { id: 1, name: 'Dashboard', view: true, create: false, edit: false, delete: false },
    { id: 2, name: 'Students', view: true, create: true, edit: true, delete: false },
    { id: 3, name: 'Staff', view: true, create: true, edit: true, delete: true }
  ]);

  const handlePermissionChange = (id, field) => {
    setPermissions(permissions.map(perm =>
      perm.id === id ? { ...perm, [field]: !perm[field] } : perm
    ));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6">Permissions for: {roleName}</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Module</TableCell>
                <TableCell align="center">View</TableCell>
                <TableCell align="center">Create</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {permissions.map((perm) => (
                <TableRow key={perm.id}>
                  <TableCell>{perm.name}</TableCell>
                  <TableCell align="center">
                    <Checkbox checked={perm.view} onChange={() => handlePermissionChange(perm.id, 'view')} />
                  </TableCell>
                  <TableCell align="center">
                    <Checkbox checked={perm.create} onChange={() => handlePermissionChange(perm.id, 'create')} />
                  </TableCell>
                  <TableCell align="center">
                    <Checkbox checked={perm.edit} onChange={() => handlePermissionChange(perm.id, 'edit')} />
                  </TableCell>
                  <TableCell align="center">
                    <Checkbox checked={perm.delete} onChange={() => handlePermissionChange(perm.id, 'delete')} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" onClick={() => navigate(-1)}>Back</Button>
          <Button variant="contained" startIcon={<SaveIcon />} onClick={() => alert('Permissions saved!')}>
            Save Permissions
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default PermissionPage;
