import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AppBar, Toolbar, 
  IconButton, Avatar, Menu, 
  MenuItem, Badge,
} from '@mui/material';
import { 
  Notifications, AccountCircle, 
  Logout, Settings 
} from '@mui/icons-material';

const Topbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const drawerWidth = 240;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed"
      sx={{ 
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        bgcolor: 'background.paper',
        color: 'text.primary',
        boxShadow: 'none',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`
      }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <IconButton color="inherit" aria-label="notifications">
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        
        <IconButton
          onClick={handleMenuOpen}
          color="inherit"
          sx={{ ml: 1 }}
        >
          <Avatar sx={{ width: 32, height: 32 }}>O</Avatar>
        </IconButton>
        
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => navigate('/profile')}>
            <AccountCircle sx={{ mr: 1 }} /> Profile
          </MenuItem>
          <MenuItem onClick={() => navigate('/settings')}>
            <Settings sx={{ mr: 1 }} /> Settings
          </MenuItem>
          <MenuItem onClick={() => navigate('/')}>
            <Logout sx={{ mr: 1 }} /> Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;