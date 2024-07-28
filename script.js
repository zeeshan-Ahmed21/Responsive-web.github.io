function change(){
    const loginSection = document.getElementById("logsection");
    loginSection.style.display = "block";
    const regcloss = document.getElementById("regsection");
    regcloss.style.display = "none";
}
function logcancle(){
    const cancle = document.getElementById("logsection");
    cancle.style.display = "none";
}
function regbutton(){
    const registerdsection = document.getElementById("regsection");
    registerdsection.style.display = "block";
    const logcloss = document.getElementById("logsection");
    logcloss.style.display = "none";
}
function regcancle(){
    const regcancle = document.getElementById("regsection");
    regcancle.style.display = "none";
}


const users = [];  // Corrected to 'users'
function reg(){
    let firstname = document.getElementById("first-name").value;
    let lastname = document.getElementById("last-name").value;
    let email = document.getElementById("reg-email").value;
    // let age = Number(document.getElementById("age").value);
    let password = document.getElementById("reg-password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let pwd = password === confirmpassword;

    if (firstname && lastname && email && password && confirmpassword && pwd) {
        users.push({ firstname: firstname, lastname: lastname, email: email, password: password, confirmpassword: confirmpassword});  // Push object with both names
        console.log("You have successfully added a user");
        alert("Registration Succesfull");
        console.log(users);
        document.getElementById("first-name").value = '';  // Clear the first name input field
        document.getElementById("last-name").value = '';  // Clear the last name input field
        document.getElementById("reg-email").value = '';  // Clear the Email input field
        // document.getElementById("age").value = '';  // Clear the Age input field
        document.getElementById("reg-password").value = '';  // Clear the Password input field
        document.getElementById("confirmpassword").value = '';  // Clear the Confirm Password input field
    }
    else if(!firstname) {
        alert("Plz Fill Your Registration Form");
         console.log("First name input is empty");
        }
        else if(!lastname) {
            console.clear();
            console.log("last name input is empty");
           }
           else if(!email) {
            console.clear();
            console.log("Email input is empty");
           }
           else if(!password) {
            console.clear();
            console.log("Plz Enter Your Strong Password");
           }
           else if(!confirmpassword) {
            console.clear();
            console.log("Plz Confirm Your Password");
           }
           else if(password!==confirmpassword){
            alert("Your Confirmpassword Is Incorrect");
        }
}

function loginbutton(){
    let loginemail = document.getElementById("logemail").value;
    let loginpassword = document.getElementById("logpassword").value;
    let user = users.find(user => user.email === loginemail && user.password === loginpassword);

    if (user) {
        alert("Login successful");
        window.location.assign("home.html");
    } else {
        alert("Incorrect email or password");
    }


}
