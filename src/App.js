import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/login';
import Sidebar from './components/layout/sidebar';
import Topbar from './components/layout/topbar';
import Dashboard from './components/layout/main';
import StudentAdmission from './pages/students/stdAdmission';
import StaffDirectory from './pages/hr/staffdirectory';
import Addstaff from './pages/hr/addstaff';
import ForgetPass from './pages/auth/forgetPassword';
import Roles from './pages/settings/roles';
import Permission from './pages/settings/permission';
import AddBook from './pages/books/addbook';
import ViewBooks from './pages/books/viewbook';
import AssignBook from './pages/books/assignbook';
import StudentDetailPage from './pages/students/stdDetails';
import UsersPage from './pages/settings/user';
import StudentReportPage from './pages/reports/stdReport';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgetPassword" element={<ForgetPass />} />
        <Route
          path="/*"
          element={
            <div className="dashboard-container" style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ flex: 1 }}>
                <Topbar />
                <Routes>
                  <Route path="/main" element={<Dashboard />} />
                  <Route path="/stdAdmission" element={<StudentAdmission />} />
                  <Route path="/stdDetails" element={<StudentDetailPage/>} />
                  <Route path="/staffdirectory" element={<StaffDirectory />} />
                  <Route path="/addstaff" element={<Addstaff />} />
                  <Route path="/roles" element={<Roles />} />
                  <Route path="/user" element={<UsersPage />} />
                  <Route path="/permission" element={<Permission />} />
                  <Route path="/addbook" element={<AddBook />} />
                  <Route path="/viewbook" element={<ViewBooks />} />
                  <Route path="/assignbook" element={<AssignBook />} />
                  <Route path="/stdReport" element={<StudentReportPage />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
