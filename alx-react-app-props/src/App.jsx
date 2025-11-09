import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';
import UserProfile from './components/UserProfile'; // Added: for context usage
import UserContext from './components/UserContext';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <MainContent />

      {/* Context Provider wraps ProfilePage AND UserProfile */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
        <UserProfile /> {/* Optional: show profile directly too */}
      </UserContext.Provider>

      <Footer />
    </div>
  );
}

export default App;