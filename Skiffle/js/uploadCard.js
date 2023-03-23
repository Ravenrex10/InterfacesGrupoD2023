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

let cartItems = sessionStorage.getItem('discos');

const container = document.getElementById("vinyls-container");

vinyls.forEach((vinyl) => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.classList.add('bg-dark');
    cardDiv.classList.add('text-white');
    cardDiv.setAttribute('id', vinyl.id);


    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    const img = document.createElement("img");
    img.src = vinyl.image;
    img.classList.add("card-img-top");
    img.setAttribute("alt", "...");

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerText = vinyl.title;

    const price = document.createElement('p');
    price.classList.add('card-text');
    price.innerText = vinyl.price;

    const addCartButton = document.createElement('a');
    addCartButton.setAttribute("href", "#");
    addCartButton.addEventListener("click", function(){
        cartItems += vinyl.id+"+";
    });
    addCartButton.classList.add('btn');
    addCartButton.classList.add('btn-primary');
    addCartButton.innerText = 'Add to Cart';

    cardDiv.appendChild(img);
    cardBodyDiv.appendChild(title);
    cardBodyDiv.appendChild(price);
    cardBodyDiv.appendChild(addCartButton);
    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);
    container.appendChild(colDiv);
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener('input', function() {
  // coge el término buscado
  const searchTerm = this.value.toLowerCase();

  // creamos una lista de vinilos donde solo aparezcan los que coinciden su nombre
  const filteredVinyls = vinyls.filter(vinyl => vinyl.title.toLowerCase().includes(searchTerm));

  const vinylsContainer = document.querySelector('#vinyls-container');

  vinylsContainer.innerHTML = '';

  // html para crear los vinilos
  filteredVinyls.forEach(vinyl => {
    const card = `
      <div class="col">
        <div class="card bg-dark text-white">
          <img src="${vinyl.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${vinyl.title}</h5>
            <p class="card-text">Price: ${vinyl.price}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    `;
    vinylsContainer.innerHTML += card;
  });
});

const cartButton = document.getElementById("cart");
cartButton.addEventListener("click", function(){
    location.href="cart.html";
    sessionStorage.setItem('discos',cartItems);
});
// console.log(vinyls);


