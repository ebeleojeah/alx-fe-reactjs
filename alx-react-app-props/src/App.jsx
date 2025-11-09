import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <MainContent />

      {/* Context Provider wraps ProfilePage */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      <Footer />
    </div>
  );
}

export default App;