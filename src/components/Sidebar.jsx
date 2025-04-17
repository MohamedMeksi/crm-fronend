import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Sidebar = () => {
  const { user, logout } = useAuth();

  return (
    <aside className="w-64 bg-gray-200 p-4 min-h-screen">
      <nav className="flex flex-col space-y-2">
        {user?.role === 'employer' && (
          <>
            <Link to="/employer/dashboard">Dashboard</Link>
            <Link to="/employer/leads">Manage Leads</Link>
            <Link to="/employer/managers">Manage Managers</Link>
          </>
        )}
        {user?.role === 'manager' && (
          <Link to="/manager/leads">My Leads</Link>
        )}
        <button onClick={logout} className="text-red-500 mt-4">Logout</button>
      </nav>
    </aside>
  );
};

export default Sidebar;