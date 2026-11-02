function ProductCard({ producto }) {
  return (
    <article className="producto-card rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="producto-icono" aria-hidden="true">{producto.icono || '🛒'}</div>
      <h3>{producto.nombre}</h3>
      <p className="producto-categoria">{producto.categoria}</p>
      <p className="producto-precio">${producto.precio.toLocaleString('es-CL')}</p>
      <p className="producto-stock">Stock disponible: {producto.stock}</p>
    </article>
  );
}

export default ProductCard;
