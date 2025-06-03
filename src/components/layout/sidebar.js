import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Typography,
  Box,
  Drawer,
  styled,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  People as PeopleIcon,
  School as SchoolIcon,
  //AttachMoney as AttachMoneyIcon,
  MenuBook as MenuBookIcon,
  Equalizer as EqualizerIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: '#0A192F', // Dark blue background
    color: '#E6F1FF', // Light text color
    borderRight: '1px solid #233554', // Subtle border
  },
});

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: '#CCD6F6', // Light blue text
  display: 'block',
  '&.active': {
    backgroundColor: '#112240', // Darker blue for active
    '& .MuiListItemIcon-root': {
      color: '#64FFDA', // Teal accent for active icon
    },
    '& .MuiListItemText-primary': {
      color: '#64FFDA', // Teal accent for active text
      fontWeight: '500',
    },
    '& .MuiSvgIcon-root': { // For expand icons
      color: '#64FFDA',
    }
  },
  '&:hover': {
    backgroundColor: '#112240', // Darker blue on hover
    '& .MuiListItemIcon-root': {
      color: '#64FFDA', // Teal accent on hover
    },
  },
}));

const StyledListItemIcon = styled(ListItemIcon)({
  color: '#8892B0', // Lighter text for icons
  minWidth: '40px',
});

const Sidebar = () => {
  const [open, setOpen] = useState({
    student: false,
    hr: false,
    penalty: false,
    ebook: false,
    reports: false,
    settings: false,
  });

  const handleClick = (section) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [section]: !prevOpen[section],
    }));
  };

  return (
    <StyledDrawer variant="permanent">
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <StyledNavLink to="/main">
          <Typography variant="h6" sx={{ 
            color: '#64FFDA', 
            fontWeight: '700',
            cursor: 'pointer',
            '&:hover': {
              color: '#64FFDA',
            }
          }}>
            School Rental Book
          </Typography>
        </StyledNavLink>
      </Box>

      <Divider sx={{ borderColor: '#233554' }} />
      
      <List component="nav">
  
        <StyledNavLink to="#" onClick={() => handleClick('student')}>
          <ListItem button>
            <StyledListItemIcon>
              <SchoolIcon />
            </StyledListItemIcon>
            <ListItemText primary="Student Information" />
            {open.student ? <ExpandLess sx={{ color: '#8892B0' }} /> : <ExpandMore sx={{ color: '#8892B0' }} />}
          </ListItem>
        </StyledNavLink>
        <Collapse in={open.student} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyledNavLink to="/stdDetails">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Student Details" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/stdAdmission">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Student Admission" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/assignbook">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Disable Student" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/students/disable-reason">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Disable Reason" />
              </ListItem>
            </StyledNavLink>
          </List>
        </Collapse>

  
        <StyledNavLink to="#" onClick={() => handleClick('hr')}>
          <ListItem button>
            <StyledListItemIcon>
              <PeopleIcon />
            </StyledListItemIcon>
            <ListItemText primary="Staff Resources" />
            {open.hr ? <ExpandLess sx={{ color: '#8892B0' }} /> : <ExpandMore sx={{ color: '#8892B0' }} />}
          </ListItem>
        </StyledNavLink>
        <Collapse in={open.hr} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyledNavLink to="/staffdirectory">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Staff Information" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/hr/disable-staff">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Disable Staff" />
              </ListItem>
            </StyledNavLink>
          </List>
        </Collapse>

   {/*
        <StyledNavLink to="#" onClick={() => handleClick('penalty')}>
          <ListItem button>
            <StyledListItemIcon>
              <AttachMoneyIcon />
            </StyledListItemIcon>
            <ListItemText primary="Penalty" />
            {open.penalty ? <ExpandLess sx={{ color: '#8892B0' }} /> : <ExpandMore sx={{ color: '#8892B0' }} />}
          </ListItem>
        </StyledNavLink>
        <Collapse in={open.penalty} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyledNavLink to="/penalties/student-penalties">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Student Penalties" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/penalties/add-penalty">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Add Penalty" />
              </ListItem>
            </StyledNavLink>
          </List>
        </Collapse>*/}

       
        <StyledNavLink to="#" onClick={() => handleClick('ebook')}>
          <ListItem button>
            <StyledListItemIcon>
              <MenuBookIcon />
            </StyledListItemIcon>
            <ListItemText primary="Book" />
            {open.ebook ? <ExpandLess sx={{ color: '#8892B0' }} /> : <ExpandMore sx={{ color: '#8892B0' }} />}
          </ListItem>
        </StyledNavLink>
        <Collapse in={open.ebook} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyledNavLink to="/addbook">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Books Inventory" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/viewbook">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Book Distribution" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/v">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Book Returns" />
              </ListItem>
            </StyledNavLink>
          </List>
        </Collapse>


        <StyledNavLink to="#" onClick={() => handleClick('reports')}>
          <ListItem button>
            <StyledListItemIcon>
              <EqualizerIcon />
            </StyledListItemIcon>
            <ListItemText primary="Reports" />
            {open.reports ? <ExpandLess sx={{ color: '#8892B0' }} /> : <ExpandMore sx={{ color: '#8892B0' }} />}
          </ListItem>
        </StyledNavLink>
        <Collapse in={open.reports} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyledNavLink to="/stdReport">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Student Report" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/reports/hr-report">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Staff Report" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/reports/penalty-report">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Penalty Report" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/reports/book-report">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Book Report" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/reports/book-report">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="User Logs" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/reports/book-report">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Audit Trail Reports" />
              </ListItem>
            </StyledNavLink>
          </List>
        </Collapse>

  
        <StyledNavLink to="#" onClick={() => handleClick('settings')}>
          <ListItem button>
            <StyledListItemIcon>
              <SettingsIcon />
            </StyledListItemIcon>
            <ListItemText primary="System Settings" />
            {open.settings ? <ExpandLess sx={{ color: '#8892B0' }} /> : <ExpandMore sx={{ color: '#8892B0' }} />}
          </ListItem>
        </StyledNavLink>
        <Collapse in={open.settings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyledNavLink to="/roles">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Roles & Permission" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/user">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Users" />
              </ListItem>
            </StyledNavLink>
            <StyledNavLink to="/settings/general">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="General Settings" />
              </ListItem>
            </StyledNavLink>
          </List>
        </Collapse>
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;