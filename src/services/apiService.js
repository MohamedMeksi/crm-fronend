const API_BASE = 'http://localhost:5000/api';

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!response.ok) throw new Error('Login failed');
  return response.json();
};

export const getEmployerStats = async (token) => {
  const response = await fetch(`${API_BASE}/employer/dashboard-stats`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!response.ok) throw new Error('Stats fetch failed');
  return response.json();
};

export const getLeads = async (token) => {
  const response = await fetch(`${API_BASE}/employer/leads`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.json();
};

export const deleteLead = async (leadId, token) => {
  const response = await fetch(`${API_BASE}/employer/leads/${leadId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!response.ok) throw new Error('Delete failed');
};

export const assignLead = async (leadId, managerId, token) => {
  const response = await fetch(`${API_BASE}/employer/leads/${leadId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ managerId })
  });
  if (!response.ok) throw new Error('Assign failed');
  return response.json();
};