let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add item to cart with quantity handling
function addToCart(item, price) {
  const existingItem = cart.find(dish => dish.item === item);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ item, price, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${item} added to cart!`);
}

// Display cart items with quantity and total
function displayCart() {
  const container = document.getElementById('cartItems');
  if (!container) return;

  container.innerHTML = '<h2>Items in Cart</h2>';
  let total = 0;

  cart.forEach(({ item, price, quantity }) => {
    const itemTotal = price * quantity;
    container.innerHTML += `<p>${item} × ${quantity} — ₹${itemTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`;
    total += itemTotal;
  });

  container.innerHTML += `<h3>Total: ₹${total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>`;
}

// Display checkout summary using quantity from cart
function displayCheckout() {
  const container = document.getElementById('checkoutSummary');
  if (!container) return;

  container.innerHTML = '<h2>Checkout Summary</h2>';
  let total = 0;

  cart.forEach(({ item, price, quantity }) => {
    const itemTotal = price * quantity;
    container.innerHTML += `<p>${item} × ${quantity} — ₹${itemTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`;
    total += itemTotal;
  });

  container.innerHTML += `<h3>Total to Pay: ₹${total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>`;
}

// Confirm order and clear cart
function confirmOrder() {
  localStorage.removeItem('cart');
  window.location.href = 'confirmation.html';
}

// Display cart or checkout on page load
document.addEventListener('DOMContentLoaded', () => {
  displayCart();
  displayCheckout();
});
