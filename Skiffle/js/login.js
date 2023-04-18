var login = document.getElementById("login");
if(login.innerText == "Login" || login.innerText == "")
{
  login.innerText = "Login";
  login.href = "#";
  
}
else {
  login.innerText = sessionStorage.getItem("mail");
  login.href = "cerrarsesion.html";
}

document.getElementById("button").addEventListener("click", function (event) {

  // Obtener los valores del formulario
  var mail = document.getElementById("mail");
  var password = document.getElementById("password");

  if (password.value == "") {
    alert("You need to provide a password")
  }
  else {
    sessionStorage.setItem('mail', mail.value);
    alert("Logged in");
    window.location.href = "index.html";
  }
});

document.getElementById("sign-up").addEventListener("click", function () {
  // Obtener los valores del formulario
  var mail = document.getElementById("mailSignup");
  var password = document.getElementById("passwordSignup");

  if (password.value == "") {
    alert("You need to provide a password")
  }
  else {

    sessionStorage.setItem('mail', mail.value);

    alert("You now have an account. You are logged in.");
    window.location.href = "index.html";
  }
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
