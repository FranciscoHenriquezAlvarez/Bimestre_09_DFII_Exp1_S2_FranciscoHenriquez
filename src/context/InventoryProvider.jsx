import { useEffect, useState } from 'react';
import { InventoryContext } from './InventoryContext';
import { mismaReferencia } from './inventoryUtils';

const productosIniciales = [
  { id: 1, nombre: 'Arroz 1 kg', marca: 'Tucapel', categoria: 'Abarrotes', precio: 1590, stock: 35, icono: '🍚' },
  { id: 2, nombre: 'Leche 1 L', marca: 'Colun', categoria: 'Lácteos', precio: 1290, stock: 48, icono: '🥛' },
  { id: 3, nombre: 'Aceite 900 ml', marca: 'Chef', categoria: 'Abarrotes', precio: 2490, stock: 22, icono: '🫒' },
  { id: 4, nombre: 'Manzanas 1 kg', marca: 'Sin marca', categoria: 'Frutas', precio: 1990, stock: 30, icono: '🍎' },
  { id: 5, nombre: 'Detergente 1 L', marca: 'Omo', categoria: 'Limpieza', precio: 3490, stock: 15, icono: '🧴' },
  { id: 6, nombre: 'Pan de molde', marca: 'Ideal', categoria: 'Panadería', precio: 2290, stock: 20, icono: '🍞' }
];

function consolidarDuplicados(lista) {
  const resultado = [];
  for (const producto of lista) {
    const indice = resultado.findIndex((actual) => mismaReferencia(actual, producto));
    if (indice === -1) resultado.push({ ...producto });
    else resultado[indice] = { ...resultado[indice], stock: resultado[indice].stock + producto.stock };
  }
  return resultado;
}

const CLAVE_INVENTARIO = 'superahorro-inventario-semana02';

function cargarProductos() {
  try {
    const guardados = localStorage.getItem(CLAVE_INVENTARIO);
    if (!guardados) return productosIniciales;
    const datos = JSON.parse(guardados);
    return Array.isArray(datos) && datos.every((p) =>
      p && (typeof p.id === 'string' || typeof p.id === 'number') &&
      typeof p.nombre === 'string' && typeof p.marca === 'string' &&
      typeof p.categoria === 'string' && Number.isFinite(p.precio) &&
      Number.isSafeInteger(p.stock) && p.stock >= 0
    ) ? consolidarDuplicados(datos) : productosIniciales;
  } catch {
    return productosIniciales;
  }
}

export default function InventoryProvider({ children }) {
  const [productos, setProductos] = useState(cargarProductos);

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_INVENTARIO, JSON.stringify(productos));
    } catch (error) {
      console.warn('No se pudo guardar el inventario localmente:', error);
    }
  }, [productos]);

  function agregarProducto(nuevoProducto) {
    setProductos((actuales) => {
      if (actuales.some((producto) => mismaReferencia(producto, nuevoProducto))) return actuales;
      return [...actuales, { ...nuevoProducto, id: crypto.randomUUID() }];
    });
  }

  function aumentarStock(id, cantidad) {
    if (!Number.isSafeInteger(cantidad) || cantidad <= 0) return;
    setProductos((actuales) => actuales.map((producto) =>
      producto.id === id ? { ...producto, stock: producto.stock + cantidad } : producto
    ));
  }

  return (
    <InventoryContext.Provider value={{ productos, agregarProducto, aumentarStock }}>
      {children}
    </InventoryContext.Provider>
  );
}
