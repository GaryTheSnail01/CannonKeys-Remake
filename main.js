// Using a list to store items the user adds to their cart
let cart = [];

// Add an item to the cart
function addToCart(product) {
    // Add the product to the cart
    cart.push(product);
    // Update the count of items in the cart
    updateItemCount();
}

// Update the count of items in the cart
function updateItemCount() {
    // Set itemCount to the lenth of the cart list
    const itemCount = cart.length;
    // Update the count in the HTML
    document.getElementById("item-count").textContent = itemCount;
}

// Calculate the total price of an item after applying a discount
function getDiscountedPrice(price, discount) {
    // If the discount is 0, return the original price
    if (discount === 0) {
        return price;
    }
    // If discount !== 0, return the price after applying the discount
    return price * (1 - discount);
}

// Performs validation on a form
// Wait for the HTML to load before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Find all elements in the HTML with the class "needs-validation" and store into a variable
    const forms = document.querySelectorAll('.needs-validation');

    // Converts the lists of forms into an array then loops through each form (.forEach())
    Array.from(forms).forEach(function (form) {
        // When the user clicks the submit button the rest of the function is executed
        form.addEventListener('submit', function (event) {
            // Use the browser's built-in form validation, and if it's not valid...
            if (!form.checkValidity()) {
                // It prevents the form from being submitted
                event.preventDefault();
                event.stopPropagation();
            }

            // Adds the class "was-validated" to the form that was submitted
            form.classList.add('was-validated');
        }, false);
    });
});