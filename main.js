const products = [
  {
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    price: 999,
    description: "Latest Apple smartphone.",
    category: "phones",
    name: "iPhone 15 Pro",
    popular: true,
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
        img: "https://img.jabko.ua/image/cache/catalog/products/2024/08/160852/1234-1397x1397.jpeg.webp",
        price: 1299,
        description: "Powerful MacBook for professionals.",
        category: "popular",
        name: "MacBook Air M3",
        popular: true
    },
    {
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSqUxKvxPQazQu3ZE1hkd5CsSzsR5tnumGygz-3lTGemiy5QXAyd5Cit2r-qaYkpp87Y5SxlkfW_DJsVLE8e8ofJ8NxuFQ0XmW6beEV_xY6ikt2b6g_JdSOkA",
        price: 1299,
        description: "Powerful phone  for biginers .",
        category: "popular",
        name: "iphone 16 pro max  ",
        popular: true
    },
    {
        img: "https://cdn.comfy.ua/media/catalog/product/cache/5/image/600x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_17_pro_cosmic_orange_pdp_image_position_1__ce-ww_2.jpg",
        price: 1299,
        description: "Powerful phone  for professionals.",
        category: "popular",
        name: "iphone 17 pro max ",
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
    img: "https://www.iprem.com.ua/wp-content/uploads/2023/12/Screenshot_20231211_224940.jpg",
    price: 150,
    description: "Powerful headphones.",
    category: "popular",
    name: "airpods max",
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
