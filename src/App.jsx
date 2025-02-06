import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [view, setView] = useState('home');
  const [token, setToken] = useState(false);

  const handleNavigation = (page) => {
    setView(page);
  };

  const handleLogin = () => {
    setToken(true);        // Marcar al usuario como autenticado
    setView('home');       // Redirigir al Home después del login o registro exitoso
  };

  const handleLogout = () => {
    setToken(false);
    setView('home');       // Volver al Home al cerrar sesión
  };

  return (
    <div>
      <Navbar
        onNavigate={handleNavigation}
        token={token}
        onLoginLogout={handleLogout}
      />

      {view === 'home' && <Home />}
      {view === 'login' && <Login onLoginSuccess={handleLogin} />}
      {view === 'register' && <Register onRegisterSuccess={handleLogin} />}

      <Footer />
    </div>
  );
}

export default App;
