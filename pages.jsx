// ==========================================
// Mística — Page components
// ==========================================

// ---------- HOME PAGE ----------
const HomePage = ({ setRoute, addToCart, openProduct, favorites, toggleFav }) => {
  const data = window.MISTICA_DATA;
  const featured = data.all.filter(p => p.badge === "Bestseller" || p.badge === "Nuevo").slice(0, 4);

  useEffect(() => {
    // Honor scrollTo
    if (window.__pendingScroll) {
      const el = document.getElementById(window.__pendingScroll);
      if (el) el.scrollIntoView({ behavior:"smooth", block:"start" });
      window.__pendingScroll = null;
    }
  }, []);

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero container">
        <div className="hero__content">
          <div className="hero__tag">— Tu esencia, tu poder, tu historia.</div>
          <h1 className="hero__title">
            Femenino<br />
            con <em>carácter.</em>
          </h1>
          <p className="hero__sub">
            Bolsos versátiles y perfumes auténticos para mujeres que se mueven, deciden y se ven bien sin gastar de más. Boutique cálida, precio honesto.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--primary btn--lg" onClick={() => setRoute({ name:"catalog", cat:"bolsos" })}>
              Ver colección <Icon name="arrow" size={14} />
            </button>
            <button className="btn btn--ghost btn--lg" onClick={() => setRoute({ name:"catalog", cat:"perfumes" })}>
              Descubrir perfumes
            </button>
          </div>
          <div className="hero__stats">
            <div>
              <div className="hero__stat-num">+2.400</div>
              <div className="hero__stat-label">Clientas felices</div>
            </div>
            <div>
              <div className="hero__stat-num">16</div>
              <div className="hero__stat-label">Estilos únicos</div>
            </div>
            <div>
              <div className="hero__stat-num">★ 4.9</div>
              <div className="hero__stat-label">Reseñas reales</div>
            </div>
          </div>
        </div>

        <div className="hero__showcase">
          <HeroCard
            ph={{ bg:"#d4b48a", a:"#e8c9a6", b:"#9a6f43", shape:"bag-tote" }}
            img="principales/Bolso%20principal.jpeg"
            eyebrow="Bolsos"
            title="Aurora"
            desc="Estructura firme, herraje dorado. El bolso que te acompaña de la oficina a la cita."
            corner="Bestseller"
            onClick={() => openProduct(data.byId("b01"))}
          />
          <HeroCard
            ph={{ bg:"#1a1410", a:"#3a3128", b:"#b8895a", shape:"perfume-tall", labelLight:true }}
            img="principales/perfume%20principal.jpeg"
            eyebrow="Perfumes"
            title="Misterio"
            desc="Ámbar y oud. Para noches que se quieren recordar."
            corner="Nuevo"
            dark
            onClick={() => openProduct(data.byId("p02"))}
          />
          <HeroCard
            ph={{ bg:"#e8c9c1", a:"#f2dad3", b:"#c08a7e", shape:"perfume-square" }}
            eyebrow="Combo"
            title="Cápsula del mes"
            desc="Bolso + perfume con 15% off. Solo este mes."
            corner="-15%"
            onClick={() => setRoute({ name:"catalog", cat:"bolsos" })}
          />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee__track">
          <span>
            ENVÍO GRATIS DESDE $150K <span className="marquee__dot"></span>
            PAGA CON NEQUI O TRANSFERENCIA <span className="marquee__dot"></span>
            NUEVAS FRAGANCIAS DE TEMPORADA <span className="marquee__dot"></span>
            ATENCIÓN POR WHATSAPP <span className="marquee__dot"></span>
            ENVÍO GRATIS DESDE $150K <span className="marquee__dot"></span>
            PAGA CON NEQUI O TRANSFERENCIA <span className="marquee__dot"></span>
            NUEVAS FRAGANCIAS DE TEMPORADA <span className="marquee__dot"></span>
            ATENCIÓN POR WHATSAPP <span className="marquee__dot"></span>
          </span>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="section container">
        <div className="section__head">
          <div>
            <div className="eyebrow" style={{ marginBottom:14 }}>— Colecciones</div>
            <h2 className="section__title">Dos universos, <em>una misma esencia.</em></h2>
          </div>
          <p style={{ maxWidth:340, color:"var(--fg-soft)" }}>
            Elige tu compañero del día o la fragancia que cuenta tu historia. Cada pieza pensada para acompañarte.
          </p>
        </div>
        <div className="cats">
          <div className="cat" onClick={() => setRoute({ name:"catalog", cat:"bolsos" })}>
            <div className="cat__media">
              <Placeholder ph={{ bg:"#b8895a", a:"#d4b48a", b:"#7a5a3a", shape:"bag-tote" }} />
            </div>
            <div className="cat__content">
              <div className="cat__count">8 estilos</div>
              <div className="cat__title">Bolsos</div>
              <div className="cat__desc">Totes, crossbody, clutches y mochilas. Materiales premium veganos, herrajes dorados, líneas atemporales.</div>
              <span className="link-underline">Explorar <Icon name="arrowSm" size={12} /></span>
            </div>
            <div className="cat__arrow"><Icon name="arrow" size={20} /></div>
          </div>
          <div className="cat" onClick={() => setRoute({ name:"catalog", cat:"perfumes" })}>
            <div className="cat__media">
              <Placeholder ph={{ bg:"#e8c9c1", a:"#f2dad3", b:"#c08a7e", shape:"perfume-round" }} />
            </div>
            <div className="cat__content">
              <div className="cat__count">8 fragancias</div>
              <div className="cat__title">Perfumes</div>
              <div className="cat__desc">Florales, orientales, cítricos y gourmand. Larga duración, perfil de ingredientes transparente.</div>
              <span className="link-underline">Explorar <Icon name="arrowSm" size={12} /></span>
            </div>
            <div className="cat__arrow"><Icon name="arrow" size={20} /></div>
          </div>
        </div>
      </section>

      {/* PRESS / TRUST STRIP */}
      <div className="press">
        <div className="press__item">"Esencia con propósito"</div>
        <div className="press__item">— Cromos Magazine</div>
        <div className="press__item">"La nueva voz boutique"</div>
        <div className="press__item">— Fucsia</div>
        <div className="press__item">"Refinada y accesible"</div>
      </div>

      {/* BESTSELLERS */}
      <section className="section container">
        <div className="section__head">
          <div>
            <div className="eyebrow" style={{ marginBottom:14 }}>— Lo más amado</div>
            <h2 className="section__title">Las favoritas <em>de la temporada.</em></h2>
          </div>
          <button className="btn btn--ghost" onClick={() => setRoute({ name:"catalog", cat:"bolsos" })}>
            Ver todo <Icon name="arrowSm" size={12} />
          </button>
        </div>
        <div className="products">
          {data.all.slice(0, 8).map(p => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={openProduct}
              onAdd={(prod) => addToCart(prod)}
              isFav={favorites.includes(p.id)}
              onToggleFav={toggleFav}
            />
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="section section--alt" id="story">
        <div className="container">
          <div className="story">
            <div className="story__media">
              <Placeholder ph={{ bg:"#c9a574", a:"#e0c08a", b:"#7a5a3a", shape:"bag-hobo" }} label="Foto · founder o producción" />
            </div>
            <div className="story__body">
              <div className="eyebrow" style={{ marginBottom:14 }}>— Nuestra historia</div>
              <h2 className="section__title">Hecho para mujeres <em>como tú.</em></h2>
              <p>
                Mística nació de una idea simple: que toda mujer merece sentirse poderosa todos los días, sin importar su presupuesto. Diseñamos bolsos y curamos fragancias que combinan calidad, versatilidad y precio honesto.
              </p>
              <p>
                Cada pieza está pensada para acompañar mañanas de oficina, tardes con amigas, cenas que se vuelven inolvidables. Porque tu día tiene capítulos — y tu look también.
              </p>
              <div style={{ marginTop:32, display:"flex", gap:14, flexWrap:"wrap" }}>
                <button className="btn btn--primary" onClick={() => setRoute({ name:"catalog", cat:"bolsos" })}>
                  Conoce la colección
                </button>
                <button className="btn btn--ghost">Síguenos en Instagram</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section container">
        <div className="section__head">
          <div>
            <div className="eyebrow" style={{ marginBottom:14 }}>— Nuestros valores</div>
            <h2 className="section__title">Lujo accesible, <em>sin compromisos.</em></h2>
          </div>
        </div>
        <div className="values">
          <Value icon="leaf" title="Materiales conscientes" desc="Piel sintética premium y fragancias sin químicos agresivos." />
          <Value icon="truck" title="Envío rápido" desc="Despacho en 24h. Gratis desde $150.000 a toda Colombia." />
          <Value icon="shield" title="Calidad garantizada" desc="30 días para cambios. Si no te enamora, lo cambiamos." />
          <Value icon="whatsapp" title="Asesoría 1 a 1" desc="Chatea con nosotras por WhatsApp para encontrar tu match perfecto." />
        </div>
      </section>

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
    </div>
  );
};

// ---------- Sub-components ----------
const HeroCard = ({ ph, img, imgContain, eyebrow, title, desc, corner, dark, onClick }) => (
  <div className="hero-card" onClick={onClick}>
    <div className="hero-card__media">
      {img
        ? <img src={img} alt={title} style={{ width:"100%", height:"100%", objectFit: imgContain ? "contain" : "cover", padding: imgContain ? "16px" : 0, display:"block" }} />
        : <Placeholder ph={ph} />
      }
    </div>
    <span className="hero-card__corner">{corner}</span>
    <div className="hero-card__overlay">
      <div className="hero-card__eyebrow">{eyebrow}</div>
      <div className="hero-card__title">{title}</div>
      <div className="hero-card__desc">{desc}</div>
    </div>
  </div>
);

const Value = ({ icon, title, desc }) => (
  <div className="value">
    <div className="value__icon"><Icon name={icon} size={20} stroke={1.8} /></div>
    <div className="value__title">{title}</div>
    <div className="value__desc">{desc}</div>
  </div>
);

// ---------- CATALOG PAGE ----------
const CatalogPage = ({ category, initialFilter, addToCart, openProduct, favorites, toggleFav, setRoute }) => {
  const data = window.MISTICA_DATA;
  const items = data[category] || [];
  const [filter, setFilter] = useState(initialFilter || "Todos");
  const [sort, setSort] = useState("default");

  useEffect(() => { window.scrollTo({ top: 0 }); }, [category]);

  const filters = useMemo(() => {
    const set = new Set(["Todos"]);
    items.forEach(p => p.badge && set.add(p.badge));
    return Array.from(set);
  }, [items]);

  const visible = useMemo(() => {
    let v = filter === "Todos" ? [...items] : items.filter(p => p.badge === filter);
    if (sort === "price-asc") v.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") v.sort((a, b) => b.price - a.price);
    if (sort === "name") v.sort((a, b) => a.name.localeCompare(b.name));
    return v;
  }, [items, filter, sort]);

  const catTitle = category === "bolsos" ? "Bolsos" : "Perfumes";
  const catSub = category === "bolsos"
    ? "Versátiles para cada momento. Materiales premium, precios honestos."
    : "Aromas auténticos para tu mejor versión. Larga duración, ingredientes transparentes.";

  return (
    <div className="page-enter">
      <section className="catalog-hero">
        <div className="catalog-hero__crumbs">
          <a onClick={() => setRoute({ name:"home" })} style={{ cursor:"pointer" }}>Inicio</a> · {catTitle}
        </div>
        <h1 className="catalog-hero__title">
          {category === "bolsos" ? <>El bolso <em>perfecto.</em></> : <>Tu firma <em>en perfume.</em></>}
        </h1>
        <p className="catalog-hero__sub">{catSub}</p>
      </section>

      <div className="catalog-toolbar">
        <div className="filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-chip ${filter === f ? "is-on" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div style={{ display:"flex", gap:14, alignItems:"center" }}>
          <span className="catalog-toolbar__count">{visible.length} productos</span>
          <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">Destacados</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
            <option value="name">Nombre A–Z</option>
          </select>
        </div>
      </div>

      <section className="catalog-body container">
        {visible.length === 0 ? (
          <div className="empty-state">
            <p style={{ fontFamily:"var(--font-serif)", fontSize:28, marginBottom:8 }}>Nada por aquí todavía</p>
            <p>Prueba con otro filtro.</p>
          </div>
        ) : (
          <div className="products">
            {visible.map(p => (
              <ProductCard
                key={p.id}
                product={{ ...p, category: catTitle, categoryKey: category }}
                onOpen={openProduct}
                onAdd={addToCart}
                isFav={favorites.includes(p.id)}
                onToggleFav={toggleFav}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

// ---------- RELATED CAROUSEL ----------
const RelatedCarousel = ({ related, catTitle, cat, openProduct, addToCart, onToggleFav }) => {
  const [idx, setIdx] = React.useState(0);
  const visible = 3;
  const max = Math.max(0, related.length - visible);

  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(max, i + 1));

  const cardW = 220 + 16; // width + gap

  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="eyebrow" style={{ marginBottom:14 }}>— Te puede gustar</div>
            <h2 className="section__title">Completa <em>el look.</em></h2>
          </div>
        </div>
        <div className="carousel">
          <button className="carousel__btn carousel__btn--prev" onClick={prev} disabled={idx === 0}>
            <Icon name="arrow" size={16} style={{ transform:"rotate(180deg)" }} />
          </button>
          <div className="carousel__track-wrap">
            <div className="carousel__track" style={{ transform:`translateX(-${idx * cardW}px)` }}>
              {related.map(p => (
                <div key={p.id} className="carousel__card" onClick={() => openProduct(p)}>
                  <div className="product__media">
                    {p.img
                      ? <img className="product__img" src={p.img} alt={p.name} />
                      : <Placeholder ph={p.ph} label={p.name} />
                    }
                  </div>
                  <div className="product__name">{p.name}</div>
                  <div className="product__sub">{p.sub}</div>
                  <div className="product__price">{window.formatPrice(p.price)}</div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel__btn carousel__btn--next" onClick={next} disabled={idx >= max}>
            <Icon name="arrow" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

// ---------- PRODUCT DETAIL PAGE ----------
const ProductPage = ({ product, addToCart, setRoute, isFav, onToggleFav, openProduct }) => {
  const data = window.MISTICA_DATA;
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "Único");
  const [qty, setQty] = useState(1);
  const [openAcc, setOpenAcc] = useState("desc");
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setSelectedColor(product.colors?.[0] || null);
    setSelectedSize(product.sizes?.[0] || "Único");
    setQty(1);
  }, [product.id]);

  const related = data[product.categoryKey || (data.bolsos.includes(product) ? "bolsos" : "perfumes")]
    .filter(p => p.id !== product.id).slice(0, 4);

  const cat = product.categoryKey || (data.bolsos.find(b => b.id === product.id) ? "bolsos" : "perfumes");
  const catTitle = cat === "bolsos" ? "Bolsos" : "Perfumes";

  return (
    <div className="page-enter">
      <div className="pdp container">
        <div className="pdp__gallery">
          <div className="pdp__thumbs">
            <div className={`pdp__thumb is-on`} onClick={() => setActiveImg(0)}>
              {product.img ? <img src={product.img} alt={product.name} style={{width:"100%",height:"100%",objectFit:"cover"}} /> : <Placeholder ph={product.ph} />}
            </div>
          </div>
          <div className="pdp__main-img">
            {product.img
              ? <img src={product.img} alt={product.name} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"var(--r-md)"}} />
              : <Placeholder ph={product.ph} label={`${product.name} · vista ${activeImg + 1}`} />
            }
          </div>
        </div>

        <div>
          <div className="pdp__crumbs">
            <a onClick={() => setRoute({ name:"home" })} style={{ cursor:"pointer" }}>Inicio</a> ·{" "}
            <a onClick={() => setRoute({ name:"catalog", cat })} style={{ cursor:"pointer" }}>{catTitle}</a> · {product.name}
          </div>
          <h1 className="pdp__name">{product.name}</h1>
          <div className="pdp__sub">{product.sub}</div>
          <div className="pdp__rating">
            <span className="stars">★★★★★</span>
            <span>4.9 — 142 reseñas verificadas</span>
          </div>

          <div className="pdp__price-row">
            <span className="pdp__price">{window.formatPrice(product.price)}</span>
            {product.oldPrice && (
              <>
                <span className="pdp__price-old">{window.formatPrice(product.oldPrice)}</span>
                <span className="pdp__discount">
                  -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                </span>
              </>
            )}
          </div>

          <p className="pdp__desc">{product.desc}</p>

          {product.colors && (
            <div className="pdp__opts">
              <div className="pdp__opt-label">
                Color · <span style={{ color:"var(--fg)" }}>{selectedColor?.name}</span>
              </div>
              <div className="pdp__opts-row">
                {product.colors.map(c => (
                  <button
                    key={c.name}
                    className={`opt-color ${selectedColor?.name === c.name ? "is-on" : ""}`}
                    style={{ background: c.hex }}
                    onClick={() => setSelectedColor(c)}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}

          {product.sizes && product.sizes.length > 1 && (
            <div className="pdp__opts">
              <div className="pdp__opt-label">Presentación</div>
              <div className="pdp__opts-row">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    className={`opt-pill ${selectedSize === s ? "is-on" : ""}`}
                    onClick={() => setSelectedSize(s)}
                  >{s}</button>
                ))}
              </div>
            </div>
          )}

          <div className="pdp__qty">
            <div className="pdp__opt-label" style={{ marginBottom:0 }}>Cantidad</div>
            <div className="qty-stepper">
              <button onClick={() => setQty(Math.max(1, qty - 1))}><Icon name="minus" size={14} /></button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}><Icon name="plus" size={14} /></button>
            </div>
          </div>

          <div className="pdp__cta-row">
            <button
              className="btn btn--primary btn--lg"
              onClick={() => addToCart(product, { color: selectedColor, size: selectedSize, qty })}
            >
              <Icon name="bag" size={16} /> Agregar al carrito
            </button>
            <button
              className="btn btn--gold btn--lg"
              onClick={() => {
                const msg = `¡Hola Mística! Estoy interesada en *${product.name}* (${product.sub})${selectedColor ? ` color ${selectedColor.name}` : ""}${selectedSize !== "Único" ? `, ${selectedSize}` : ""}. ¿Me cuentas más?`;
                window.open(`https://wa.me/573001112233?text=${encodeURIComponent(msg)}`, "_blank");
              }}
              title="Comprar por WhatsApp"
            >
              <Icon name="whatsapp" size={16} />
            </button>
            <button
              className="btn btn--ghost btn--lg"
              onClick={() => onToggleFav(product.id)}
              title="Favorito"
              style={{ color: isFav ? "var(--accent-deep)" : undefined }}
            >
              <Icon name="heart" size={16} />
            </button>
          </div>

          <div className="pdp__perks">
            <div className="pdp__perk"><Icon name="truck" size={18} /> Envío gratis desde $150K</div>
            <div className="pdp__perk"><Icon name="refresh" size={18} /> Cambios 30 días</div>
            <div className="pdp__perk"><Icon name="shield" size={18} /> Calidad garantizada</div>
            <div className="pdp__perk"><Icon name="whatsapp" size={18} /> Asesoría por WhatsApp</div>
          </div>

          <div>
            <AccordionItem title="Descripción" open={openAcc === "desc"} onToggle={() => setOpenAcc(openAcc === "desc" ? "" : "desc")}>
              {product.desc} Nuestras piezas pasan por control de calidad antes de salir hacia ti.
            </AccordionItem>
            <AccordionItem title={cat === "bolsos" ? "Materiales y cuidado" : "Notas olfativas"} open={openAcc === "mat"} onToggle={() => setOpenAcc(openAcc === "mat" ? "" : "mat")}>
              {cat === "bolsos"
                ? "Piel sintética premium libre de químicos. Herrajes dorados resistentes. Limpia con paño seco, evita exposición prolongada al sol."
                : (
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:8 }}>
                    {(product.notes || []).map(n => (
                      <span key={n} style={{ padding:"6px 14px", border:"1px solid var(--line)", borderRadius:999, fontSize:12, letterSpacing:"0.1em", textTransform:"uppercase" }}>{n}</span>
                    ))}
                  </div>
                )
              }
            </AccordionItem>
            <AccordionItem title="Envío y devoluciones" open={openAcc === "ship"} onToggle={() => setOpenAcc(openAcc === "ship" ? "" : "ship")}>
              Despachamos en 24h hábiles. Envíos a todo Colombia (Servientrega/Coordinadora). Gratis desde $150.000. Cambios y devoluciones dentro de 30 días.
            </AccordionItem>
          </div>
        </div>
      </div>

      {/* Related carousel */}
      <RelatedCarousel
        related={related}
        catTitle={catTitle}
        cat={cat}
        openProduct={openProduct}
        addToCart={addToCart}
        onToggleFav={onToggleFav}
      />
    </div>
  );
};

const AccordionItem = ({ title, open, onToggle, children }) => (
  <div className={`pdp__accordion-item ${open ? "is-open" : ""}`}>
    <button className="pdp__accordion-head" onClick={onToggle}>
      <span>{title}</span>
      <Icon name={open ? "minus" : "plus"} size={14} />
    </button>
    <div className="pdp__accordion-body">{children}</div>
  </div>
);

// ---------- FAVORITES PAGE ----------
const FavoritesPage = ({ favorites, openProduct, addToCart, toggleFav, setRoute }) => {
  const data = window.MISTICA_DATA;
  const items = data.all.filter(p => favorites.includes(p.id));

  return (
    <div className="page-enter">
      <section className="catalog-hero">
        <div className="catalog-hero__crumbs">
          <a onClick={() => setRoute({ name:"home" })} style={{ cursor:"pointer" }}>Inicio</a> · Favoritos
        </div>
        <h1 className="catalog-hero__title">Tus <em>favoritos.</em></h1>
        <p className="catalog-hero__sub">Las piezas que conquistaron tu mirada.</p>
      </section>
      <section className="catalog-body container">
        {items.length === 0 ? (
          <div className="empty-state">
            <p style={{ fontFamily:"var(--font-serif)", fontSize:32, marginBottom:12 }}>Aún no tienes favoritos</p>
            <p style={{ marginBottom:24 }}>Toca el corazón en cualquier producto para guardarlo aquí.</p>
            <button className="btn btn--primary" onClick={() => setRoute({ name:"catalog", cat:"bolsos" })}>
              Explorar tienda
            </button>
          </div>
        ) : (
          <div className="products">
            {items.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                onOpen={openProduct}
                onAdd={addToCart}
                isFav={true}
                onToggleFav={toggleFav}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

Object.assign(window, { HomePage, CatalogPage, ProductPage, FavoritesPage });
