import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InventoryContext } from '../context/InventoryContext';
import { mismaReferencia } from '../context/inventoryUtils';

const formularioInicial = {
  nombre: '', marca: '', categoria: '', precio: '', stock: ''
};

function AgregarProducto() {
  const inventario = useContext(InventoryContext);
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState(formularioInicial);
  const [error, setError] = useState('');
  const existente = inventario?.productos.find((p) => mismaReferencia(p, formulario));

  if (!inventario) throw new Error('AgregarProducto debe estar dentro de InventoryProvider');

  function actualizarCampo(evento) {
    const { name, value } = evento.target;
    setFormulario((actual) => ({ ...actual, [name]: value }));
    setError('');
  }

  function guardarProducto(evento) {
    evento.preventDefault();
    const nombre = formulario.nombre.trim();
    const marca = formulario.marca.trim();
    const categoria = formulario.categoria.trim();
    if (existente) {
      const cantidad = Number(formulario.stock);
      if (formulario.stock === '' || !Number.isSafeInteger(cantidad) || cantidad <= 0) {
        setError('Ingresa una cantidad entera mayor que cero para aumentar el stock.');
        return;
      }
      inventario.aumentarStock(existente.id, cantidad);
      setFormulario(formularioInicial);
      navigate('/inventario');
      return;
    }
    const precio = Number(formulario.precio);
    const stock = Number(formulario.stock);

    if (!nombre || !marca || !categoria || formulario.precio === '' || formulario.stock === '') {
      setError('Completa todos los campos para registrar el producto.');
      return;
    }
    if (!Number.isFinite(precio) || precio <= 0 || !Number.isSafeInteger(stock) || stock < 0) {
      setError('Ingresa un precio mayor que cero y un stock entero igual o mayor que cero.');
      return;
    }

    inventario.agregarProducto({ nombre, marca, categoria, precio, stock, icono: '🛒' });
    setFormulario(formularioInicial);
    navigate('/inventario');
  }

  return (
    <section className="gestion-pagina mx-auto w-full max-w-3xl">
      <h1>Agregar producto</h1>
      <p>Ingresa el nombre y la marca. Si el producto ya existe, podrás aumentar sus existencias sin duplicarlo.</p>
      <form className="producto-formulario rounded-xl border border-green-100 bg-white p-5 shadow-sm sm:p-8" onSubmit={guardarProducto}>
        <label htmlFor="nombre">Nombre del producto</label>
        <input className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" id="nombre" name="nombre" value={formulario.nombre} onChange={actualizarCampo} maxLength="80" required placeholder="Ej.: Harina 1 kg" />

        <label htmlFor="marca">Marca</label>
        <input className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" id="marca" name="marca" value={formulario.marca} onChange={actualizarCampo} maxLength="60" required placeholder="Ej.: Selecta" />

        {existente && (
          <div className="aviso-existente rounded-lg border border-amber-300 bg-amber-50 p-4" role="status" aria-live="polite">
            <strong>Este producto ya existe en el inventario.</strong>
            <p>{existente.nombre} — {existente.marca}</p>
            <p>Stock actual: <strong>{existente.stock} unidades</strong>.</p>
            <p>Indica abajo cuántas unidades adicionales deseas ingresar.</p>
          </div>
        )}

        {!existente && <>
        <label htmlFor="categoria">Tipo o categoría</label>
        <input className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" id="categoria" name="categoria" value={formulario.categoria} onChange={actualizarCampo} maxLength="60" required placeholder="Ej.: Abarrotes" />

        <label htmlFor="precio">Precio (CLP)</label>
        <input className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" id="precio" name="precio" type="number" min="1" step="1" value={formulario.precio} onChange={actualizarCampo} required placeholder="Ej.: 1490" />

        </>}

        <label htmlFor="stock">{existente ? 'Unidades adicionales' : 'Cantidad disponible'}</label>
        <input className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" id="stock" name="stock" type="number" min={existente ? "1" : "0"} step="1" value={formulario.stock} onChange={actualizarCampo} required placeholder="Ej.: 20" />

        {error && <p className="formulario-error" role="alert">{error}</p>}
        <button className="boton-guardar rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" type="submit">{existente ? "Aumentar stock" : "Guardar producto"}</button>
      </form>
    </section>
  );
}

export default AgregarProducto;
