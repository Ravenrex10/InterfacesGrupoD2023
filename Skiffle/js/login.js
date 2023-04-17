var login = document.getElementById("login");
login.innerText = sessionStorage.getItem("mail");

document.getElementById("button").addEventListener("click", function(event) {
  
  // Obtener los valores del formulario
  var mail = document.getElementById("mail");
  sessionStorage.setItem('mail', mail.value);

  alert("Logged in");
  window.location.href="index.html";
});
