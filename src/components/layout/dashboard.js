import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  Box,
  Paper,
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow,
  Divider,
  Chip,
  Avatar,
  LinearProgress,
  useTheme
} from '@mui/material';
import { 
  BarChart, 
  PieChart, 
  LibraryBooks,
  School,
  EventBusy,
  MonetizationOn,
  ArrowUpward,
  ArrowDownward,
  MoreVert
} from '@mui/icons-material';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const theme = useTheme();

  // Enhanced Stat Card Component
  const StatCard = ({ title, value, change, icon, color }) => (
    <Card sx={{ 
      height: '100%', 
      boxShadow: 3,
      borderLeft: `4px solid ${color}`,
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)'
      }
    }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
              {value}
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              {change > 0 ? (
                <ArrowUpward color="success" fontSize="small" />
              ) : (
                <ArrowDownward color="error" fontSize="small" />
              )}
              <Typography 
                variant="body2" 
                color={change > 0 ? 'success.main' : 'error.main'}
                sx={{ ml: 0.5 }}
              >
                {Math.abs(change)}% from last month
              </Typography>
            </Box>
          </Box>
          <Avatar sx={{ 
            bgcolor: `${color}20`, 
            color: color,
            width: 48,
            height: 48
          }}>
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );

  // Chart data
  const metricsChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Books Borrowed',
        data: [65, 59, 80, 81, 56, 72],
        backgroundColor: theme.palette.primary.main,
        borderRadius: 4
      },
      {
        label: 'Books Returned',
        data: [45, 49, 60, 71, 46, 62],
        backgroundColor: theme.palette.success.main,
        borderRadius: 4
      }
    ],
  };

  const categoriesChartData = {
    labels: ['Fiction', 'Science', 'History', 'Mathematics', 'Literature'],
    datasets: [
      {
        data: [35, 25, 20, 15, 30],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.success.main,
          theme.palette.warning.main,
          theme.palette.error.main,
          theme.palette.info.main
        ],
        borderWidth: 0
      },
    ],
  };

  // Table data
  const recentActivities = [
    { 
      id: 1, 
      student: 'John Doe', 
      action: 'Borrowed', 
      book: 'Introduction to React', 
      date: '2023-05-10',
      status: 'active'
    },
    { 
      id: 2, 
      student: 'Jane Smith', 
      action: 'Returned', 
      book: 'Advanced JavaScript', 
      date: '2023-05-09',
      status: 'completed'
    },
    { 
      id: 3, 
      student: 'Mike Johnson', 
      action: 'Borrowed', 
      book: 'CSS Mastery', 
      date: '2023-05-08',
      status: 'active'
    },
    { 
      id: 4, 
      student: 'Sarah Williams', 
      action: 'Reserved', 
      book: 'Python Programming', 
      date: '2023-05-07',
      status: 'pending'
    },
  ];

  const booksInventory = [
    { 
      id: 1, 
      title: 'Introduction to React', 
      category: 'Science', 
      grade: '10', 
      total: 15, 
      available: 5, 
      progress: 33 
    },
    { 
      id: 2, 
      title: 'Advanced JavaScript', 
      category: 'Science', 
      grade: '11', 
      total: 10, 
      available: 2, 
      progress: 80 
    },
    { 
      id: 3, 
      title: 'CSS Mastery', 
      category: 'Science', 
      grade: '9', 
      total: 8, 
      available: 3, 
      progress: 62 
    },
    { 
      id: 4, 
      title: 'Python Programming', 
      category: 'Science', 
      grade: '12', 
      total: 12, 
      available: 6, 
      progress: 50 
    },
  ];

  return (
    <Box sx={{ pt: 10, pl: 3, pr: 3 }}>
      <Container fluid>
        {/* Summary Cards */}
        <Row className="g-4 mb-4">
          <Col xs={12} md={6} lg={3}>
            <StatCard 
              title="Total Books" 
              value="320" 
              change={12.5} 
              icon={<LibraryBooks />} 
              color={theme.palette.primary.main} 
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <StatCard 
              title="Students" 
              value="150" 
              change={8.3} 
              icon={<School />} 
              color={theme.palette.success.main} 
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <StatCard 
              title="Due Returns" 
              value="8" 
              change={-5.2} 
              icon={<EventBusy />} 
              color={theme.palette.warning.main} 
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <StatCard 
              title="Penalties" 
              value="TZS 25,000" 
              change={3.7} 
              icon={<MonetizationOn />} 
              color={theme.palette.error.main} 
            />
          </Col>
        </Row>

        {/* Charts Row */}
        <Row className="g-4 mb-4">
          <Col xs={12} lg={8}>
            <Card sx={{ boxShadow: 3, height: '100%' }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Borrowing Activity
                  </Typography>
                  <Button variant="outlined" size="small" endIcon={<MoreVert />}>
                    View Report
                  </Button>
                </Box>
                <Box sx={{ height: 300 }}>
                  <Bar 
                    data={metricsChartData} 
                    options={{ 
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true
                        }
                      }
                    }} 
                  />
                </Box>
              </CardContent>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card sx={{ boxShadow: 3, height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                  Book Categories
                </Typography>
                <Box sx={{ height: 300 }}>
                  <Pie 
                    data={categoriesChartData} 
                    options={{ 
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom',
                        },
                      }
                    }} 
                  />
                </Box>
              </CardContent>
            </Card>
          </Col>
        </Row>

        {/* Tables Row */}
        <Row className="g-4">
          <Col xs={12} lg={6}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Recent Activities
                  </Typography>
                  <Button variant="text" size="small" color="primary">
                    View All
                  </Button>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Student</TableCell>
                      <TableCell>Action</TableCell>
                      <TableCell>Book</TableCell>
                      <TableCell align="right">Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentActivities.map((activity) => (
                      <TableRow key={activity.id} hover>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Avatar sx={{ 
                              width: 32, 
                              height: 32, 
                              mr: 1,
                              bgcolor: 
                                activity.status === 'active' ? theme.palette.success.light :
                                activity.status === 'completed' ? theme.palette.primary.light :
                                theme.palette.warning.light
                            }}>
                              {activity.student.charAt(0)}
                            </Avatar>
                            {activity.student}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={activity.action} 
                            size="small"
                            color={
                              activity.status === 'active' ? 'success' :
                              activity.status === 'completed' ? 'primary' :
                              'warning'
                            }
                          />
                        </TableCell>
                        <TableCell>{activity.book}</TableCell>
                        <TableCell align="right">{activity.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Col>
          <Col xs={12} lg={6}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Books Inventory
                  </Typography>
                  <Button variant="text" size="small" color="primary">
                    View All
                  </Button>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Book Title</TableCell>
                      <TableCell>Available</TableCell>
                      <TableCell>Progress</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {booksInventory.map((book) => (
                      <TableRow key={book.id} hover>
                        <TableCell>
                          <Typography fontWeight={500}>{book.title}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {book.category} • Grade {book.grade}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>
                            {book.available} / {book.total}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <LinearProgress 
                            variant="determinate" 
                            value={book.progress} 
                            color={
                              book.progress > 75 ? 'error' :
                              book.progress > 50 ? 'warning' :
                              'primary'
                            }
                            sx={{ height: 8, borderRadius: 4 }}
                          />
                          <Typography variant="body2" color="text.secondary" align="right">
                            {book.progress}%
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Dashboard;