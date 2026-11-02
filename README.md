# 🛒 SuperAhorro — Gestión de Inventario

**Desarrollo Frontend II (PFY2202)**  
**Bimestre 09 — Experiencia 1 — Semana 02**  

## 📋 Descripción del proyecto

SuperAhorro es una aplicación web desarrollada con React que simula un supermercado y permite administrar su inventario de productos.

El proyecto corresponde a la actividad formativa de la Semana 02, denominada **«Implementando gestión de estado en componentes frontend con React»**.

Esta versión continúa el trabajo realizado durante la Semana 01, incorporando nuevas páginas, navegación, gestión global de estados y estilos mediante Tailwind CSS.

## 🎯 Objetivos

- Implementar navegación entre páginas utilizando React Router.
- Administrar un inventario mediante React Context API.
- Compartir información entre componentes utilizando `useState` y `useContext`.
- Registrar productos mediante un formulario.
- Visualizar los artículos disponibles en una tabla.
- Utilizar Tailwind CSS para mejorar la interfaz.
- Mantener una aplicación adaptable a distintos tamaños de pantalla.

## 🚀 Funcionalidades

### 1. Inicio

Presenta el catálogo de productos del supermercado mediante tarjetas que muestran nombre, categoría, precio y stock disponible.

### 2. Quiénes somos

Contiene información general sobre SuperAhorro y su propósito como supermercado.

### 3. Contáctanos

Presenta información de contacto del supermercado.

### 4. Agregar producto

Permite registrar artículos indicando:

- Nombre del producto.
- Marca.
- Tipo o categoría.
- Precio.
- Cantidad disponible.

El formulario detecta productos existentes mediante la comparación del nombre y la marca.

Cuando identifica un producto registrado, muestra sus existencias actuales y permite aumentar el stock sin generar un registro duplicado.

### 5. Ver inventario

Presenta una tabla con los productos disponibles, incluyendo nombre, marca, tipo, precio y stock.

La información se actualiza automáticamente cuando se agregan productos o se modifican las existencias.

### 6. Página no encontrada (404)

Muestra una vista informativa cuando el usuario intenta acceder a una dirección no reconocida.

## 📦 Gestión del inventario

El inventario se administra mediante React Context API y el hook `useState`.

Los componentes acceden a los datos compartidos utilizando `useContext`.

La aplicación también incorpora:

- Detección de productos duplicados.
- Actualización de existencias.
- Consolidación de registros repetidos.
- Persistencia de datos mediante `localStorage`.
- Actualización automática de las vistas relacionadas con el inventario.

Los productos almacenados permanecen disponibles después de actualizar el navegador, mientras no se eliminen los datos locales del sitio.

## 🛠️ Tecnologías utilizadas

| Tecnología | Función |
|---|---|
| React | Construcción de componentes |
| Vite | Entorno de desarrollo y compilación |
| JavaScript | Lógica de la aplicación |
| React Router DOM | Navegación entre páginas |
| Context API | Gestión del estado global |
| useState | Administración del inventario |
| useContext | Acceso a información compartida |
| useEffect | Sincronización de datos |
| Tailwind CSS v4 | Estilos de interfaz |
| CSS | Estilos personalizados |
| localStorage | Persistencia local |
| Git y GitHub | Control de versiones |

## 💻 Instalación y ejecución

### Requisitos previos

- Node.js y npm instalados.
- Visual Studio Code u otro editor compatible.
- Navegador web actualizado.

### Clonar el repositorio

```bash
git clone https://github.com/FranciscoHenriquezAlvarez/Bimestre_09_DFII_Exp1_S2_FranciscoHenriquez.git
```

Ingresar a la carpeta del repositorio:

```bash
cd Bimestre_09_DFII_Exp1_S2_FranciscoHenriquez
```

### Instalar dependencias

```bash
npm install
```

### Iniciar el servidor

```bash
npm run dev
```

Abrir la dirección local indicada por Vite, normalmente:

`http://localhost:5173/`

## 🧪 Pruebas y validaciones

Se realizaron pruebas funcionales de navegación, registro de productos, detección de duplicados y actualización de existencias.

También se verificó la persistencia local del inventario.

### Revisión del código

```bash
npm run lint
```

**Resultado:** ejecución completada sin errores reportados.

### Compilación de producción

```bash
npm run build
```

**Resultado:** compilación completada correctamente con Vite 8.3.5.

La compilación genera la carpeta `dist`, que contiene los archivos preparados para producción.

## 📱 Diseño responsivo

SuperAhorro utiliza estilos CSS personalizados y clases de Tailwind CSS para adaptar la presentación de los componentes a diferentes tamaños de pantalla.

La aplicación conserva la identidad visual del proyecto original, utilizando tonos verdes, tarjetas de productos y menús de navegación.

## 📚 Relación con la actividad formativa

El proyecto implementa los requerimientos principales de la Semana 02:

1. Continuación del supermercado desarrollado en la Semana 01.
2. Incorporación de un nuevo menú.
3. Creación de dos páginas adicionales.
4. Implementación de gestión global de estados.
5. Registro de productos con nombre, marca y tipo.
6. Visualización de productos mediante una tabla.
7. Aplicación de un framework CSS.
8. Publicación del código fuente mediante GitHub.

## 🔗 Repositorio GitHub

[Bimestre_09_DFII_Exp1_S2_FranciscoHenriquez](https://github.com/FranciscoHenriquezAlvarez/Bimestre_09_DFII_Exp1_S2_FranciscoHenriquez)

