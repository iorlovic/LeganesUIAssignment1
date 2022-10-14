const WELCOMEMESSAGE = document.getElementById("logInMessage");

function LoggedIn(loggedIn) {
    if (loggedIn) {
        WELCOMEMESSAGE.innerHTML = "";
    }
    else {
        WELCOMEMESSAGE.innerHTML = "If you're new here, don't forget to create an account to save your favorite songs!";
    }
}

function createNewAccount() {
    setCookie(user, document.getElementById("user"));
    console.log(document.getElementById("user"));
    console.log(getCookie(user));
    setCookie(password, document.getElementById("password"));
}

function setCookie(cName, cValue){
    document.cookie = cName + "=" + cValue +";path=/";
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
        while (c.charAt(0) == ''){
            c = c.substring(1);
        }
        if (c.indexOf(name)==0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {

}

function validateForm() {
    if(true) {
        createNewAccount();
        return true;
    }
    return false;
}
