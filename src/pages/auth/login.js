import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Link,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  CircularProgress
} from '@mui/material';
import { 
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 450,
  margin: 'auto',
  marginTop: theme.spacing(8),
  backgroundColor: '#0A192F', // Dark blue background
  color: '#E6F1FF', // Light text color
  borderRadius: '12px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const LogoTitle = styled(Typography)(({ theme }) => ({
  color: '#64FFDA', // Teal accent color
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: theme.spacing(1),
  letterSpacing: '1px',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: '#CCD6F6', // Light blue text
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  fontWeight: 300,
}));

const LoginTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  color: '#E6F1FF',
  letterSpacing: '0.5px',
}));

const LoginButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5),
  backgroundColor: '#1E4B5A', // Dark teal
  color: '#FFFFFF',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#64FFDA', // Bright teal on hover
    color: '#0A192F',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(100, 255, 218, 0.2)',
  },
  '&:disabled': {
    backgroundColor: '#1E4B5A',
  },
}));

const NatureBackground = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  background: 'linear-gradient(135deg, #0A192F 0%, #0D2B3E 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '40%',
    height: '40%',
    backgroundImage: 'radial-gradient(circle at 70% 80%, rgba(100, 255, 218, 0.1) 0%, transparent 30%)',
  },
});

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.emailOrMobile || !formData.password) {
      setError('All fields are required');
      return;
    }
    
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/main');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <NatureBackground />
      <StyledPaper elevation={3}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <LogoTitle variant="h4">Welcome </LogoTitle>
          <Subtitle variant="h4">School Rental Book</Subtitle>
          <LoginTitle variant="h5">Staff Login</LoginTitle>
        </Box>

        {error && (
          <Box 
            sx={{ 
              backgroundColor: 'rgba(255, 80, 80, 0.2)', 
              color: '#FF5050', 
              p: 2, 
              mb: 3, 
              borderRadius: 1,
              textAlign: 'center',
              border: '1px solid rgba(255, 80, 80, 0.3)',
            }}
          >
            {error}
          </Box>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="emailOrMobile"
            value={formData.emailOrMobile}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: '#64FFDA' }} />
                </InputAdornment>
              ),
              sx: {
                color: '#E6F1FF',
                borderRadius: '8px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#233554',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#64FFDA',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#64FFDA',
                },
              }
            }}
            InputLabelProps={{
              style: { color: '#8892B0' },
            }}
            required
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: '#64FFDA' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePassword}
                    edge="end"
                    sx={{ color: '#64FFDA' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                color: '#E6F1FF',
                borderRadius: '8px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#233554',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#64FFDA',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#64FFDA',
                },
              }
            }}
            InputLabelProps={{
              style: { color: '#8892B0' },
            }}
            required
          />

          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                    sx={{
                      color: '#64FFDA',
                      '&.Mui-checked': {
                        color: '#64FFDA',
                      },
                    }}
                  />
                }
                label={<Typography sx={{ color: '#8892B0' }}>Remember me</Typography>}
              />
            </Grid>
            <Grid item>
              <Link href="/forgetPassword" variant="body2" sx={{ color: '#64FFDA', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Forgot Password?
              </Link>
            </Grid>
          </Grid>

          <LoginButton
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            size="large"
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: '#FFFFFF' }} />
            ) : (
              'Sign In'
            )}
          </LoginButton>
        </form>
      </StyledPaper>
    </Box>
  );
};

export default Login;