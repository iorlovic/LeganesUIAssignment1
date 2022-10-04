const WELCOMEMESSAGE = document.getElementById("logInMessage");

function LoggedIn(loggedIn) {
    if (loggedIn) {
        WELCOMEMESSAGE.innerHTML = "";
    }
    else {
        WELCOMEMESSAGE.innerHTML = "If you're new here, don't forget to create an account to save your favorite songs!";
    }
}

LoggedIn(false);