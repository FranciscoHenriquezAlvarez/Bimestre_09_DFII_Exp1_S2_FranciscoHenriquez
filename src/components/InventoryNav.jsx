import { NavLink } from 'react-router-dom';

function InventoryNav() {
  return (
    <nav className="inventory-nav flex flex-wrap items-center justify-start gap-3" aria-label="Gestión de inventario">
      <NavLink to="/agregar-producto" className={({ isActive }) => `inventory-nav-link rounded-lg px-4 py-2 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700${isActive ? ' active' : ''}`}>
        Agregar producto
      </NavLink>
      <NavLink to="/inventario" className={({ isActive }) => `inventory-nav-link rounded-lg px-4 py-2 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700${isActive ? ' active' : ''}`}>
        Ver inventario
      </NavLink>
    </nav>
  );
}

export default InventoryNav;
