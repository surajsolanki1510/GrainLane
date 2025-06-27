// Function to update the cart count on the navbar
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}

// Function to add items to the cart
function addToCart(event) {
    let button = event.target;
    let name = button.getAttribute("data-name");
    let price = button.getAttribute("data-price");
    let image = button.getAttribute("data-image");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll(".AddtoCart").forEach(button => {
    button.addEventListener("click", addToCart);
});

// Update the cart count on page load
updateCartCount();
