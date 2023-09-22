const validateForm = ()=> {
    let name = document.getElementById('username').value
    let password = document.getElementById('password').value
    let errorMessage = ''

    //email validation
    if(name == ''){
        errorMessage = 'usename cannot be left empty'
    }
}




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