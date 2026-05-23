# Mística — Sitio Web

Sitio e-commerce para Mística (bolsos y perfumes para dama).

## ¿Cómo usarlo?

### Opción 1: Abrir directamente
Solo abre `index.html` en cualquier navegador moderno (Chrome, Firefox, Safari, Edge).

### Opción 2: Servir con un servidor local (recomendado)
Algunos navegadores bloquean scripts locales por seguridad. Usa cualquier servidor:

```bash
# Con Python (ya viene instalado en Mac/Linux)
python3 -m http.server 8000

# O con Node.js
npx serve .

# O con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## Estructura de archivos

```
mistica-web/
├── index.html          # Página principal (punto de entrada)
├── styles.css          # Todos los estilos
├── data.js             # Catálogo de productos (edítalo para tus productos reales)
├── components.jsx      # Componentes reutilizables (Header, Footer, ProductCard, etc.)
├── pages.jsx           # Páginas (Home, Catálogo, Producto, Favoritos)
├── app.jsx             # Lógica principal, carrito, ruteo
├── tweaks-panel.jsx    # Panel de tweaks (puedes eliminarlo en producción)
└── README.md
```

## Personalización rápida

### Cambiar el número de WhatsApp
Busca `573001112233` en `app.jsx` y `components.jsx` y reemplázalo con tu número (formato internacional sin +).

### Cambiar productos
Edita `data.js`. Cada producto tiene:
- `id`, `name`, `sub`, `desc` (descripción)
- `price` (en COP), `oldPrice` (opcional, para mostrar descuento)
- `badge` (opcional: "Nuevo", "Bestseller", "-20%", etc.)
- `colors`, `sizes` (para bolsos y perfumes)
- `ph` (placeholder visual — cambia cuando tengas fotos reales)

### Reemplazar placeholders con fotos reales
En `components.jsx` busca `<Placeholder ...>` y reemplázalo por:
```jsx
<img src="ruta/a/tu-foto.jpg" alt="..." className="product__img" />
```

Asegúrate de tener una carpeta `images/` con las fotos.

### Colores de marca
Las paletas se definen en `app.jsx` (constante `PALETTES`).
Los tokens CSS están en `styles.css` (`:root { --gold, --ink, --cream... }`).

## Funcionalidades incluidas

- ✅ Catálogo con filtros y ordenamiento
- ✅ Carrito persistente (localStorage)
- ✅ Favoritos (localStorage)
- ✅ Búsqueda en vivo
- ✅ Ficha de producto con galería, color, tamaño, cantidad
- ✅ Checkout vía WhatsApp (genera mensaje con todo el pedido)
- ✅ Botón flotante de WhatsApp
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Newsletter (necesitarás conectar tu propio servicio: Mailchimp, ConvertKit, etc.)

## Stack técnico

- HTML + CSS puro
- React 18 (cargado desde CDN, sin build)
- Babel Standalone (transpila JSX en el navegador)
- LocalStorage para persistencia

> ⚠️ **Para producción real**: este setup funciona pero carga Babel en el cliente (más lento).
> Cuando estés listo para deploy, te recomiendo migrar a un proyecto con Vite o Next.js.

## Deploy gratis

- **Vercel**: arrastra la carpeta a vercel.com
- **Netlify**: arrastra a app.netlify.com/drop
- **GitHub Pages**: sube a un repo y actívalo en Settings

¡Listo! 💛
