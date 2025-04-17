import { useEffect, useState, useCallback } from 'react';
import { getMyLeads, updateLeadStatus } from '../../services/apiService';
import { useAuth } from '../../hooks/useAuth';

export default function LeadsList() {
  const [leads, setLeads] = useState([]);
  const { token } = useAuth();

  const loadLeads = useCallback(async () => {
    const data = await getMyLeads(token);
    setLeads(data);
  }, [token]);

  const handleStatusChange = async (id, newStatus) => {
    await updateLeadStatus(id, newStatus, token);
    loadLeads();
  };

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

  return (
    <div>
      <h2>Mes Leads</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th><th>Email</th><th>Société</th><th>Statut</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead._id}>
              <td>{lead.contactName}</td>
              <td>{lead.contactEmail}</td>
              <td>{lead.companyName}</td>
              <td>{lead.status}</td>
              <td>
                <select value={lead.status} onChange={(e) => handleStatusChange(lead._id, e.target.value)}>
                  <option value="PENDING">En attente</option>
                  <option value="IN_PROGRESS">En cours</option>
                  <option value="COMPLETED">Complété</option>
                  <option value="CANCELED">Annulé</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
