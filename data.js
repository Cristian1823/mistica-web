// Mística — Product catalog data
// Each product references a "ph" placeholder palette so the visual feels editorial.

window.MISTICA_DATA = {
  bolsos: [
    {
      id: "b01",
      name: "Aurora",
      sub: "Bolso de mano · piel sintética",
      desc: "Estructura cuadrada con asa rígida y herraje dorado. Forrado en interior con bolsillo cierre. Ideal para uso diario y oficina.",
      price: 89000, oldPrice: 119000, badge: "Bestseller",
      colors: [{name:"Camel", hex:"#b8895a"}, {name:"Negro", hex:"#1a1410"}, {name:"Rosa", hex:"#e8c9c1"}],
      sizes: ["Único"],
      img: "bolsos/WhatsApp%20Image%202026-05-22%20at%203.53.43%20PM.jpeg",
      ph: { bg:"#d9c7af", a:"#f0dcc0", b:"#9a6f43", shape:"bag-tote" }
    },
    {
      id: "b02",
      name: "Esmeralda",
      sub: "Crossbody compacto",
      desc: "Bolso bandolera con correa ajustable y cadena dorada. Cierre de imán y dos compartimientos internos.",
      price: 65000,
      colors: [{name:"Negro", hex:"#1a1410"}, {name:"Vino", hex:"#6b2a2a"}, {name:"Crema", hex:"#e8dfd0"}],
      img: "bolsos/WhatsApp%20Image%202026-05-22%20at%203.53.44%20PM%20(3).jpeg",
      ph: { bg:"#e8c9c1", a:"#f2dad3", b:"#b8895a", shape:"bag-cross" }
    },
    {
      id: "b03",
      name: "Vega",
      sub: "Tote spacious",
      desc: "Tote de gran capacidad, perfecta como bolso de trabajo o universidad. Material resistente al agua.",
      price: 95000, badge: "Nuevo",
      colors: [{name:"Camel", hex:"#b8895a"}, {name:"Negro", hex:"#1a1410"}],
      img: "bolsos/WhatsApp%20Image%202026-05-22%20at%203.53.43%20PM%20(2).jpeg",
      ph: { bg:"#c9a574", a:"#e0c08a", b:"#7a5a3a", shape:"bag-tote" }
    },
    {
      id: "b04",
      name: "Luna",
      sub: "Clutch noche",
      desc: "Cartera de noche con detalle metálico. Perfecta para eventos. Incluye cadena removible.",
      price: 52000,
      colors: [{name:"Oro", hex:"#c9a574"}, {name:"Plata", hex:"#c8c5b8"}, {name:"Negro", hex:"#1a1410"}],
      img: "bolsos/WhatsApp%20Image%202026-05-22%20at%203.53.43%20PM%20(3).jpeg",
      ph: { bg:"#1a1410", a:"#3a3128", b:"#b8895a", shape:"bag-clutch", labelLight:true }
    },
    {
      id: "b05",
      name: "Iris",
      sub: "Mochila urbana",
      desc: "Mochila femenina con compartimiento para laptop hasta 14\". Cierres ocultos y bolsillo antirrobo.",
      price: 110000, oldPrice: 139000, badge: "-20%",
      colors: [{name:"Negro", hex:"#1a1410"}, {name:"Rosa", hex:"#e8c9c1"}, {name:"Camel", hex:"#b8895a"}],
      img: "bolsos/WhatsApp%20Image%202026-05-22%20at%203.53.43%20PM%20(4).jpeg",
      ph: { bg:"#e8dfd0", a:"#f3ece1", b:"#b8895a", shape:"bag-back" }
    },
    {
      id: "b06",
      name: "Sienna",
      sub: "Hobo informal",
      desc: "Bolso hobo de tendencia. Líneas suaves y asa cómoda al hombro. Material vegano premium.",
      price: 78000,
      colors: [{name:"Caramelo", hex:"#c9a574"}, {name:"Chocolate", hex:"#6b4423"}],
      img: "bolsos/WhatsApp%20Image%202026-05-22%20at%203.53.44%20PM.jpeg",
      ph: { bg:"#c9a574", a:"#d4b48a", b:"#9a6f43", shape:"bag-hobo" }
    },
    {
      id: "b07",
      name: "Mara",
      sub: "Mini bag",
      desc: "Mini bolso de cadena. Solo lo esencial: celular, llaves y labial. Detalle de joyería en cierre.",
      price: 48000, badge: "Trend",
      colors: [{name:"Rosa", hex:"#e8c9c1"}, {name:"Oro", hex:"#c9a574"}, {name:"Negro", hex:"#1a1410"}],
      img: "bolsos/WhatsApp%20Image%202026-05-22%20at%203.53.44%20PM%20(1).jpeg",
      ph: { bg:"#f2dad3", a:"#fae6e0", b:"#c08a7e", shape:"bag-mini" }
    },
    {
      id: "b08",
      name: "Olivia",
      sub: "Cartera billetera",
      desc: "Billetera larga con múltiples compartimientos para tarjetas, monedero y porta-celular.",
      price: 39000,
      colors: [{name:"Negro", hex:"#1a1410"}, {name:"Camel", hex:"#b8895a"}, {name:"Rosa", hex:"#e8c9c1"}],
      img: "bolsos/WhatsApp%20Image%202026-05-22%20at%203.53.44%20PM%20(2).jpeg",
      ph: { bg:"#d9c7af", a:"#e8dfd0", b:"#9a6f43", shape:"wallet" }
    },
  ],
  perfumes: [
    {
      id: "p01",
      name: "Yara Fucsia",
      sub: "Eau de Parfum · floral frutal",
      desc: "Explosión de frambuesa y rosa sobre un fondo de sándalo cremoso. Intenso, femenino y vibrante. Un aroma que no pasa desapercibido.",
      price: 95000, oldPrice: 120000, badge: "Bestseller",
      sizes: ["30ml", "50ml", "100ml"],
      notes: ["Frambuesa", "Rosa", "Sándalo", "Almizcle"],
      img: "perfumes/yara%20fuscia.jpeg",
      ph: { bg:"#e8b4c8", a:"#f2d0dc", b:"#c0607e", shape:"perfume-tall" }
    },
    {
      id: "p02",
      name: "Yara Beige",
      sub: "Eau de Parfum · floral suave",
      desc: "Neroli, jazmín y almizcle blanco en perfecta armonía. Elegante, luminoso y suavemente seductor para el día a día.",
      price: 95000,
      sizes: ["30ml", "50ml", "100ml"],
      notes: ["Neroli", "Jazmín", "Almizcle", "Cedro"],
      img: "perfumes/yara%20beige.jpeg",
      ph: { bg:"#e8dfd0", a:"#f3ece1", b:"#c9a574", shape:"perfume-round" }
    },
    {
      id: "p03",
      name: "Yara Café",
      sub: "Eau de Parfum · amaderado gourmand",
      desc: "Café tostado, caramelo y vainilla sobre base amaderada. Un aroma cálido y adictivo que envuelve como un abrazo.",
      price: 95000, badge: "Nuevo",
      sizes: ["30ml", "50ml"],
      notes: ["Café", "Caramelo", "Vainilla", "Ámbar"],
      img: "perfumes/yara%20cafe.jpeg",
      ph: { bg:"#6b4423", a:"#8a5a30", b:"#c9a574", shape:"perfume-square", labelLight:true }
    },
    {
      id: "p04",
      name: "La Bomba",
      sub: "Eau de Toilette · frutal tropical",
      desc: "Maracuyá, mandarina y coco frío. Una fragancia explosiva y fresca, perfecta para el calor colombiano.",
      price: 85000,
      sizes: ["50ml", "100ml"],
      notes: ["Maracuyá", "Mandarina", "Coco", "Bergamota"],
      img: "perfumes/la%20bomba.jpeg",
      ph: { bg:"#f5c842", a:"#fde27a", b:"#e8a020", shape:"perfume-round" }
    },
    {
      id: "p05",
      name: "Ariana Grande",
      sub: "Eau de Parfum · floral gourmand",
      desc: "Fresia, pera y almizcle blanco dulce. Pop, femenino y moderno — el aroma de las mujeres que brillan.",
      price: 110000, oldPrice: 140000, badge: "-21%",
      sizes: ["30ml", "50ml", "100ml"],
      notes: ["Pera", "Fresia", "Almizcle", "Frambuesa"],
      img: "perfumes/ariana%20grande.jpeg",
      ph: { bg:"#f0c8d8", a:"#f8dce8", b:"#c87898", shape:"perfume-tall" }
    },
    {
      id: "p06",
      name: "Burberry",
      sub: "Eau de Toilette · floral clásico",
      desc: "La elegancia británica en un frasco. Pera, flor de manzano y almizcle blanco. Refinado, atemporal, sofisticado.",
      price: 125000,
      sizes: ["30ml", "50ml", "100ml"],
      notes: ["Pera", "Rosa", "Almizcle", "Cedro"],
      img: "perfumes/burberry.jpeg",
      ph: { bg:"#d4c8b8", a:"#e8dfd0", b:"#8a7a6a", shape:"perfume-round" }
    },
    {
      id: "p07",
      name: "Good Girl Negro",
      sub: "Parfum intense · oriental oscuro",
      desc: "Cacao, café intenso y haba tonka con base de sándalo. Misterioso y adictivo — para las noches que se quieren recordar.",
      price: 135000, badge: "Trend",
      sizes: ["50ml", "80ml"],
      notes: ["Cacao", "Café", "Tonka", "Sándalo"],
      img: "perfumes/good%20girl%20negro.jpeg",
      ph: { bg:"#1a1410", a:"#3a2820", b:"#c9a574", shape:"perfume-tall", labelLight:true }
    },
    {
      id: "p08",
      name: "Good Girl Rosa",
      sub: "Eau de Parfum · floral seductor",
      desc: "Rosa fresca, cardamomo especiado y almizcle cálido. Dulce pero con carácter — la feminidad en su mejor versión.",
      price: 135000,
      sizes: ["50ml", "80ml"],
      notes: ["Rosa", "Cardamomo", "Almizcle", "Iris"],
      img: "perfumes/good%20girl%20rosa.jpeg",
      ph: { bg:"#f2c4c8", a:"#fad8dc", b:"#c87888", shape:"perfume-square" }
    },
    {
      id: "p09",
      name: "Good Girl Azul",
      sub: "Eau de Parfum · floral fresco",
      desc: "Gardenia, frambuesa y pachulí delicado. La versión diurna de la buena chica — luminosa y libre.",
      price: 135000,
      sizes: ["50ml", "80ml"],
      notes: ["Gardenia", "Frambuesa", "Pachulí", "Bergamota"],
      img: "perfumes/good%20girl%20azul.jpeg",
      ph: { bg:"#a8c8e8", a:"#c8dff5", b:"#4878a8", shape:"perfume-tall" }
    },
    {
      id: "p10",
      name: "Good Girl Roja",
      sub: "Eau de Parfum · oriental floral",
      desc: "El original. Rosa turca, heliótropo y vainilla sobre base cálida. Una declaración de elegancia y sensualidad.",
      price: 135000, oldPrice: 160000, badge: "Bestseller",
      sizes: ["50ml", "80ml"],
      notes: ["Rosa", "Heliótropo", "Vainilla", "Ámbar"],
      img: "perfumes/good%20girl%20roja.jpeg",
      ph: { bg:"#c83050", a:"#e05870", b:"#8a1828", shape:"perfume-round", labelLight:true }
    },
  ],
};

window.MISTICA_DATA.all = [
  ...window.MISTICA_DATA.bolsos.map(p => ({...p, category:"Bolsos", categoryKey:"bolsos"})),
  ...window.MISTICA_DATA.perfumes.map(p => ({...p, category:"Perfumes", categoryKey:"perfumes"})),
];

window.MISTICA_DATA.byId = (id) => window.MISTICA_DATA.all.find(p => p.id === id);

window.formatPrice = (n) => "$" + n.toLocaleString("es-CO");
