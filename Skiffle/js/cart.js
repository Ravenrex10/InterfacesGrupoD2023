const vinyls = [

    {
        "id": 1,
        "image": "https://i.discogs.com/N4Euq7BBUMVwWmlskftJ_vZtBXC71LVwwtbi0gvjoV4/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODg4/MDEtMTQ3NTc3MDI1/MC0zNjkyLmpwZWc.jpeg",
        "title": "Delta and a thousand Blades",
        "price": "20$"
    },

    {
        "id": 2,
        "image": "https://i.discogs.com/BLb2qpCGiJ90OLh389AwftGVpJC3_S2UyzM-OJtnRKc/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODM2/NzI4LTE1ODc4MjQw/MDUtMzU5Mi5wbmc.jpeg",
        "title": "Delta's fury",
        "price": "20$"
    },

    {
        "id": 3,
        "image": "https://i.discogs.com/2qhXeTo4drpHNpzqAWc_jpzfDV1wQrfWp7qUCzCi_Cc/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTYyNTAz/NjEtMTYyNTI2MTI2/Ni04NTg4LmpwZWc.jpeg",
        "title": "My Blade",
        "price": "20$"
    },

    {
        "id": 4,
        "image": "https://i.discogs.com/GozxOkL1APz4EBJeauQ0Gvjk0Nmu7NthCsbCvplL4p4/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NzI4/NjMzLTE1OTY3MDA3/ODQtNDk5NS5qcGVn.jpeg",
        "title": "Hidratado pero Mesa",
        "price": "20$"
    },

];

const urlParams = new URLSearchParams(window.location.search);

let items = sessionStorage.getItem('discos');

if (items == null) {
    items = "";
}

const cartContainer = document.getElementById("cartContainer");
const itemsSplited = items.split("+");
let vinylsInCart;
for(let i = 0; i < itemsSplited.length; i++){

    vinyls.forEach((vinyl)=>{ if (vinyl.id == itemsSplited[i]){
        /*const card = `
                 <div class="col">
                    <div class="card bg-dark text-white">
                      <img src="${vinyl.image}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${vinyl.title}</h5>
                        <p class="card-text">Price: ${vinyl.price}</p>
                      </div>
                    </div>
                  </div>
                `;
                cartContainer.innerHTML += card;*/
        const newColumn = document.createElement("div");
        newColumn.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("bg-dark");
        card.classList.add("text-white");

        const imagen = document.createElement("img");
        imagen.src=vinyl.image;
        imagen.classList.add("card-img-top");
        imagen.alt="...";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.innerText=vinyl.title;
        cardTitle.classList.add("card-title");

        const cardPrice = document.createElement("p");
        cardPrice.innerText="Price: "+ vinyl.price;
        cardPrice.classList.add("card-text");

        const cardButton = document.createElement("button");
        cardButton.classList.add("btn");
        cardButton.classList.add("btn-danger");
        cardButton.innerText = "Remove";
        cardButton.addEventListener("click", removeItem, false);

        cartContainer.appendChild(newColumn);
        newColumn.appendChild(card);
        card.appendChild(imagen);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(cardButton);


        function removeItem(){
            itemsSplited.splice(i, 1);
            const newItems = itemsSplited.join("+");
            sessionStorage.setItem('discos', newItems);
            location.reload();
        }
    }
    });

}

if (items === "") {
    document.getElementById("payButton").remove();
    document.getElementById("borrarCarrito").remove();
    document.getElementById("cartMessage").innerText = "Your cart is empty";
}

// Funcion para borrar todo el carrito
const borrarCarrito = document.getElementById("borrarCarrito");
borrarCarrito.addEventListener("click", function()
{
    if (confirm("Are you sure you want to clear the cart?")) {
        sessionStorage.clear("discos");
        location.reload();
    }
});





