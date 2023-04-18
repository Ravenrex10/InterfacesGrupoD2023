var login = document.getElementById("login");
if(login.innerText == "Login" || login.innerText == "")
{
  login.innerText = "Login";
  login.href = "login.html";
}
else {
  login.innerText = sessionStorage.getItem("mail");
  login.href = "#";
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
