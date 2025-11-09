import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const user = useContext(UserContext);

  if (!user) return null;

  return (
    <div style={{
      padding: '1.5rem',
      margin: '2rem auto',
      maxWidth: '400px',
      border: '2px solid #3498db',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h3 style={{ marginTop:0, color:'#2c3e50' }}>User Details (Context)</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserDetails;
