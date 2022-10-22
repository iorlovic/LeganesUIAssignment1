

function isLoggedIn() {
    if (checkCookie("user")) {
        WELCOMEMESSAGE.innerHTML = "";
    }
    else {
        WELCOMEMESSAGE.innerHTML = "If you're new here, don't forget to create an account to save your favorite songs!";
    }
}

function createNewAccount() {
    console.log(getCookie("user"));
    setCookie("user", document.getElementById("user").value, 1);
    console.log(document.getElementById("user").value);
    console.log(getCookie("user"));
}

function setCookie(cName, cValue, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    let expires = "expires="+ date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
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

function validateForm() {
    if(true) {
        createNewAccount();
        return true;
    }
    return false;
}