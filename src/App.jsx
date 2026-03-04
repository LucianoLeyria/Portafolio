import './App.css';
import { useColorMode } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Tecnologies } from './components/Tecnologies';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { BackToTopButton } from './components/BackToTopButton.jsx';
import { Loading } from './components/Loading';
import { useEffect, useState } from 'react';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: isDark
          ? 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(34,211,238,0.06) 0%, transparent 60%), #0d0f1a'
          : 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(34,211,238,0.05) 0%, transparent 60%), #f8fafc',
        color: isDark ? '#f1f5f9' : '#0f172a',
        fontFamily: "'Inter', sans-serif",
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
    >
      <Navbar isDark={isDark} toggleColorMode={toggleColorMode} />
      <main>
        <Header />
        <Tecnologies />
        <Profile />
        <Contact />
      </main>
      <BackToTopButton />
    </div>
  );
}

export default App;
