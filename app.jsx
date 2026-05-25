// ==========================================
// Mística — Main App
// ==========================================

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "gold"
}/*EDITMODE-END*/;

const PALETTES = {
  gold: {
    label: "Dorado Cálido",
    "--bg": "#f3ece1", "--bg-alt": "#e8dfd0",
    "--fg": "#1a1410", "--fg-soft": "#3a3128",
    "--accent": "#b8895a", "--accent-deep": "#9a6f43",
    "--on-dark": "#f3ece1",
  },
  pink: {
    label: "Rosa Polvo",
    "--bg": "#f7e8e2", "--bg-alt": "#efd9d0",
    "--fg": "#1a1410", "--fg-soft": "#3a3128",
    "--accent": "#c08a7e", "--accent-deep": "#9a6555",
    "--on-dark": "#f7e8e2",
  },
  cream: {
    label: "Crema Suave",
    "--bg": "#faf5ec", "--bg-alt": "#f0e8d8",
    "--fg": "#1a1410", "--fg-soft": "#3a3128",
    "--accent": "#c9a574", "--accent-deep": "#a68252",
    "--on-dark": "#faf5ec",
  },
  noir: {
    label: "Noir Lujoso",
    "--bg": "#1a1410", "--bg-alt": "#2a221c",
    "--fg": "#f3ece1", "--fg-soft": "#d4c8b8",
    "--accent": "#c9a574", "--accent-deep": "#d4b48a",
    "--on-dark": "#f3ece1",
  },
};

function applyPalette(key) {
  const p = PALETTES[key] || PALETTES.gold;
  const root = document.documentElement;
  Object.entries(p).forEach(([k, v]) => {
    if (k.startsWith("--")) root.style.setProperty(k, v);
  });
}

const App = () => {
  const [t, setTweak] = window.useTweaks
    ? window.useTweaks(TWEAK_DEFAULTS)
    : [TWEAK_DEFAULTS, () => {}];

  useEffect(() => { applyPalette(t.palette); }, [t.palette]);

  // Route: { name: "home" | "catalog" | "product" | "favorites", cat, id, filter, scrollTo }
  const [route, _setRoute] = useState({ name: "home" });
  const setRoute = (r) => {
    if (r.scrollTo) window.__pendingScroll = r.scrollTo;
    _setRoute(r);
    window.scrollTo({ top: 0, behavior: r.name === route.name ? "auto" : "smooth" });
  };

  // Cart
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("mistica_cart") || "[]"); } catch { return []; }
  });
  useEffect(() => { localStorage.setItem("mistica_cart", JSON.stringify(cart)); }, [cart]);

  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toast, setToast] = useState({ show:false, msg:"" });

  const triggerToast = (msg) => {
    setToast({ show:true, msg });
    setTimeout(() => setToast(t => ({ ...t, show:false })), 2500);
  };

  const addToCart = (product, opts = {}) => {
    const color = opts.color || product.colors?.[0] || null;
    const size = opts.size || product.sizes?.[0] || "Único";
    const qty = opts.qty || 1;
    const key = `${product.id}-${size}-${color?.name || "x"}`;
    setCart(prev => {
      const found = prev.find(i => i.key === key);
      if (found) return prev.map(i => i.key === key ? { ...i, qty: i.qty + qty } : i);
      return [...prev, {
        key, id: product.id, name: product.name, sub: product.sub,
        price: product.price, ph: product.ph, img: product.img || null, qty, size, color,
        categoryKey: product.categoryKey || (window.MISTICA_DATA.bolsos.find(b => b.id === product.id) ? "bolsos" : "perfumes"),
      }];
    });
    triggerToast(`${product.name} agregado`);
    setCartOpen(true);
  };

  const updateQty = (key, delta) => {
    setCart(prev => prev
      .map(i => i.key === key ? { ...i, qty: Math.max(0, i.qty + delta) } : i)
      .filter(i => i.qty > 0));
  };
  const removeItem = (key) => setCart(prev => prev.filter(i => i.key !== key));

  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  // Favorites
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem("mistica_favs") || "[]"); } catch { return []; }
  });
  useEffect(() => { localStorage.setItem("mistica_favs", JSON.stringify(favorites)); }, [favorites]);
  const toggleFav = (id) => setFavorites(prev =>
    prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
  );

  const openProduct = (product) => setRoute({ name:"product", id: product.id });

  // Checkout via WhatsApp
  const checkout = () => {
    let msg = "¡Hola Mística! Quisiera hacer un pedido:%0A%0A";
    cart.forEach((item, i) => {
      msg += `${i + 1}. *${item.name}* (${item.qty}x)`;
      if (item.color) msg += ` - Color: ${item.color.name}`;
      if (item.size && item.size !== "Único") msg += ` - ${item.size}`;
      msg += ` - ${window.formatPrice(item.price * item.qty)}%0A`;
    });
    msg += `%0A*Total: ${window.formatPrice(cartTotal)}*%0A%0A¿Me confirmas disponibilidad y envío?`;
    window.open(`https://wa.me/573001112233?text=${msg}`, "_blank");
  };

  // Resolve current product
  const currentProduct = route.name === "product" ? window.MISTICA_DATA.byId(route.id) : null;

  return (
    <>
      <Header
        route={route}
        setRoute={setRoute}
        cartCount={cartCount}
        favoritesCount={favorites.length}
        openCart={() => setCartOpen(true)}
        openSearch={() => setSearchOpen(true)}
        palette={t.palette}
      />

      <main>
        {route.name === "home" && (
          <HomePage
            setRoute={setRoute}
            addToCart={addToCart}
            openProduct={openProduct}
            favorites={favorites}
            toggleFav={toggleFav}
          />
        )}
        {route.name === "catalog" && (
          <CatalogPage
            category={route.cat}
            initialFilter={route.filter}
            addToCart={addToCart}
            openProduct={openProduct}
            favorites={favorites}
            toggleFav={toggleFav}
            setRoute={setRoute}
          />
        )}
        {route.name === "product" && currentProduct && (
          <ProductPage
            product={currentProduct}
            addToCart={addToCart}
            setRoute={setRoute}
            isFav={favorites.includes(currentProduct.id)}
            onToggleFav={toggleFav}
            openProduct={openProduct}
          />
        )}
        {route.name === "favorites" && (
          <FavoritesPage
            favorites={favorites}
            openProduct={openProduct}
            addToCart={addToCart}
            toggleFav={toggleFav}
            setRoute={setRoute}
          />
        )}
      </main>

      <Footer setRoute={setRoute} palette={t.palette} />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        updateQty={updateQty}
        removeItem={removeItem}
        total={cartTotal}
        onCheckout={checkout}
        setRoute={setRoute}
      />

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={window.MISTICA_DATA.all}
        onOpenProduct={openProduct}
      />

      <WhatsAppFab />
      <Toast msg={toast.msg} show={toast.show} />
      <MobileBottomNav
        route={route}
        setRoute={setRoute}
        cartCount={cartCount}
        favoritesCount={favorites.length}
        openCart={() => setCartOpen(true)}
      />

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection label="Paleta de colores">
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
              {Object.entries(PALETTES).map(([key, p]) => (
                <button
                  key={key}
                  onClick={() => setTweak("palette", key)}
                  style={{
                    background: p["--bg"],
                    color: p["--fg"],
                    border: t.palette === key ? `2px solid ${p["--accent"]}` : "1px solid rgba(0,0,0,0.15)",
                    borderRadius: 10,
                    padding: 12,
                    cursor:"pointer",
                    textAlign:"left",
                    fontSize:11,
                    letterSpacing:"0.08em",
                    textTransform:"uppercase",
                    fontWeight: 500,
                    display:"flex",
                    flexDirection:"column",
                    gap:8,
                  }}
                >
                  <span style={{ display:"flex", gap:4 }}>
                    <span style={{ width:16, height:16, borderRadius:999, background:p["--accent"] }}></span>
                    <span style={{ width:16, height:16, borderRadius:999, background:p["--fg"] }}></span>
                    <span style={{ width:16, height:16, borderRadius:999, background:p["--bg-alt"], border:"1px solid rgba(0,0,0,0.1)" }}></span>
                  </span>
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
