const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const vinyl = document.getElementById("recomendedVinyl"); 

searchButton.addEventListener("click", search, false);
vinyl.addEventListener("click", recomendedVinyl, false);

function search(){
    window.location.href="shop.html?search="+searchInput.value;
}

function recomendedVinyl() {
    window.location.href="shop.html?search=Moanin'";
}
