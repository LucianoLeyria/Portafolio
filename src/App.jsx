import './App.css';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Tecnologies } from './components/Tecnologies';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { Reveal } from './components/Reveal';
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
        position: 'relative',
        color: '#f1f5f9',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Header />
          <Reveal>
            <Tecnologies />
          </Reveal>
          <Reveal>
            <Profile />
          </Reveal>
          <Reveal>
            <Contact />
          </Reveal>
        </main>
        <BackToTopButton />
      </div>
    </div>
  );
}

export default App;
