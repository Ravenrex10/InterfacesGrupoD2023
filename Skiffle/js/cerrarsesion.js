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
