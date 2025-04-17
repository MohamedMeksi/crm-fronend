import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useEffect, useState, useCallback } from 'react';
import { getLeads, deleteLead, assignLead } from '../../services/apiService';
import LeadTable from '../../components/LeadTable';

export const useAuth = () => useContext(AuthContext);
export default function ManageLeads() {
  const [leads, setLeads] = useState([]);
  const { token } = useAuth();

  const loadLeads = useCallback(async () => {
    const data = await getLeads(token);
    setLeads(data);
  }, [token]);

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

  const handleDelete = async (id) => {
    await deleteLead(id, token);
    loadLeads();
  };

  const handleAssign = async (id, managerId) => {
    await assignLead(id, managerId, token);
    loadLeads();
  };

  return (
    <div>
      <h2>Gérer les Leads</h2>
      <LeadTable leads={leads} onDelete={handleDelete} onAssign={handleAssign} />
    </div>
  );
}
