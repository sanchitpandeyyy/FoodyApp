const validateForm = ()=> {
    let name = document.getElementById('username').value
    let password = document.getElementById('password').value
    let errorMessage = ''

    //email validation
    if(name == ''){
        errorMessage = 'usename cannot be left empty'
    }
}


const itemQuantityInput = document.getElementById("itemQuantity");
const totalPriceElement = document.getElementById("totalPrice");

// Define the price per item
const pricePerItem = 120; // You can change this to your desired price

// Function to update the total price
function updateTotalPrice() {
    // Get the quantity from the input
    const quantity = parseInt(itemQuantityInput.value);

    // Calculate the total price
    const totalPrice = quantity * pricePerItem;

    // Update the displayed price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Add an event listener to update the price when the input changes
itemQuantityInput.addEventListener("input", updateTotalPrice);

// Call the updateTotalPrice function initially
updateTotalPrice();



function openNewPopup() {
    // Create a new window with the HTML file
    const popupWindow = window.open("signup.html", "_blank", "width=600,height=600,resizable=yes,scrollbars=yes");
    
    // Focus on the new popup window (optional)
    if (popupWindow) {
        popupWindow.focus();
    }
}

// Add a click event listener to the button
const openPopupButton = document.getElementById("openPopup");
openPopupButton.addEventListener("click", openNewPopup);