import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  const user = useContext(UserContext);

  if (!user) return <p>Loading user...</p>;

  return (
    <div style={{
      padding: '1.5rem',
      margin: '1rem auto',
      maxWidth: '500px',
      border: '2px solid #3498db',
      borderRadius: '10px',
      backgroundColor: '#f0f8ff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h3 style={{ color: '#2c3e50' }}>User Details (via Context API)</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserDetails;
