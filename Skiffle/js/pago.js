const submit = document.getElementById("submit");
const container = document.getElementById("mensajeComprado");
const form = document.getElementById("formPagar");

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

document.getElementById("priceTotalMessage").innerText = "Your total is $" + sessionStorage.getItem("priceTotal");

submit.addEventListener("click",function(){
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let address = document.getElementById("address");
    let creditCard = document.getElementById("creditCard");
    if(name.value == "" || surname.value == "" || address.value == "" || creditCard.value == "")
    {
        alert("Information is required.")
    }else{
        if (confirm("Confirm purchase?")) {
            form.remove();
        submit.remove();

        const colDiv = document.createElement('div');
        colDiv.classList.add('col');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.classList.add('bg-dark');
        cardDiv.classList.add('text-white');

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.innerText = "Thank you for using Skiffle, " + name.value + "! Your order is on its way.";


        const addCartButton = document.createElement('a');
        addCartButton.setAttribute("href", "shop.html");
        addCartButton.classList.add('btn');
        addCartButton.classList.add('btn-primary');
        addCartButton.innerText = 'Return to shop';

        cardBodyDiv.appendChild(title);
        cardBodyDiv.appendChild(addCartButton);
        cardDiv.appendChild(cardBodyDiv);
        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);

        sessionStorage.clear("discos");
        }
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




