import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page non trouvée</h2>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}
