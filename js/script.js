const validateForm = ()=> {
    let name = document.getElementById('username').value
    let password = document.getElementById('password').value
    let errorMessage = ''

    //email validation
    if(name == ''){
        errorMessage = 'usename cannot be left empty'
    }
}