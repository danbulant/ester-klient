const username = "Daniel Bulant";
const type = 3;
const typeString = (function () {
    switch (type) {
        case 1:
            return "Uživatel";
        case 2:
            return "Sponzor";
        case 3:
            return "Administrátor";
    }
})();

var accountElement = document.getElementById("username");
accountElement.innerText = username;

var typeElement = document.getElementById("type");
typeElement.innerText = typeString;