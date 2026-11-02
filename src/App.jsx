import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import AgregarProducto from './pages/AgregarProducto';
import Inventario from './pages/Inventario';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import InventoryNav from './components/InventoryNav';
import './App.css';

function App() {
  return (
    <div className="app min-h-screen bg-[#f5f7f5]">
      <header className="header">
        <h1>SuperAhorro</h1>
        <p>Tu supermercado de confianza</p>
      </header>
      <div className="contenido mx-auto w-full max-w-6xl px-4 sm:px-6">
        <InventoryNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/agregar-producto" element={<AgregarProducto />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
