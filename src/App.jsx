import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

import Login from './pages/Login';
import NotFound from './pages/NotFound';

// Employer Pages
import EmployerDashboard from './pages/Employer/Dashboard';
import ManageLeads from './pages/Employer/ManageLeads';
import ManageManagers from './pages/Employer/ManageManagers';

// Manager Page
import LeadsList from './pages/Manager/LeadsList';

import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute role="employer" />}>
              <Route path="/employer/dashboard" element={<EmployerDashboard />} />
              <Route path="/employer/leads" element={<ManageLeads />} />
              <Route path="/employer/managers" element={<ManageManagers />} />
            </Route>
            <Route element={<PrivateRoute role="manager" />}>
              <Route path="/manager/leads" element={<LeadsList />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
