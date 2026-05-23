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
      name: "Encanto",
      sub: "Eau de Parfum · floral oriental",
      desc: "Notas de salida de jazmín y bergamota, corazón de rosa búlgara y vainilla, fondo amaderado con sándalo y ámbar.",
      price: 145000, oldPrice: 180000, badge: "Bestseller",
      sizes: ["30ml", "50ml", "100ml"],
      notes: ["Jazmín", "Rosa", "Vainilla", "Sándalo"],
      ph: { bg:"#e8c9c1", a:"#f2dad3", b:"#c08a7e", shape:"perfume-square" }
    },
    {
      id: "p02",
      name: "Misterio",
      sub: "Parfum · ámbar amaderado",
      desc: "Un aroma envolvente con ámbar, oud y pachulí. Para momentos de seducción y elegancia nocturna.",
      price: 175000,
      sizes: ["50ml", "100ml"],
      notes: ["Oud", "Ámbar", "Pachulí", "Incienso"],
      ph: { bg:"#1a1410", a:"#3a3128", b:"#b8895a", shape:"perfume-tall", labelLight:true }
    },
    {
      id: "p03",
      name: "Solene",
      sub: "Eau de Toilette · cítrico fresco",
      desc: "Frescura de mandarina y limón siciliano, corazón de neroli y fondo limpio de musgo blanco.",
      price: 115000, badge: "Nuevo",
      sizes: ["30ml", "50ml"],
      notes: ["Mandarina", "Neroli", "Limón", "Musgo"],
      ph: { bg:"#e8dfd0", a:"#f3ece1", b:"#c9a574", shape:"perfume-round" }
    },
    {
      id: "p04",
      name: "Vida",
      sub: "Eau de Parfum · frutal floral",
      desc: "Pera, fresia y flor de manzano sobre una base cremosa de almizcle. Juvenil, brillante y optimista.",
      price: 125000,
      sizes: ["30ml", "50ml", "100ml"],
      notes: ["Pera", "Fresia", "Manzano", "Almizcle"],
      ph: { bg:"#f2dad3", a:"#fae6e0", b:"#c08a7e", shape:"perfume-square" }
    },
    {
      id: "p05",
      name: "Reina",
      sub: "Parfum intense · gourmand",
      desc: "Praliné, café tostado y vainilla bourbon sobre haba tonka. Una firma adictiva e inolvidable.",
      price: 195000, oldPrice: 240000, badge: "-19%",
      sizes: ["50ml", "100ml"],
      notes: ["Praliné", "Café", "Vainilla", "Tonka"],
      ph: { bg:"#6b4423", a:"#8a5a30", b:"#c9a574", shape:"perfume-tall", labelLight:true }
    },
    {
      id: "p06",
      name: "Alma",
      sub: "Eau de Parfum · floral blanco",
      desc: "Tuberosa, gardenia y azahar con un toque de coco. Femenino y luminoso, para mujeres seguras.",
      price: 138000,
      sizes: ["30ml", "50ml", "100ml"],
      notes: ["Tuberosa", "Gardenia", "Azahar", "Coco"],
      ph: { bg:"#e8dfd0", a:"#f3ece1", b:"#d4b48a", shape:"perfume-round" }
    },
    {
      id: "p07",
      name: "Brisa",
      sub: "Eau de Toilette · acuático",
      desc: "Sal marina, té blanco y bergamota. La esencia de un día perfecto. Ligero y versátil.",
      price: 98000, badge: "Trend",
      sizes: ["50ml", "100ml"],
      notes: ["Sal", "Té blanco", "Bergamota", "Algas"],
      ph: { bg:"#d4d8d4", a:"#e8eae8", b:"#9aa89a", shape:"perfume-square" }
    },
    {
      id: "p08",
      name: "Pasión",
      sub: "Parfum · oriental especiado",
      desc: "Especias cálidas, cuero y rosa damascena. Intenso, sensual, inolvidable. Una declaración.",
      price: 168000,
      sizes: ["50ml", "100ml"],
      notes: ["Rosa", "Cuero", "Cardamomo", "Ámbar"],
      ph: { bg:"#6b2a2a", a:"#8a3a3a", b:"#c9a574", shape:"perfume-tall", labelLight:true }
    },
  ],
};

window.MISTICA_DATA.all = [
  ...window.MISTICA_DATA.bolsos.map(p => ({...p, category:"Bolsos", categoryKey:"bolsos"})),
  ...window.MISTICA_DATA.perfumes.map(p => ({...p, category:"Perfumes", categoryKey:"perfumes"})),
];

window.MISTICA_DATA.byId = (id) => window.MISTICA_DATA.all.find(p => p.id === id);

window.formatPrice = (n) => "$" + n.toLocaleString("es-CO");
