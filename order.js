// ORDER MENU
// Store food prices in an object
/* const foodPrices = {
  "Margherita Pizza": 3500,
  "Caesar Salad": 5500,
  "Grilled Salmon": 7000,
  "Jollof Rice": 2500,
  "Fried Rice": 3000,
  "Roasted Beef": 1500,
  "Grilled Turkey": 3500,
  "Yam & Egg": 3600,
  "Amala & Egusi": 2000,
  "Eba & Vegetable": 4000
}; */



 //Select DOM elements
const foodSelect = document.getElementById("food");
const quantityInput = document.getElementById("quantity");
const orderBtn = document.getElementById("orderBtn");
const newOrderBtn = document.getElementById("newOrderBtn");
const resultDisplay = document.getElementById("result");

//Add Event Listener to the Submit Order button
orderBtn.addEventListener("click", function () { 

const selectedFood = foodSelect.options[foodSelect.selectedIndex].text;  // Get chosen food
const quantity = parseInt(quantityInput.value);  // Convert quantity to number
const unitPrice = parseFloat(foodSelect.value);  // Get price from object
const totalPrice = unitPrice * quantity;  // Calculate Total Price
// Display result if valid
if (selectedFood !== "-- Choose a dish --" && !isNaN(unitPrice) && quantity > 0) {
resultDisplay.innerHTML = `
  <h5 class="text-success">✅ Order Confirmed!</h5>
  <p><strong>Dish:</strong> ${selectedFood} 🍽</p>
  <p><strong>Quantity:</strong> ${quantity}</p>
  <p><strong>Total Price:</strong> <span class="total-price">&#8358;${totalPrice.toLocaleString()}</span></p>
`;
return;
  
} else if (selectedFood && (isNaN(unitPrice))) {
   resultDisplay.innerHTML = '<p class="text-danger">No order yet. Please select a dish and quantity.</p>';
   return;

} 

// Missing quantity
else if (selectedFood && (isNaN(quantity) || quantity < 1)) {
resultDisplay.innerHTML = `<p class="text-danger">Please enter a valid quantity.</p>`;
return;
}
});




newOrderBtn.addEventListener("click", function () {
  foodSelect.selectedIndex = 0;
  quantityInput.value = "";
  resultDisplay.innerHTML = "";
  resultDisplay.classList.remove("bg-light");

}); 

