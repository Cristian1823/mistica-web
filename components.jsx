// ==========================================
// Mística — Shared components
// ==========================================

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ---------- Icons ----------
const Icon = ({ name, size = 18, stroke = 1.5 }) => {
  const paths = {
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
    bag: <><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
    heart: <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></>,
    arrowSm: <><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></>,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    minus: <><path d="M5 12h14" /></>,
    check: <path d="m5 12 4 4 10-11" />,
    truck: <><path d="M3 6h12v9H3z" /><path d="M15 9h4l2 3v3h-6" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></>,
    shield: <><path d="M12 3 4 6v7c0 4 3.5 7 8 8 4.5-1 8-4 8-8V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
    sparkle: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></>,
    leaf: <path d="M5 19c0-8 4-14 14-14 0 8-4 14-14 14Zm0 0 7-7" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" /></>,
    facebook: <path d="M14 9V7a1 1 0 0 1 1-1h2V3h-3a4 4 0 0 0-4 4v2H8v3h2v8h3v-8h2.5l.5-3H13" />,
    tiktok: <path d="M9 4h3v9.5a2.5 2.5 0 1 1-2.5-2.5h.5V8.5a5 5 0 1 0 5 5V8.5a4 4 0 0 0 4 4V9.5a3 3 0 0 1-3-3V4h-7Z" />,
    whatsapp: <path d="M3 21l1.65-4.5A8 8 0 1 1 7.5 19.35L3 21Z M9 9c0 4 3 7 7 7l1.5-1.5-2-1-1 1c-1.5-.5-3-2-3.5-3.5l1-1-1-2L9.5 7.5C9.2 8 9 8.5 9 9Z" />,
    star: <path d="m12 3 2.6 6 6.4.5-5 4.2 1.6 6.3L12 16.5 6.4 20l1.6-6.3-5-4.2 6.4-.5L12 3Z" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
    chevronLeft: <path d="m15 6-6 6 6 6" />,
    cart: <><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /><path d="M3 4h2l2 12h12l2-8H6" /></>,
    eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
    flame: <path d="M12 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-3 2-4 3-7 1 1 2 2 2 4 1-1 2-3 0-8Z" />,
    swatch: <><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" /></>,
    refresh: <><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth={stroke}
         strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

// ---------- Product placeholder (SVG illustration as image stand-in) ----------
const Placeholder = ({ ph, label, className = "" }) => {
  const style = {
    "--ph-bg": ph?.bg || "#d9c7af",
    "--ph-a": ph?.a || "#f0dcc0",
    "--ph-b": ph?.b || "#9a6f43",
  };
  return (
    <div className={`ph ${className}`} style={style}>
      <div className="ph__bg" />
      <ProductShape kind={ph?.shape} />
      {label && (
        <span className="ph__label" style={{
          color: ph?.labelLight ? "rgba(243,236,225,0.7)" : "rgba(26,20,16,0.45)"
        }}>
          {label}
        </span>
      )}
    </div>
  );
};

const ProductShape = ({ kind = "bag-tote" }) => {
  const size = 180;
  // Simple, abstract product silhouettes — kept geometric on purpose (placeholders for real photography)
  const shapes = {
    "bag-tote": (
      <svg viewBox="0 0 200 240" width={size} height={size * 1.2} style={{ filter:"drop-shadow(0 20px 30px rgba(26,20,16,0.18))" }}>
        <path d="M40 80 L160 80 L170 220 L30 220 Z" fill="rgba(26,20,16,0.85)" />
        <path d="M70 80 C70 50 90 35 100 35 C110 35 130 50 130 80" stroke="rgba(26,20,16,0.85)" strokeWidth="6" fill="none" />
        <circle cx="100" cy="150" r="4" fill="#c9a574" />
        <rect x="85" y="170" width="30" height="12" fill="#c9a574" opacity="0.4" />
      </svg>
    ),
    "bag-cross": (
      <svg viewBox="0 0 200 240" width={size} height={size * 1.1} style={{ filter:"drop-shadow(0 20px 30px rgba(26,20,16,0.18))" }}>
        <path d="M50 100 L150 100 L155 200 L45 200 Z" fill="rgba(26,20,16,0.85)" />
        <path d="M50 100 C30 70 100 30 170 60" stroke="#c9a574" strokeWidth="3" fill="none" />
        <rect x="90" y="135" width="20" height="15" rx="2" fill="#c9a574" />
      </svg>
    ),
    "bag-clutch": (
      <svg viewBox="0 0 220 140" width={size * 1.2} height={size * 0.8} style={{ filter:"drop-shadow(0 20px 30px rgba(26,20,16,0.18))" }}>
        <rect x="20" y="20" width="180" height="100" rx="6" fill="rgba(243,236,225,0.95)" />
        <rect x="20" y="20" width="180" height="35" fill="#c9a574" />
        <circle cx="110" cy="38" r="4" fill="rgba(26,20,16,0.8)" />
      </svg>
    ),
    "bag-back": (
      <svg viewBox="0 0 200 240" width={size} height={size * 1.2} style={{ filter:"drop-shadow(0 20px 30px rgba(26,20,16,0.18))" }}>
        <rect x="40" y="60" width="120" height="160" rx="14" fill="rgba(26,20,16,0.85)" />
        <rect x="60" y="40" width="80" height="30" rx="8" fill="rgba(26,20,16,0.85)" />
        <path d="M60 60 C60 30 80 20 100 20 C120 20 140 30 140 60" stroke="rgba(26,20,16,0.85)" strokeWidth="5" fill="none" />
        <rect x="60" y="120" width="80" height="6" fill="#c9a574" />
        <circle cx="100" cy="170" r="6" fill="#c9a574" />
      </svg>
    ),
    "bag-hobo": (
      <svg viewBox="0 0 220 220" width={size * 1.1} height={size * 1.1} style={{ filter:"drop-shadow(0 20px 30px rgba(26,20,16,0.18))" }}>
        <path d="M40 100 Q40 60 110 60 Q180 60 180 100 L160 200 L60 200 Z" fill="rgba(26,20,16,0.85)" />
        <path d="M60 90 Q60 30 110 30 Q160 30 160 90" stroke="rgba(26,20,16,0.85)" strokeWidth="5" fill="none" />
      </svg>
    ),
    "bag-mini": (
      <svg viewBox="0 0 200 200" width={size} height={size} style={{ filter:"drop-shadow(0 20px 30px rgba(26,20,16,0.18))" }}>
        <rect x="50" y="70" width="100" height="80" rx="8" fill="rgba(26,20,16,0.85)" />
        <path d="M70 70 C70 40 130 40 130 70" stroke="#c9a574" strokeWidth="3" fill="none" strokeDasharray="3,3" />
        <rect x="90" y="100" width="20" height="6" fill="#c9a574" />
      </svg>
    ),
    "wallet": (
      <svg viewBox="0 0 220 140" width={size * 1.2} height={size * 0.7} style={{ filter:"drop-shadow(0 20px 30px rgba(26,20,16,0.18))" }}>
        <rect x="30" y="30" width="160" height="80" rx="4" fill="rgba(26,20,16,0.85)" />
        <rect x="40" y="40" width="50" height="30" rx="2" fill="#c9a574" opacity="0.5" />
        <circle cx="160" cy="70" r="8" fill="#c9a574" />
      </svg>
    ),
    "perfume-square": (
      <svg viewBox="0 0 200 260" width={size} height={size * 1.3} style={{ filter:"drop-shadow(0 25px 35px rgba(26,20,16,0.22))" }}>
        <rect x="60" y="40" width="80" height="20" fill="#c9a574" />
        <rect x="70" y="60" width="60" height="10" fill="rgba(26,20,16,0.6)" />
        <rect x="50" y="70" width="100" height="160" rx="8" fill="rgba(243,236,225,0.85)" stroke="rgba(26,20,16,0.2)" />
        <rect x="65" y="130" width="70" height="50" fill="rgba(255,255,255,0.5)" />
        <text x="100" y="160" textAnchor="middle" fontFamily="serif" fontSize="14" fill="rgba(26,20,16,0.6)" fontStyle="italic">M</text>
      </svg>
    ),
    "perfume-tall": (
      <svg viewBox="0 0 180 280" width={size * 0.9} height={size * 1.4} style={{ filter:"drop-shadow(0 25px 35px rgba(26,20,16,0.22))" }}>
        <rect x="70" y="20" width="40" height="30" fill="#c9a574" />
        <rect x="80" y="50" width="20" height="20" fill="rgba(243,236,225,0.6)" />
        <rect x="50" y="70" width="80" height="190" rx="6" fill="rgba(26,20,16,0.5)" stroke="#c9a574" strokeWidth="1" />
        <rect x="60" y="140" width="60" height="60" fill="rgba(201,165,116,0.2)" />
        <text x="90" y="180" textAnchor="middle" fontFamily="serif" fontSize="16" fill="#c9a574" fontStyle="italic">M</text>
      </svg>
    ),
    "perfume-round": (
      <svg viewBox="0 0 220 260" width={size * 1.1} height={size * 1.3} style={{ filter:"drop-shadow(0 25px 35px rgba(26,20,16,0.22))" }}>
        <rect x="90" y="30" width="40" height="20" fill="#c9a574" />
        <rect x="95" y="50" width="30" height="15" fill="rgba(26,20,16,0.5)" />
        <ellipse cx="110" cy="160" rx="80" ry="90" fill="rgba(243,236,225,0.9)" stroke="rgba(26,20,16,0.2)" />
        <ellipse cx="110" cy="160" rx="55" ry="65" fill="rgba(255,255,255,0.3)" />
        <text x="110" y="170" textAnchor="middle" fontFamily="serif" fontSize="22" fill="rgba(26,20,16,0.5)" fontStyle="italic">Mística</text>
      </svg>
    ),
  };
  return shapes[kind] || shapes["bag-tote"];
};

// ---------- Logo ----------
const Logo = ({ palette = "gold", size = "md" }) => {
  const h = size === "lg" ? 180 : size === "sm" ? 100 : 160;
  const src = palette === "noir" ? "logos/transparente.jpeg" : "logos/logo.png";
  return (
    <img src={src} alt="Mística" height={h} style={{ display:"block", width:"auto" }} />
  );
};

// ---------- Header ----------
const Header = ({ route, setRoute, cartCount, openCart, openSearch, favoritesCount, palette }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { setMobileOpen(false); }, [route]);

  const isOn = (r) => route.name === r ? "nav__link is-active" : "nav__link";

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <nav className="nav__left">
            <a className={isOn("home")} onClick={() => setRoute({ name:"home" })}>Inicio</a>
            <a className={isOn("catalog") + (route.cat === "bolsos" ? " is-active" : "")}
               onClick={() => setRoute({ name:"catalog", cat:"bolsos" })}>Bolsos</a>
            <a className={isOn("catalog") + (route.cat === "perfumes" ? " is-active" : "")}
               onClick={() => setRoute({ name:"catalog", cat:"perfumes" })}>Perfumes</a>
            <a className="nav__link" onClick={() => setRoute({ name:"home", scrollTo:"story" })}>Historia</a>
          </nav>
          <a className="nav__logo-center" onClick={() => setRoute({ name:"home" })}>
            <Logo palette={palette} />
          </a>
          <div className="nav__right">
            <button className="nav__icon-btn" onClick={openSearch} aria-label="Buscar">
              <Icon name="search" />
            </button>
            <button className="nav__icon-btn" onClick={() => setRoute({ name:"favorites" })} aria-label="Favoritos">
              <Icon name="heart" />
              {favoritesCount > 0 && <span className="nav__cart-count">{favoritesCount}</span>}
            </button>
            <button className="nav__icon-btn" onClick={openCart} aria-label="Carrito">
              <Icon name="bag" />
              {cartCount > 0 && <span className="nav__cart-count">{cartCount}</span>}
            </button>
            <button className="nav__mobile-toggle" onClick={() => setMobileOpen(true)} aria-label="Menú">
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "is-open" : ""}`}>
        <button className="mobile-menu__close nav__icon-btn" onClick={() => setMobileOpen(false)}>
          <Icon name="close" />
        </button>
        <a className="mobile-menu__link" onClick={() => setRoute({ name:"home" })}>Inicio</a>
        <a className="mobile-menu__link" onClick={() => setRoute({ name:"catalog", cat:"bolsos" })}>Bolsos</a>
        <a className="mobile-menu__link" onClick={() => setRoute({ name:"catalog", cat:"perfumes" })}>Perfumes</a>
        <a className="mobile-menu__link" onClick={() => setRoute({ name:"home", scrollTo:"story" })}>Nuestra historia</a>
        <a className="mobile-menu__link" onClick={() => setRoute({ name:"favorites" })}>Favoritos</a>
      </div>
    </>
  );
};

// ---------- Footer ----------
const Footer = ({ setRoute, palette }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div>
          <div className="footer__brand">
            <Logo palette={palette} size="sm" />
          </div>
          <p className="footer__copy">
            Una boutique femenina que combina elegancia con precios accesibles. Bolsos versátiles y fragancias auténticas para mujeres reales.
          </p>
        </div>
        <div>
          <div className="footer__head">Tienda</div>
          <div className="footer__list">
            <a onClick={() => setRoute({ name:"catalog", cat:"bolsos" })}>Bolsos</a>
            <a onClick={() => setRoute({ name:"catalog", cat:"perfumes" })}>Perfumes</a>
            <a onClick={() => setRoute({ name:"catalog", cat:"bolsos", filter:"Bestseller" })}>Más vendidos</a>
            <a onClick={() => setRoute({ name:"catalog", cat:"bolsos", filter:"Nuevo" })}>Novedades</a>
          </div>
        </div>
        <div>
          <div className="footer__head">Marca</div>
          <div className="footer__list">
            <a onClick={() => setRoute({ name:"home", scrollTo:"story" })}>Nuestra historia</a>
            <a>Sostenibilidad</a>
            <a>Embajadoras</a>
            <a>Blog</a>
          </div>
        </div>
        <div>
          <div className="footer__head">Ayuda</div>
          <div className="footer__list">
            <a>Envíos</a>
            <a>Devoluciones</a>
            <a>Cuidado del producto</a>
            <a>Contacto</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Mística — Hecho con cuidado en Colombia</span>
        <div className="footer__socials">
          <a className="footer__social"><Icon name="instagram" size={16} /></a>
          <a className="footer__social"><Icon name="tiktok" size={16} /></a>
          <a className="footer__social"><Icon name="facebook" size={16} /></a>
          <a className="footer__social"><Icon name="whatsapp" size={16} /></a>
        </div>
      </div>
    </div>
  </footer>
);

// ---------- Product card ----------
const ProductCard = ({ product, onOpen, onAdd, isFav, onToggleFav }) => {
  const handleFav = (e) => { e.stopPropagation(); onToggleFav(product.id); };
  const handleQuick = (e) => { e.stopPropagation(); onAdd(product); };
  return (
    <div className="product" onClick={() => onOpen(product)}>
      <div className="product__media">
        {product.img
          ? <img className="product__img" src={product.img} alt={product.name} />
          : <Placeholder ph={product.ph} label={`${product.category || product.categoryKey || "Mística"} · ${product.name}`} />
        }
        {product.badge && (
          <span className={`product__badge ${product.badge.includes("%") || product.badge === "Bestseller" ? "product__badge--gold" : ""}`}>
            {product.badge}
          </span>
        )}
        <button className={`product__fav ${isFav ? "is-on" : ""}`} onClick={handleFav} aria-label="Favorito">
          <Icon name="heart" size={16} />
        </button>
        <button className="product__quick" onClick={handleQuick}>Agregar al carrito</button>
      </div>
      <div className="product__cat">{product.category || (product.categoryKey === "bolsos" ? "Bolsos" : "Perfumes")}</div>
      <div className="product__name">{product.name}</div>
      <div className="product__price-row">
        <span className="product__price">{window.formatPrice(product.price)}</span>
        {product.oldPrice && <span className="product__price--old">{window.formatPrice(product.oldPrice)}</span>}
        {product.oldPrice && (
          <span className="product__discount">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </span>
        )}
      </div>
    </div>
  );
};

// ---------- Cart drawer ----------
const CartDrawer = ({ open, onClose, items, updateQty, removeItem, total, onCheckout, setRoute }) => (
  <>
    <div className={`drawer-bg ${open ? "is-open" : ""}`} onClick={onClose}></div>
    <aside className={`drawer ${open ? "is-open" : ""}`}>
      <div className="drawer__head">
        <div className="drawer__title">Tu bolsa</div>
        <button className="nav__icon-btn" onClick={onClose}><Icon name="close" /></button>
      </div>
      <div className="drawer__body">
        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty__icon"><Icon name="bag" size={28} /></div>
            <p style={{ fontFamily:"var(--font-serif)", fontSize:24, marginBottom:8 }}>Aún está vacía</p>
            <p style={{ color:"var(--fg-mute)", fontSize:14, marginBottom:24 }}>
              Descubre los favoritos de la temporada.
            </p>
            <button className="btn btn--gold" onClick={() => { onClose(); setRoute({ name:"catalog", cat:"bolsos" }); }}>
              Explorar bolsos
            </button>
          </div>
        ) : (
          items.map((item, i) => (
            <div className="cart-item" key={item.key}>
              <div className="cart-item__media">
                {item.img ? <img src={item.img} alt={item.name} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"var(--r-sm)"}} /> : <Placeholder ph={item.ph} />}
              </div>
              <div>
                <div className="cart-item__cat">{item.category || (item.categoryKey === "bolsos" ? "Bolsos" : "Perfumes")}</div>
                <div className="cart-item__name">{item.name}</div>
                {(item.size || item.color) && (
                  <div className="cart-item__opts">
                    {[item.size, item.color?.name].filter(Boolean).join(" · ")}
                  </div>
                )}
                <div className="cart-item__qty">
                  <button onClick={() => updateQty(item.key, -1)}><Icon name="minus" size={12} /></button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.key, 1)}><Icon name="plus" size={12} /></button>
                </div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div className="cart-item__price">{window.formatPrice(item.price * item.qty)}</div>
                <a className="cart-item__remove" onClick={() => removeItem(item.key)}>Quitar</a>
              </div>
            </div>
          ))
        )}
      </div>
      {items.length > 0 && (
        <div className="drawer__foot">
          <div className="cart-total"><span>Subtotal</span><span>{window.formatPrice(total)}</span></div>
          <div className="cart-total"><span>Envío</span><span style={{ color:"var(--accent-deep)" }}>Calculado al pagar</span></div>
          <div className="cart-total cart-total--big"><span>Total</span><span>{window.formatPrice(total)}</span></div>
          <button className="btn btn--primary btn--lg" style={{ width:"100%", justifyContent:"center", marginBottom:8 }} onClick={onCheckout}>
            <Icon name="whatsapp" size={16} />
            Finalizar por WhatsApp
          </button>
          <p style={{ fontSize:12, color:"var(--fg-mute)", textAlign:"center" }}>
            Recibimos transferencia, Nequi y contraentrega
          </p>
        </div>
      )}
    </aside>
  </>
);

// ---------- Search overlay ----------
const SearchOverlay = ({ open, onClose, products, onOpenProduct }) => {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQ("");
    }
  }, [open]);
  const results = useMemo(() => {
    if (!q.trim()) return products.slice(0, 4);
    const ql = q.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(ql) ||
      p.sub?.toLowerCase().includes(ql) ||
      p.category?.toLowerCase().includes(ql)
    );
  }, [q, products]);
  return (
    <div className={`search-overlay ${open ? "is-open" : ""}`}>
      <button className="search-overlay__close" onClick={onClose}><Icon name="close" /></button>
      <div className="search-overlay__inner">
        <div style={{ fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--fg-mute)", marginBottom:16 }}>
          ¿Qué buscas hoy?
        </div>
        <input
          ref={inputRef}
          className="search-overlay__input"
          placeholder="Bolsos, perfumes, novedades..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="search-results">
          {q && results.length === 0 && (
            <p style={{ padding:32, textAlign:"center", color:"var(--fg-mute)" }}>Sin resultados para "{q}"</p>
          )}
          {results.map(p => (
            <div className="search-result" key={p.id} onClick={() => { onOpenProduct(p); onClose(); }}>
              <div className="search-result__media">
                {p.img ? <img src={p.img} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"var(--r-sm)"}} /> : <Placeholder ph={p.ph} />}
              </div>
              <div>
                <div style={{ fontFamily:"var(--font-serif)", fontSize:18 }}>{p.name}</div>
                <div style={{ fontSize:12, color:"var(--fg-mute)" }}>{p.sub}</div>
              </div>
              <div style={{ fontWeight:500 }}>{window.formatPrice(p.price)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ---------- WhatsApp FAB ----------
const WhatsAppFab = ({ phone = "573001112233" }) => (
  <a className="wa-fab" href={`https://wa.me/${phone}?text=${encodeURIComponent("¡Hola! Quisiera más información sobre Mística.")}`} target="_blank" rel="noopener">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Burbuja de chat con cola */}
      <path fill="rgba(26,20,16,0.18)" d="M12 3C7.03 3 3 7.03 3 12c0 1.6.41 3.1 1.13 4.4L3 21l4.72-1.24A9 9 0 1 0 12 3z"/>
      {/* Teléfono interno en crema */}
      <path fill="#f3ece1" d="M15.9 14.4c-.18-.09-1.08-.53-1.25-.59-.17-.06-.29-.09-.41.09-.12.18-.47.59-.58.71-.1.12-.21.14-.39.05-.18-.09-.76-.28-1.45-.89-.54-.48-.9-1.07-1-1.25-.1-.18-.01-.27.08-.36.08-.08.18-.2.27-.31.09-.1.12-.18.18-.3.06-.11.03-.22-.01-.31-.04-.09-.41-.99-.56-1.35-.15-.36-.3-.31-.41-.31-.1 0-.23-.01-.35-.01s-.32.04-.49.22c-.17.18-.64.63-.64 1.53s.66 1.77.75 1.9c.09.12 1.29 1.97 3.13 2.76.44.19.78.3 1.04.38.44.14.84.12 1.15.07.35-.05 1.08-.44 1.24-.87.15-.43.15-.79.1-.87-.04-.08-.16-.12-.34-.21z"/>
    </svg>
    <span className="wa-fab__tooltip">¿Deseas hacer un pedido?</span>
  </a>
);

// ---------- Toast ----------
const Toast = ({ msg, show }) => (
  <div className={`toast ${show ? "is-show" : ""}`}>
    <div className="toast__icon"><Icon name="check" size={16} stroke={2.5} /></div>
    {msg}
  </div>
);

// ---------- Mobile Bottom Navigation ----------
const MobileBottomNav = ({ route, setRoute, cartCount, favoritesCount, openCart }) => (
  <nav className="mobile-bottom-nav">
    <button
      className={`mobile-bottom-nav__item ${route.name === "home" ? "is-active" : ""}`}
      onClick={() => setRoute({ name: "home" })}
    >
      <Icon name="sparkle" size={20} stroke={1.5} />
      <span className="mobile-bottom-nav__label">Inicio</span>
    </button>
    <button
      className={`mobile-bottom-nav__item ${route.name === "catalog" ? "is-active" : ""}`}
      onClick={() => setRoute({ name: "catalog", cat: "bolsos" })}
    >
      <Icon name="swatch" size={20} stroke={1.5} />
      <span className="mobile-bottom-nav__label">Catálogo</span>
    </button>
    <button
      className={`mobile-bottom-nav__item ${route.name === "favorites" ? "is-active" : ""}`}
      onClick={() => setRoute({ name: "favorites" })}
    >
      <Icon name="heart" size={20} stroke={1.5} />
      <span className="mobile-bottom-nav__label">Favoritos</span>
      {favoritesCount > 0 && <span className="mobile-bottom-nav__badge">{favoritesCount}</span>}
    </button>
    <button
      className="mobile-bottom-nav__item"
      onClick={openCart}
    >
      <Icon name="bag" size={20} stroke={1.5} />
      <span className="mobile-bottom-nav__label">Carrito</span>
      {cartCount > 0 && <span className="mobile-bottom-nav__badge">{cartCount}</span>}
    </button>
  </nav>
);

Object.assign(window, {
  Icon, Placeholder, ProductShape, Logo, Header, Footer,
  ProductCard, CartDrawer, SearchOverlay, WhatsAppFab, Toast, MobileBottomNav,
});
