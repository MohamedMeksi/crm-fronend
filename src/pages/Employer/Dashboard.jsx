import { useEffect, useState } from 'react';
import { getEmployerStats } from '../../services/apiService';
import { useAuth } from '../../hooks/useAuth';

export default function EmployerDashboard() {
  const [stats, setStats] = useState({});
  const { token } = useAuth();

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getEmployerStats(token);
      setStats(data);
    };
    fetchStats();
  }, [token]);

  return (
    <div className="dashboard">
      <h2>Tableau de bord - Leads</h2>
      <ul>
        <li>En cours : {stats.inProgress}</li>
        <li>Complétés : {stats.completed}</li>
        <li>Annulés : {stats.canceled}</li>
      </ul>
    </div>
  );
}
