import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
} from '@mui/material';
import {
  Description as ReportIcon,
  People as StudentIcon,
  School as ClassIcon,
  HowToReg as AdmissionIcon,
  ArrowBack as BackIcon
} from '@mui/icons-material';

import 'bootstrap/dist/css/bootstrap.min.css';

const ReportsDashboard = () => {
  const [activeReport, setActiveReport] = useState(null);

  const mainReports = [
    {
      id: 'student',
      title: "Student Report",
      icon: <StudentIcon fontSize="large" />,
      description: "View detailed student information and analytics"
    },
    {
      id: 'class',
      title: "Class Report",
      icon: <ClassIcon fontSize="large" />,
      description: "View class-wise reports and statistics"
    },
    {
      id: 'admission',
      title: "Admission Report",
      icon: <AdmissionIcon fontSize="large" />,
      description: "View admission trends and statistics"
    }
  ];

  const renderMainDashboard = () => (
    <Box sx={{ pt: 10, px: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
          <ReportIcon sx={{ mr: 1 }} /> Reports 
        </Typography>
        
        <Grid container spacing={3}>
          {mainReports.map((report) => (
            <Grid item xs={12} md={4} key={report.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <IconButton color="primary" sx={{ mb: 2 }}>
                    {report.icon}
                  </IconButton>
                  <Typography variant="h5" gutterBottom>
                    {report.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {report.description}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setActiveReport(report.id)}
                    fullWidth
                  >
                    View Report
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );

  const renderReportContent = () => {
    switch (activeReport) {
      case 'class':
        return (
          <Box sx={{ pt: 10, px: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <IconButton onClick={() => setActiveReport(null)} sx={{ mr: 2 }}>
                <BackIcon />
              </IconButton>
              <Typography variant="h4">
                Class Section Report
              </Typography>
            </Box>
       
          </Box>
        );
      // Add cases for other reports here
      default:
        return renderMainDashboard();
    }
  };

  return renderReportContent();
};



export default ReportsDashboard;