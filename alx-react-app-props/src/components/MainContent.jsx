import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '2rem', flex: 1 }}>
      <h2 style={{ textAlign: 'center' }}>Welcome!</h2>
      <UserProfile />
    </main>
  );
}

export default MainContent;