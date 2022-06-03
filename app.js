//user fucntion
function User(email, password, fName, lName, age, address, phoneNumber, payment, color){
    this.email=email;
    this.password=password;
    this.fName=fName;
    this.lName=lName;
    this.age=age;
    this.address=address;
    this.phoneNumber=phoneNumber
    this.payment=payment;
    this.color=color;
}

function Login(userName, password){
    this.userName=userName;
    this.password=password;
}

// register function
function register() {
    // recupera los valores de los inputs usando jquery
    let userName = $("#txtEmail").val();
    let userPass = $("#txtPassword").val();
    let userFirstName = $("#txtFirstName").val();
    let userLastName = $("#txtLastName").val();
    let userAge = $("#txtAge").val();
    let userAddress= $("#txtAddress").val();
    let userPhone= $("#txtPhoneNumber").val();
    let userPayment= $("#txtPayment").val();
    let userColor= $("#txtColor").val();
    // console.log(userName,userPass,userFirstName,userLastName);
    //crerating the objet
    let newUser = new User(userName, userPass, userFirstName, userLastName,userAge,userAddress,userPhone,userPayment,userColor);
    console.log(newUser)
    $('input').val("");
}
function login() {
    // recupera los valores de los inputs usando jquery
    let userName = $("#txtUserName").val();
    let userPass = $("#txtpassword").val();
    //crerating the objet
    let newUserLog = new Login(userName, userPass);
    console.log(newUserLog)
    $('input').val("");
}

//init funciton
function init() {
    $("#btnRegister").click(register);
    $("#btnLogin").click(login);
}

window.onload = init;
