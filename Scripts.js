const WELCOMEMESSAGE = document.getElementById("logInMessage");
const CREDS = document.getElementById("creds");
const PFPCLASS = document.getElementById("drop");
const MAIN = window.parent.document.getElementById("main");
const NAME = document.getElementById("name");
const DATE = document.getElementById("dates");

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

function logOut() {
    setCookie("loggedIn", false, 1);
}

function isLoggedIn() {
    if (checkCookie("loggedIn", "true")) {
        WELCOMEMESSAGE.innerHTML = "";
        PFPCLASS.style.display = "inline-block";
        CREDS.hidden = true;
    }
    else {
        WELCOMEMESSAGE.innerHTML = "If you're new here, don't forget to create an account to save your favorite songs!";
        PFPCLASS.style.display = "none";
        CREDS.hidden = false;
    }
}

function openArtistPage() {
    G5.style.display = "none";
    SU.style.display = "none";
    LI.style.display = "block";
}

function createNewAccount() {
    console.log("Before: " + getCookie("user"));
    setCookie("user", document.getElementById("user").value, 1);
    setCookie("password", document.getElementById("password").value, 1);
    console.log("After: " + getCookie("user"));
}

function setCookie(cName, cValue, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    let expires = "expires="+ date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";SameSite=None;path=/;Secure";
}

function getDate(days) {
    let datePage = date;
    return datePage;
}


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

function checkCookie(cName) {
    if (getCookie(cName) != "") {
        return true;
    }
    return false;
}

function checkCookie(cName, entry) {
    if (getCookie(cName) == entry) {
        return true;
    }
    return false;
}

function validateForm() {
    if(false) {
        alert("Email already in use");
        return false;
    }
    console.log("Form: " + document.getElementById("user").value);
    createNewAccount();
    return true;
}

function openUser() {
    NAME.innerHTML = "NAME: " + getCookie("user");
}

function openDate() {
    DATE.innerHTML = getDate("date");
}