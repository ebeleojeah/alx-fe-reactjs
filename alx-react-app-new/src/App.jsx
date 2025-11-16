import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/counter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />

      {/* Example user profiles */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="John" age="30" bio="Enjoys coding and traveling" />

      <Counter /> {/* This will now work! */}

      <Footer />
    </div>
  );
}

export default App;