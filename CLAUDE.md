# Mística — Guía del proyecto

## Producción

**URL:** https://www.mistica.website (dominio principal)
**URL alternativa:** https://mistica-web-two.vercel.app
**Repositorio:** https://github.com/Cristian1823/mistica-web
**Hosting:** Vercel (conectado a GitHub — cada push a `main` redespliega automáticamente)
**Dominio:** `mistica.website` comprado en GoDaddy, conectado a Vercel via registro A (`216.198.79.1`) y CNAME www (`c975a8d25b624760.vercel-dns-017.com.`)

Boutique e-commerce colombiana de bolsos y perfumes femeninos. Frontend 100% estático, sin build process.

## Stack técnico

- **React 18** vía CDN (no hay npm, no hay bundler)
- **Babel Standalone** — transpila JSX en el navegador en tiempo real
- **CSS custom properties** para theming con 4 paletas: `gold`, `pink`, `cream`, `noir`
- Sin backend — los pedidos se cierran por WhatsApp

## Archivos principales

| Archivo | Rol |
|---|---|
| `index.html` | Entrada, carga CDNs y scripts en orden |
| `data.js` | Catálogo de productos (bolsos + perfumes), expone `window.MISTICA_DATA` |
| `app.jsx` | App root, rutas, carrito, favoritos, paletas |
| `components.jsx` | Header, Footer, InstagramBanner, ProductCard, CartDrawer, SearchOverlay, WhatsAppFab (chat FAQ), MobileBottomNav, Toast |
| `pages.jsx` | HomePage, CatalogPage, ProductPage, FavoritesPage, RelatedCarousel |
| `styles.css` | Design system completo con variables CSS |
| `tweaks-panel.jsx` | Panel lateral para cambiar paleta en vivo |

## Carpetas de imágenes

- `bolsos/` — fotos de productos de bolsos (WhatsApp Image...)
- `logos/` — `logo.png` (fondo transparente, temas claros), `transparente.jpeg` (noir)
- `principales/` — imágenes destacadas para los HeroCards del home. Incluye `bolso sin fondo.png` y `yara sin fondo.png` (PNG con transparencia, fondo negro removido con Pillow)
- `perfumes/` — fotos de los 10 perfumes reales (Yara Fucsia, Yara Beige, Yara Café, La Bomba, Ariana Grande, Burberry, Good Girl Negro/Rosa/Azul/Roja)

## Diseño — decisiones clave

- **Logo circular** — el círculo `.nav__logo-center` cubre la línea del nav creando efecto de integración. En móvil se reduce a 110px, en escritorio 176px.
- **Línea del nav** — glow via `::after` con `var(--accent)`, cambia de color con cada paleta
- **HeroCards** — primera tarjeta horizontal (ancho completo), las otras dos debajo. En móvil deslizan horizontalmente (scroll snap). Usan `imgContain` para imágenes PNG sin fondo.
- **Chat FAQ (WhatsAppFab)** — burbuja flotante dorada. Al hacer clic abre un panel con flujo: saludo de "Mistic" → botón Adelante → 5 preguntas frecuentes → respuesta + botón a WhatsApp. Las preguntas están en `FAQ_ITEMS` en `components.jsx`.
- **Mobile Bottom Nav** — barra fija inferior en móvil (≤640px) con Inicio, Catálogo, Favoritos, Carrito.
- **Instagram Banner** — franja oscura sobre el footer con ícono de Instagram como hipervínculo a `@mistica_bylc`.
- **Carrusel "Completa el look"** — en PDP, desliza productos relacionados. 220px por tarjeta, 3 visibles en escritorio.

## Routing

Manejado con estado React, no hay URLs reales. Rutas: `home`, `catalog`, `product`, `favorites`.

## Theming

Las 4 paletas se definen en `app.jsx > PALETTES` y se aplican como variables CSS en `:root` vía `applyPalette()`. Todos los componentes deben usar `var(--bg)`, `var(--accent)`, etc., nunca colores hardcodeados.

## Checkout actual

El carrito genera un mensaje formateado y abre `https://wa.me/573133265915`. El número real está en `app.jsx > checkout()` y en `components.jsx > WhatsAppFab` (default prop `phone`).

---

## Pendiente: Pasarela de pagos

### Decisión tomada
- **Proveedor:** Wompi (Bancolombia) o MercadoPago — sin cuota mensual, solo comisión por transacción (~2.9–3.3% + $900 COP)
- **Backend:** Vercel Functions o Netlify Functions — serverless, gratuito, siempre activo (sin cold start), suficiente para el volumen de la boutique

### Por qué no Render free tier
Render free se duerme entre peticiones. Un webhook de confirmación de pago que llega durante un cold start puede perderse. Las Functions serverless no tienen este problema.

### Arquitectura planeada

```
Cliente paga en pasarela (Wompi/MercadoPago)
        ↓
Pasarela envía webhook POST /api/confirmar-pago
        ↓
Vercel/Netlify Function valida firma del webhook
        ↓
Marca pedido como pagado (DB o notificación)
        ↓
Redirige al cliente a página de éxito
```

### Pasos de implementación (cuando se retome)
1. Crear cuenta en Wompi y obtener llaves públicas/privadas
2. ~~Mover el sitio a Vercel~~ — **ya está en Vercel** (https://www.mistica.website)
3. Crear `/api/webhook.js` — Function que valida firma HMAC del webhook
4. Crear `/api/crear-pago.js` — Function que genera la sesión de pago
5. Reemplazar el botón "Finalizar por WhatsApp" en `CartDrawer` por el flujo de pago
6. Mantener WhatsApp como canal de soporte, no de cobro

### Seguridad mínima requerida
- HTTPS obligatorio (Vercel/Netlify lo dan automático)
- Validar firma HMAC en cada webhook (nunca confiar solo en el payload)
- Nunca procesar confirmaciones desde el frontend (solo desde la Function)
- No almacenar números de tarjeta — la pasarela lo maneja, tú nunca los ves

---

## Sección Newsletter (desactivada — reactivar cuando se conecte Formspree o Mailchimp)

Pegar este bloque en `pages.jsx` dentro de `HomePage`, justo antes del cierre `</div>` final de la página (antes de `);`):

```jsx
{/* NEWSLETTER */}
<section className="news">
  <div style={{ fontFamily:"var(--font-serif)", fontStyle:"italic", color:"var(--accent)", marginBottom:16, fontSize:18 }}>✦ Comunidad Mística ✦</div>
  <h2 className="news__title">Sé la primera en <em>conocer las novedades.</em></h2>
  <p className="news__sub">
    15% off en tu primera compra + acceso anticipado a lanzamientos y promos exclusivas. Sin spam, solo cosas bonitas.
  </p>
  <form className="news__form" onSubmit={(e) => { e.preventDefault(); alert("¡Bienvenida a la familia Mística! Revisa tu correo."); }}>
    <input type="email" placeholder="tu@correo.com" className="news__input" required />
    <button className="btn btn--gold">Suscribirme</button>
  </form>
</section>
```

Para activar de verdad: reemplazar el `onSubmit` con un POST a Formspree (`https://formspree.io/f/XXXXXX`) o al endpoint de Mailchimp. Ver sección de integraciones pendientes.
