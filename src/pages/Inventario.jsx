import { useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

function Inventario() {
  const inventario = useContext(InventoryContext);
  if (!inventario) throw new Error('Inventario debe estar dentro de InventoryProvider');

  const { productos } = inventario;

  return (
    <section className="gestion-pagina mx-auto w-full max-w-5xl">
      <h1>Inventario de productos</h1>
      <p>Consulta los {productos.length} artículos registrados en SuperAhorro.</p>
      <div className="tabla-contenedor overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="tabla-inventario w-full min-w-[580px] border-collapse text-left text-sm sm:text-base">
          <caption className="tabla-caption">Listado actualizado de artículos disponibles</caption>
          <thead>
            <tr><th scope="col">Producto</th><th scope="col">Marca</th><th scope="col">Tipo</th><th scope="col">Precio</th><th scope="col">Stock</th></tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.marca}</td>
                <td>{producto.categoria}</td>
                <td>${producto.precio.toLocaleString('es-CL')}</td>
                <td>{producto.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Inventario;
