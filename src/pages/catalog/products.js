const products = {
  1: {
    name: "Funko Hermione",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://m.media-amazon.com/images/I/61rMcbanCYL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51zP76rA1+L._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51zP76rA1+L._AC_SL1000_.jpg",
    ],
    price: 155.90,
    categories: [1, 2],
  },
  2: {
    name: "Funko Harry Potter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://m.media-amazon.com/images/I/61q5FhBairL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/61SaJdVYeAL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/61TtzoCpTRL._AC_SL1200_.jpg",
    ],
    price: 199.90,
    promo_price: 169.99,
    percent: '15%',
    categories: [1, 3],
  },
  3: {
    name: "Funko Ronny",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://m.media-amazon.com/images/I/71KtcTgT7vL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/51-sRlMnt0L._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/91Iu9udRsOL._AC_SL1500_.jpg",
    ],
    price: 145.90,
    categories: [1, 2],
  },
  4: {
    name: "Funko Lupin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://m.media-amazon.com/images/I/71zQMnL7z-L._AC_SL1280_.jpg",
      "https://m.media-amazon.com/images/I/71aJHemgblL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71aJHemgblL._AC_SL1500_.jpg",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: '15%',
    categories: [1, 2],
  },

  5: {
    name: "Funko Dementador",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://m.media-amazon.com/images/I/61QEe8WF4eL._AC_SL1150_.jpg",
      "https://m.media-amazon.com/images/I/51zN1OUricL._AC_.jpg",
      "https://m.media-amazon.com/images/I/51b4Pl6BzBL._AC_.jpg",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: '15%',
    categories: [1, 3],
  },
  6: {
    name: "Funko Sirius Black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://m.media-amazon.com/images/I/71T5k11oZnL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/71T5k11oZnL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/71T5k11oZnL._AC_SL1200_.jpg",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: '15%',
    categories: [1, 2],
  },
  };

const categories = {
  1: { name: "Funko" },
  2: { name: "Nacional" },
  3: { name: "Importado" },
};

module.exports = {
  products,
  categories,
};
