const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", search, false);

function search(){
    window.location.href="shop.html?="+searchInput.value;
}