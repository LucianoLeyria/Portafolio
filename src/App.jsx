import './App.css';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Tecnologies } from './components/Tecnologies';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { BackToTopButton } from './components/BackToTopButton.jsx';
import { Loading } from './components/Loading';
import { useEffect, useState } from 'react';

// El portfolio usa un único tema oscuro (todo el diseño —glass, gradientes,
// glows— está construido para dark). No hay toggle de modo claro.
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(34,211,238,0.10) 0%, transparent 55%),' +
          'radial-gradient(ellipse 70% 60% at 85% 20%, rgba(168,85,247,0.08) 0%, transparent 55%),' +
          '#0d0f1a',
        color: '#f1f5f9',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Navbar />
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
