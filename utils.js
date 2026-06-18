// Utility Functions & Cart Management
let cart = [];
let currentFilter = "all";

// Display Products
function displayProducts(prods) {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = prods
    .map(
      (p) => `
		<div class="product-card">
			<div class="product-image">
				<img src="${p.img}" alt="${p.name}">
			</div>
			<h3>${p.name}</h3>
			<p class="product-description">${p.desc}</p>
			<div class="product-footer">
				<span class="price">$${p.price}</span>
				<button class="add-btn" onclick="addCart(${p.id})">Add</button>
			</div>
		</div>
	`,
    )
    .join("");
}

// Filter by Category
function filterByCategory(cat) {
  currentFilter = cat;
  const filtered =
    cat === "all" ? products : products.filter((p) => p.cat === cat);
  displayProducts(filtered);

  // Update active button
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
}

// Add to Cart
function addCart(id) {
  const prod = products.find((p) => p.id === id);
  const item = cart.find((c) => c.id === id);

  if (item) item.qty++;
  else cart.push({ ...prod, qty: 1 });

  updateCart();
  alert(`Added ${prod.name} to cart!`);
}

// Remove from Cart
function removeCart(id) {
  cart = cart.filter((c) => c.id !== id);
  updateCart();
}

// Update Quantity
function updateQty(id, delta) {
  const item = cart.find((c) => c.id === id);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    updateCart();
  }
}

// Update Cart Display
function updateCart() {
  const cartDiv = document.getElementById("cartItems");
  const count = cart.reduce((sum, c) => sum + c.qty, 0);
  document.getElementById("cartCount").textContent = count;

  if (cart.length === 0) {
    cartDiv.innerHTML = '<p style="color:#999">Cart is empty</p>';
  } else {
    cartDiv.innerHTML = cart
      .map(
        (c) => `
			<div class="cart-item">
				<div>
					<strong>${c.name}</strong><br>
					$${c.price} x ${c.qty} = <strong>$${(c.price * c.qty).toFixed(2)}</strong>
				</div>
				<div class="cart-item-controls">
					<button onclick="updateQty(${c.id}, -1)">-</button>
					<input type="number" value="${c.qty}" disabled>
					<button onclick="updateQty(${c.id}, 1)">+</button>
					<button class="remove-btn" onclick="removeCart(${c.id})">✕</button>
				</div>
			</div>
		`,
      )
      .join("");
  }

  // Calculate Totals
  const subtotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax + 10;

  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("tax").textContent = tax.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);

  // Update Checkout Summary
  document.getElementById("summarySubtotal").textContent = subtotal.toFixed(2);
  document.getElementById("summaryTax").textContent = tax.toFixed(2);
  document.getElementById("summaryTotal").textContent = total.toFixed(2);

  const orderDiv = document.getElementById("orderItems");
  orderDiv.innerHTML = cart
    .map(
      (c) => `
		<div class="order-item">
			<span>${c.name} x${c.qty}</span>
			<span>$${(c.price * c.qty).toFixed(2)}</span>
		</div>
	`,
    )
    .join("");
}

// Toggle Cart Sidebar
function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
}

// Go to Checkout
function goToCheckout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  showPage("checkoutPage");
  toggleCart();
}

// Show Page
function showPage(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

// Back to Shop
function backToShop() {
  showPage("shopPage");
}

// Validate Checkout Form
function validateForm() {
  const fields = [
    "fullName",
    "email",
    "address",
    "city",
    "zip",
    "country",
    "cardNumber",
  ];
  return fields.every((f) => document.getElementById(f).value.trim() !== "");
}

// Place Order
function placeOrder() {
  if (!validateForm()) {
    alert("Please fill in all fields!");
    return;
  }

  const orderNum = Math.floor(Math.random() * 900000) + 100000;
  alert(`Order #${orderNum} placed successfully!`);

  cart = [];
  updateCart();
  showPage("shopPage");
  document
    .querySelectorAll(".checkout-form input")
    .forEach((i) => (i.value = ""));
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
  updateCart();
});
