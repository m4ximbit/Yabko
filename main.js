const products = [
  {
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    price: 999,
    description: "Latest Apple smartphone.",
    category: "phones",
    name: "iPhone 15 Pro",
    popular: true,
  },

<<<<<<< HEAD
    {
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
        price: 959,
        description: "Latest Apple smartphone.",
        category: "phones",
        name: "iPhone 15 Pro",
        popular: true
    },

    {
        img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
        price: 1001,
        description: "Samsung flagship smartphone.",
        category: "phones",
        name: "Samsung Galaxy S24",
        popular: true
    },

    {
        img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600",
        price: 190,
        description: "Wireless headphones with ANC.",
        category: "accessories",
        name: "AirPods Pro"
    },

    {
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        price: 35,
        description: "Fast wireless charger.",
        category: "accessories",
        name: "MagSafe Charger"
    },

    {
        img: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600",
        price: 1299,
        description: "Powerful MacBook for professionals.",
        category: "popular",
        name: "MacBook Air M3",
        popular: true
    },
    {
        img: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600",
        price: 1299,
        description: "Powerful MacBook for professionals.",
        category: "popular",
        name: "MacBook Air M3",
        popular: true
    },
    {
        img: "https://cdn.comfy.ua/media/catalog/product/cache/5/image/600x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_17_pro_cosmic_orange_pdp_image_position_1__ce-ww_2.jpg",
        price: 1299,
        description: "Powerful MacBook for professionals.",
        category: "popular",
        name: "MacBook Air M3",
        popular: true
    },

  {
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
    price: 850,
    description: "Samsung flagship smartphone.",
    category: "phones",
    name: "Samsung Galaxy S24",
    popular: true,
  },

  {
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600",
    price: 250,
    description: "Wireless headphones with ANC.",
    category: "accessories",
    name: "AirPods Pro",
  },

  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    price: 60,
    description: "Fast wireless charger.",
    category: "accessories",
    name: "MagSafe Charger",
  },


  {
    img: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600",
    price: 1299,
    description: "Powerful MacBook for professionals.",
    category: "popular",
    name: "MacBook Air M3",
    popular: true,
  },
];

const catalog = document.getElementById("catalog");
const searchInput = document.getElementById("searchInput");

const sections = [
  {
    title: "Популярні товари",
    filter: (p) => p.popular,
  },
  {
    title: "Мобільні телефони",
    filter: (p) => p.category === "phones",
  },
  {
    title: "Аксесуари",
    filter: (p) => p.category === "accessories",
  },
];

function productCard(product) {
  return `
<div class="col-lg-3 col-md-4 col-sm-6 mb-4">

<div class="product-card">

<img src="${product.img}" alt="${product.name}">

<div class="product-info">

<h5>${product.name}</h5>

<p>${product.description}</p>

<div class="price">$${product.price}</div>

<div class="category">${product.category}</div>

<button class="buy-btn">Купити</button>
</div>

</div>

</div>
`;
}

function render(search = "") {
  catalog.innerHTML = "";

  const value = search.toLowerCase();

  sections.forEach((section) => {
    const filtered = products.filter(
      (product) =>
        section.filter(product) && product.name.toLowerCase().includes(value)
    );

    if (filtered.length === 0) return;

    const block = document.createElement("div");

    block.className = "catalog-section";

    block.innerHTML = `

<h2>${section.title}</h2>

<div class="row">

${filtered.map(productCard).join("")}

</div>

`;

    catalog.appendChild(block);
  });
}

searchInput.addEventListener("input", (e) => {
  render(e.target.value);
});

render();
