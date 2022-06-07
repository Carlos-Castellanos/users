// save the objet user in localStorage
function saveUser(user) {
    let userString = JSON.stringify(user);
    localStorage.setItem("user", userString);

}

// validates the login with the values stored in the localstorage
// create a new varibale "authorized" when the login is correct
function login() {
    // recupera los valores de los inputs usando jquery
    let userName = $("#txtUserName").val();
    let userPass = $("#txtpassword").val();
    //validating user with localStorage
    let userSaved;
    userSaved = JSON.parse(localStorage.getItem("user"));
    if (userSaved.email == userName && userSaved.password == userPass) {
        console.log(`welcome ${userSaved.fName} ${userSaved.lName}`)
        localStorage.setItem("authorized", userName);
    }
    else {
        console.log("i don't know you");
        localStorage.removeItem("authorized");
    }
    $('input').val(""); // clear inputs using jquery
}a

// When loading users.html validates the user, verifies in the localstorage that the authorized user ("authorized")corresponds to the objet user ("user") 
function authorizedUser() {
    console.log("userHTML");
      let userA = localStorage.getItem("authorized");
    let userSaved;
    userSaved = JSON.parse(localStorage.getItem("user"));
    $("#userPage").empty();
    if (userSaved.email == userA) {
        $("#userPage").append(`<h1>Welcome ${userSaved.fName} ${userSaved.lName}</h1>`)
    }
    else {
        $("#userPage").append(`<h1>I don't know you</h1>`)
    }

}

// Erase in the localstorage the varibale "authorized"
function logout() {
    let userSaved;
    userSaved = JSON.parse(localStorage.getItem("user"));
    $("#userPage").empty();
    $("#userPage").append(`<h1>Good bye ${userSaved.fName} ${userSaved.lName}</h1>`)
    localStorage.removeItem("authorized");

}