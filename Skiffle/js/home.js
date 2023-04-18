const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const vinyl = document.getElementById("recomendedVinyl"); 

var login = document.getElementById("login");
if(sessionStorage.getItem("mail") != "" && sessionStorage.getItem("mail") != null)
{
    login.innerText = sessionStorage.getItem("mail");
    login.href = "cerrarsesion.html";
}
else {
    login.innerText = "Login";
    login.href = "login.html";
}

searchButton.addEventListener("click", search, false);
vinyl.addEventListener("click", recomendedVinyl, false);

searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        search();
    }
}, false);

function search(){
    window.location.href="shop.html?search="+searchInput.value;
}

function recomendedVinyl() {
    window.location.href="shop.html?search=Moanin'";
}
