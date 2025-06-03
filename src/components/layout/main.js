import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Topbar from './topbar';
import Sidebar from './sidebar';
import Dashboard from './dashboard';

const Layout = () => {
  const drawerWidth = -250;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          p: 1,
          pt: -0 
        }}
      >
        <Topbar />
        <Dashboard />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;