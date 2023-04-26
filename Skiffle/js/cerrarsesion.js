var login = document.getElementById("login");
if(sessionStorage.getItem("mail") != "" && sessionStorage.getItem("mail") != null)
{
    login.innerText = sessionStorage.getItem("mail");
    login.href = "#";
}
else {
    login.innerText = "Login";
    login.href = "login.html";
}

document.getElementById("button").addEventListener("click", function (event) {
  sessionStorage.removeItem("mail");
  window.location.href = "index.html";
});

document.getElementById("searchButton").addEventListener("click", search, false);
document.getElementById("searchInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        search();
    }
}, false);

function search(){
    window.location.href="shop.html?search="+searchInput.value;
}
