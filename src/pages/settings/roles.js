import React, { useState } from 'react';
import {
  Paper,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  FormControl
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Assignment as AssignmentIcon,
  Save as SaveIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const RolesPage = () => {
  const [roleName, setRoleName] = useState('');
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', type: 'System' },
    { id: 2, name: 'Teacher', type: 'System' },
    { id: 3, name: 'Accountant', type: 'System' }
  ]);
  const navigate = useNavigate();

  const handleRoleSubmit = (e) => {
    e.preventDefault();
    if (roleName.trim()) {
      const newRole = {
        id: roles.length + 1,
        name: roleName,
        type: 'Custom'
      };
      setRoles([...roles, newRole]);
      setRoleName('');
    }
  };

  const handleDeleteRole = (id) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      setRoles(roles.filter(role => role.id !== id));
    }
  };

  return (
    <div className="container-fluid" style={{ paddingTop: '80px' }}>
      <div className="row">
        {/* Add Role Form */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-header text-black">
              <h5 className="mb-0">
                <SaveIcon className="mr-2" /> Add New Role
              </h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleRoleSubmit}>
                <FormControl fullWidth className="mb-3">
                  <TextField
                    label="Role Name *"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                    className="form-control"
                  />
                </FormControl>
                <div className="d-grid gap-2">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    className="btn btn-primary"
                  >
                    Save Role
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Role List */}
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header  text-black">
              <h5 className="mb-0">Role List</h5>
            </div>
            <div className="card-body p-0">
              <TableContainer component={Paper} elevation={0}>
                <Table className="table table-hover mb-0">
                  <TableHead className="thead-dark">
                    <TableRow>
                      <TableCell className="fw-bold">Role</TableCell>
                      <TableCell className="fw-bold">Type</TableCell>
                      <TableCell className="fw-bold text-end">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {roles.map((role) => (
                      <TableRow key={role.id} className="align-middle">
                        <TableCell>{role.name}</TableCell>
                        <TableCell>
                          <span className={`badge ${role.type === 'System' ? 'bg-secondary' : 'bg-success'}`}>
                            {role.type}
                          </span>
                        </TableCell>
                        <TableCell className="text-end">
                          <IconButton
                            size="small"
                            color="primary"
                            onClick={() => navigate(`/permission/${role.id}`)}
                            className="btn btn-sm btn-outline-primary me-1"
                          >
                            <AssignmentIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            color="primary"
                            href={`/admin/roles/edit/${role.id}`}
                            className="btn btn-sm btn-outline-primary me-1"
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                          {role.type === 'Custom' && (
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => handleDeleteRole(role.id)}
                              className="btn btn-sm btn-outline-danger"
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesPage;