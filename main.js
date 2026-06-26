const products = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    price: 999,
    description: "Latest Apple smartphone.",
    category: "phones",
    name: "iPhone 15 Pro",
    popular: true,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600",
    price: 190,
    description: "Wireless headphones with ANC.",
    category: "accessories",
    name: "AirPods Pro",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    price: 35,
    description: "Fast wireless charger.",
    category: "accessories",
    name: "MagSafe Charger",
  },
  {
    id: 4,
    img: "https://img.jabko.ua/image/cache/catalog/products/2024/08/160852/1234-1397x1397.jpeg.webp",
    price: 1299,
    description: "Powerful MacBook for professionals.",
    category: "popular",
    name: "MacBook Air M3",
    popular: true,
  },
  {
    id: 5,
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSqUxKvxPQazQu3ZE1hkd5CsSzsR5tnumGygz-3lTGemiy5QXAyd5Cit2r-qaYkpp87Y5SxlkfW_DJsVLE8e8ofJ8NxuFQ0XmW6beEV_xY6ikt2b6g_JdSOkA",
    price: 1299,
    description: "Powerful phone for beginners.",
    category: "popular",
    name: "iPhone 16 Pro Max",
    popular: true,
  },
  {
    id: 6,
    img: "https://cdn.comfy.ua/media/catalog/product/cache/5/image/600x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_17_pro_cosmic_orange_pdp_image_position_1__ce-ww_2.jpg",
    price: 1299,
    description: "Powerful phone for professionals.",
    category: "popular",
    name: "iPhone 17 Pro Max",
    popular: true,
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
    price: 850,
    description: "Samsung flagship smartphone.",
    category: "phones",
    name: "Samsung Galaxy S24",
    popular: true,
  },
  {
    id: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbzMvRfjTCroK4oWOH0TAbuwwQIq8OOuHMlPcOHklH2g&s=10",
    price: 150,
    description: "Powerful headphones.they're cool",
    category: "popular",
    name: "AirPods Max",
    popular: true,
  },
  {
    id: 9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAV_5tHJPae-LSNH9yN87AYv6IuTIRkhmwQ&s",
    price: 700,
    description: "Powerful phone.for starters ",
    category: "popular",
    name: "iPhone 13",
    popular: true,
  },
  {
    id: 10,
    img: "https://jey-tech.com.ua/image/cache/catalog/navushniki-tws-apple-airpods-pro-3-mfhp4-6430-68c15126101c2-1761903970-1000x1000.png",
    price: 150,
    description: "Powerful headphones. for profesinals",
    category: "popular",
    name: "AirPods Pro 3",
    popular: true,
  }
];
 

let cart = [];

  function addToCart(name, price) {
    let item = cart.find(i => i.name === name);

    if (item) {
      item.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }

    renderCart();
  }

  function changeQty(name, delta) {
    let item = cart.find(i => i.name === name);
    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {
      cart = cart.filter(i => i.name !== name);
    }

    renderCart();
  }

  function removeItem(name) {
    cart = cart.filter(i => i.name !== name);
    renderCart();
  }

  function renderCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";

    if (cart.length === 0) {
      cartDiv.innerHTML = `<p class="empty-cart">Кошик порожній</p>`;
      document.getElementById("total").innerText = "Всього: 0 грн";
      return;
    }

    let total = 0;

    cart.forEach(item => {
      total += item.price * item.qty;
      const safeName = item.name.replace(/'/g, "\\'");

      cartDiv.innerHTML += `
        <div class="cart-item">
          <span>${item.name} — ${item.price} грн</span>
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeQty('${safeName}', -1)">-</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${safeName}', 1)">+</button>
            <button class="remove" onclick="removeItem('${safeName}')">✕</button>
          </div>
        </div>
      `;
    });

    document.getElementById("total").innerText = "Всього: " + total + " грн";
  }

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

<button class="buy-btn" data-id="${product.id}" onclick="addToCart('${product.name}', ${product.price})"> 
  Купити
</button>
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