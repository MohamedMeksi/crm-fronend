import { useEffect, useState, useCallback } from 'react';
import { getManagers, createManager, deleteManager } from '../../services/apiService';
import ManagerForm from '../../components/ManagerForm';
import { useAuth } from '../../hooks/useAuth';

export default function ManageManagers() {
  const [managers, setManagers] = useState([]);
  const { token } = useAuth();

  const loadManagers = useCallback(async () => {
    const data = await getManagers(token);
    setManagers(data);
  }, [token]);

  const handleAdd = async (manager) => {
    await createManager(manager, token);
    loadManagers();
  };

  const handleDelete = async (id) => {
    await deleteManager(id, token);
    loadManagers();
  };

  useEffect(() => {
    loadManagers();
  }, [loadManagers]);

  return (
    <div>
      <h2>Gérer les Managers</h2>
      <ManagerForm onSubmit={handleAdd} />
      <ul>
        {managers.map((m) => (
          <li key={m._id}>
            {m.name} ({m.email})
            <button onClick={() => handleDelete(m._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
