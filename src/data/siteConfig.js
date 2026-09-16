// Config central do site. Troque os valores marcados com "TODO" quando os
// dados reais da unidade de Presidente Prudente estiverem disponíveis.

export const brand = {
  name: "Dom Marino",
  tagline: "Pizzaria Gourmet",
  city: "Presidente Prudente",
  description:
    "Rodízio gourmet, pizzas artesanais e flapts exclusivos, feitos com ingredientes selecionados e saídos direto do forno para a sua mesa.",
};

// Sabores reais do rodízio, extraídos do sistema de delivery oficial
// (lista completa de opções por categoria). Usado no marquee do Hero.
export const flavors = [
  "Calabresa",
  "Muçarela",
  "Frango com Catupiry",
  "Quatro Queijos",
  "Portuguesa",
  "Bacon",
  "Marguerita",
  "Rúcula",
  "Filé Mignon",
  "Chicken Bacon Barbecue",
  "Dom Marino",
  "Serrana",
  "Chicago",
  "Banana Trufada",
  "Romeu e Julieta",
  "Leite Ninho",
  "Prestígio",
  "Ouro Branco com Morango",
];

export const contact = {
  whatsappNumber: "5518997003684",
  whatsappMessage: "Olá! Gostaria de fazer uma reserva na Dom Marino 🍕",
  instagramHandle: "@DomMarinoPrudente",
  instagramUrl: "https://instagram.com/DomMarinoPrudente",
};

export const address = {
  name: "Dom Marino Pizzaria",
  street: "Av. Cel. José Soares Marcondes, 3212",
  neighborhood: "Jardim Bongiovani",
  city: "Presidente Prudente - SP",
  zip: "19050-230",
  // Coordenadas confirmadas no cadastro do delivery da unidade.
  lat: -22.137849,
  lng: -51.3969079,
  mapsQuery: "Av. Cel. José Soares Marcondes, 3212, Jardim Bongiovani, Presidente Prudente - SP",
  mapsUrl:
    "https://maps.google.com/?q=Av.+Cel.+Jos%C3%A9+Soares+Marcondes,+3212,+Jardim+Bongiovani,+Presidente+Prudente+-+SP",
};

// Horários extraídos do sistema de delivery oficial da unidade.
export const hours = [
  { day: "Segunda a Quinta", time: "18h50 às 23h00" },
  { day: "Sexta e Sábado", time: "18h50 às 23h30" },
  { day: "Domingo", time: "18h50 às 23h00" },
];

export const pillars = [
  {
    title: "Forno a Lenha",
    description:
      "Massa de fermentação lenta, assada em forno a lenha para uma borda crocante por fora e macia por dentro.",
  },
  {
    title: "Rodízio Gourmet",
    description:
      "Sabores exclusivos direto da cozinha até a sua mesa, sem pressa, no ritmo do rodízio.",
  },
  {
    title: "Espaço Kids",
    description:
      "Ambiente pensado para a família toda aproveitar a noite com tranquilidade.",
  },
];

// Cardápio extraído do sistema de delivery oficial da unidade (dualfood).
// Os sabores disponíveis em cada item são muitos (dezenas por categoria) —
// aqui ficam nome, descrição curta e faixa de preço; a lista de sabores
// completa pode ser detalhada depois, quando o cardápio for revisado.
export const menu = [
  {
    category: "Promoções",
    image: "/images/menu-promocoes.jpg",
    items: [
      {
        name: "Combo Flapts Doce",
        description: "Flapt doce, escolha entre os sabores da casa.",
        price: "Consulte",
      },
      {
        name: "Flapts Salgados",
        description: "Escolha um sabor salgado.",
        price: "A partir de R$ 49,90",
      },
      {
        name: "Combo 3 Flapts Doce",
        description: "Três flapts doces à sua escolha.",
        price: "R$ 100,00",
      },
      {
        name: "Rodízio em Casa + Pizza Broto + 2 Bebidas",
        description:
          "Pizza família cortada em até 16 pedaços, com até 4 sabores, mais 1 pizza broto e 2 bebidas em lata.",
        price: "R$ 149,90",
      },
      {
        name: "Rodízio em Casa + 1 Flapt + 2 Bebidas",
        description:
          "Pizza família cortada em até 16 pedaços, com até 4 sabores, mais 1 flapt e 2 bebidas em lata.",
        price: "R$ 149,90",
      },
    ],
  },
  {
    category: "Pizzas Broto",
    image: "/images/menu-broto.jpg",
    items: [
      {
        name: "Pizza Salgada Broto",
        description: "Dezenas de sabores salgados à escolha.",
        price: "A partir de R$ 50,00",
      },
    ],
  },
  {
    category: "Pizzas Inteira",
    image: "/images/menu-inteira.jpg",
    items: [
      {
        name: "Pizza Salgada Inteira",
        description: "Dezenas de sabores salgados à escolha.",
        price: "A partir de R$ 62,00",
      },
    ],
  },
  {
    category: "Pizzas Doces",
    image: "/images/menu-doces.jpg",
    items: [
      {
        name: "Pizza Doce Broto",
        description: "Escolha 1 sabor.",
        price: "A partir de R$ 40,00",
      },
      {
        name: "Pizza Doce Inteira",
        description: "Podendo escolher 2 sabores.",
        price: "A partir de R$ 54,00",
      },
    ],
  },
  {
    category: "Bebidas",
    items: [
      {
        name: "Refrigerantes",
        description: "Diversos sabores disponíveis.",
        price: "A partir de R$ 8,50",
      },
    ],
  },
];

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Endereço", href: "#endereco" },
  { label: "Contato", href: "#contato" },
];
