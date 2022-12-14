const WELCOMEMESSAGE = document.getElementById("logInMessage");
const SC = document.getElementById("sc");
const CREDS = document.getElementById("creds");
const PFPCLASS = document.getElementById("drop");
const MAIN = window.parent.document.getElementById("main");
const SEARCHINPUT = window.parent.document.getElementById("searchInput");
const SEARCHTEXT = document.getElementById("headerSearch");
const NAME = document.getElementById("name");
const DATE = document.getElementById("dates");

// Checks if login/password creds match and logs user in
function logIn() { 
    console.log("User Cookie: " + getCookie("user"));
    console.log("User Form: " + document.getElementById("user").value);
    console.log("Password Cookie: " + getCookie("password"));
    console.log("Password Form: " + document.getElementById("password").value);
    if (!checkCookie("user", document.getElementById("user").value)) {
        alert("Username does not exist")
        return false;
    }
    if (!checkCookie("password", document.getElementById("password").value)) {
        alert("Wrong username/password combination");
        return false;
    }
    console.log("Correct credentials")
    setCookie("loggedIn", true, 1);
    parent.location.reload();
    return true;
}
// Logs user out
function logOut() {
    setCookie("loggedIn", false, 1);
}
//Changes scene based on if user is logged in
function isLoggedIn() {
    if (checkCookie("loggedIn", "true")) {
        WELCOMEMESSAGE.innerHTML = "";
        PFPCLASS.style.display = "inline-block";
        CREDS.hidden = true;
        SC.style.display = "grid";
    }
    else {
        WELCOMEMESSAGE.innerHTML = "If you're new here, don't forget to create an account to save your favorite songs!";
        PFPCLASS.style.display = "none";
        CREDS.hidden = false;
        SC.style.display = "none";
    }
}
// Sets title for search results
function search() {
    SEARCHTEXT.innerHTML = "Search Results For: " + SEARCHINPUT.value;
}  
// Sets all cookies for account creation
function createNewAccount() {
    console.log("Before: " + getCookie("user"));
    setCookie("user", document.getElementById("user").value, 1);
    setCookie("password", document.getElementById("password").value, 1);
    setCookie("first", document.getElementById("first").value, 1);
    setCookie("last", document.getElementById("last").value, 1);
    setCookie("email", document.getElementById("email").value, 1)
    setCookie("dob", document.getElementById("dob").value, 1)
    console.log("After: " + getCookie("user"));
    parent.location.reload();
}
// Creates a cookie
function setCookie(cName, cValue, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    let expires = "expires="+ date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";SameSite=None;path=/;Secure";
}
// Returns cookie value
function getCookie(cName) {
    let name = cName + "=";

    //can handle cookies with special chars
    let decodedCookie = decodeURIComponent(document.cookie);
    let charArray = decodedCookie.split(';');
    
    //iterates through char array of each cookie string
    for (let i = 0; i < charArray.length; i++){
        let c = charArray[i];
        
        //
        while (c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if (c.indexOf(name)==0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// Checks if cookie exists
function checkCookie(cName) {
    if (getCookie(cName) != "") {
        return true;
    }
    return false;
}
// Checks if cookie = specific entry
function checkCookie(cName, entry) {
    if (getCookie(cName) == entry) {
        return true;
    }
    return false;
}
// Checks if email already in use before creating new account
function validateForm() {
    if(checkCookie("email", document.getElementById("email").value)) {
        alert("Email already in use");
        return false;
    }
    console.log("Form: " + document.getElementById("user").value);
    createNewAccount();
    return true;
}
// Helper function to add specifications before modifying your account info if needed
function validateModify() {
    createNewAccount();
    return true;
}
// Inputs user name for profile screen
function openUser() {
    NAME.innerHTML = "NAME: " + getCookie("user");
}
// Sets placeholders and values for account screen
function setPlaceholders() {
    var user = document.getElementById("user");
    var pass = document.getElementById("password");
    var first = document.getElementById("first");
    var last = document.getElementById("last");
    var email = document.getElementById("email");
    var dob = document.getElementById("dob");
    user.placeholder = getCookie("user");
    user.value = getCookie("user");
    pass.placeholder = getCookie("password");
    pass.value = getCookie("password");
    first.placeholder = getCookie("first");
    first.value = getCookie("first");
    last.placeholder = getCookie("last");
    last.value = getCookie("last");
    email.placeholder = getCookie("email");
    email.value = getCookie("email");
    dob.placeholder = getCookie("dob");
    dob.value = getCookie("dob");
}