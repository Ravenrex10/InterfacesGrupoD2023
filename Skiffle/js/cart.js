const vinyls = [

  {
    "id": 1,
    "image": "https://i.discogs.com/N4Euq7BBUMVwWmlskftJ_vZtBXC71LVwwtbi0gvjoV4/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODg4/MDEtMTQ3NTc3MDI1/MC0zNjkyLmpwZWc.jpeg",
    "title": "Delta and a thousand Blades",
    "artist": "Deltablei",
    "price": "50$"
  },

  {
    "id": 5,
    "image": "images/vinyl.jpg",
    "title": "Moanin'",
    "artist": "Art Blakey & Jazz Messengers",
    "price": "40$"
  },

  {
    "id": 6,
    "image": "https://i.discogs.com/WIcmVaAsfOwxgaKApPMciVitogXJEkSAl1TyIhxTNRw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NDk2/MzYtMTI2NTk0ODA5/NC5qcGVn.jpeg",
    "title": "Master of Puppets",
    "artist": "Metallica",
    "price": "20$"
  },

  {
    "id": 7,
    "image": "https://i.discogs.com/J5KwUEiruM9nFJ2M8i5Ru8q-O9zKhPDeenbSoEpuiBE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0NDc3/MTItMTQ1NjkxMjMz/NS05NzQzLmpwZWc.jpeg",
    "title": "Estopa",
    "artist": "Estopa",
    "price": "25$"
  },
  {
    "id": 8,
    "image": "https://i.discogs.com/_QmUgeMNOZ6HPKn242RWSoor2bOgoe5Wz4LyRQT-KKo/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4MDk4/MC0xNDM4NDYxMzcy/LTQxNDIuanBlZw.jpeg",
    "title": "Highway to Hell",
    "artist": "ACDC",
    "price": "69$"
  },

  {
    "id": 9,
    "image": "https://i.discogs.com/zvdXRD6psM_VkGLam4euRJIZ7o-fq1o8c6zwRlafsM8/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMTQz/MTYtMTIyNTA2NDI2/OS5qcGVn.jpeg",
    "title": "Everything goes numb",
    "artist": "Streetlight Manifesto",
    "price": "30$"
  },
  {
    "id": 10,
    "image": "https://i.discogs.com/wjjMk1xCKdaPbsUbaXWzHBNi3K-fmt3CYkQGqt0c_Z8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyNzYx/ODMtMTY3NzAwMzM5/Ni0yMDQ1LmpwZWc.jpeg",
    "title": "Kind of Blue",
    "artist": "Miles Davis",
    "price": "55$"
  },

  {
    "id": 3,
    "image": "https://i.discogs.com/2qhXeTo4drpHNpzqAWc_jpzfDV1wQrfWp7qUCzCi_Cc/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTYyNTAz/NjEtMTYyNTI2MTI2/Ni04NTg4LmpwZWc.jpeg",
    "title": "They Kicked Me From A Band",
    "artist": "Vicolon't",
    "price": "10$"
  },

  {
    "id": 11,
    "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81o6k0bPesL._SL1425_.jpg",
    "title": "The Black Parade",
    "artist": "My Chemical Romance",
    "price": "15$"
  },
  {
    "id": 12,
    "image": "https://i.discogs.com/OXa5t4aczEk-YiQFOyEOuYeY2WTuPrzGsVxgsx9T1ig/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0ODc4/NDg2LTE2NjYzNTc4/MzgtODc5NC5qcGVn.jpeg",
    "title": "Midnights",
    "artist": "Taylor Swift",
    "price": "75$"
  },
  {
    "id": 13,
    "image": "https://i.discogs.com/Y0dubrWCAJsnPJfUINdSvQRupz8sIdRJz8cv-XFhL1I/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4OTU1/MDItMTM5OTE5NzM1/My05NDgyLmpwZWc.jpeg",
    "title": "Humbug",
    "artist": "Arctic Monkeys",
    "price": "20$"
  },

  {
    "id": 4,
    "image": "https://i.discogs.com/GozxOkL1APz4EBJeauQ0Gvjk0Nmu7NthCsbCvplL4p4/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NzI4/NjMzLTE1OTY3MDA3/ODQtNDk5NS5qcGVn.jpeg",
    "title": "Hidratado pero Mesa",
    "artist": "James Table",
    "price": "15$"
  },
  {
    "id": 14,
    "image": "https://i.discogs.com/-lQEjzCDqCQ_jNOEFpBZeSoQY-JFf03oNq17M1gpYcU/rs:fit/g:sm/q:90/h:580/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0NjA5/NTctMTMzMTI2NzI4/NS5qcGVn.jpeg",
    "title": "Diamond Life",
    "artist": "Sade",
    "price": "45$"
  },
  {
    "id": 15,
    "image": "https://i.discogs.com/6dBCd5ilQQQRBGf1p6kEjzATY8EdRgEqz2e8J80fjGw/rs:fit/g:sm/q:90/h:475/w:485/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2NjQ1/NTMtMTM5OTMxNjkw/NS03NjgwLmpwZWc.jpeg",
    "title": "Yo, minoría absoluta",
    "artist": "Extremo Duro",
    "price": "15$"
  },
  {
    "id": 21,
    "image": "https://i.discogs.com/_1djgr_cmgajmivwJDVN5Y7Zv4HA8wtUAn51vmbujs4/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ2MzU5/Ny0xNjc1ODg2OTE1/LTIxMTQuanBlZw.jpeg",
    "title": "Wish You Were Here",
    "artist": "Pink Floyd",
    "price": "20$"
  },
  {
    "id": 28,
    "title": "Not in my bed",
    "image": "https://ih1.redbubble.net/image.3780779577.9961/ccp,small,square_product,1000x1000.jpg",
    "artist": "James Table",
    "price": "65$"
  },
  {
    "id": 16,
    "image": "https://i.discogs.com/YzhtLts7LkthVlFHqcaq5ZNZ59GEwslZA9KCw556CSc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NTIz/My0xNDI2MTY2MTc0/LTkwODYuanBlZw.jpeg",
    "title": "Songs in the key of life",
    "artist": "Stevie Wonder",
    "price": "32$"
  },
  {
    "id": 23,
    "image": "https://i.discogs.com/J1XaVLyS_wZUz_tl6tLmGpKVmIIF6p2_tDdL2GuOi2E/rs:fit/g:sm/q:90/h:225/w:225/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyNDE3/MzYtMTM1OTQ3NzEz/My01NTg4LmpwZWc.jpeg",
    "title": "Son Ilusiones",
    "artist": "Los Chichos",
    "price": "100$"
  },
  {
    "id": 17,
    "image": "https://i.scdn.co/image/ab67616d0000b27363e163ead118db13035c323f",
    "title": "Ira dei",
    "artist": "Mägo de Oz",
    "price": "12$"
  },

  {
    "id": 2,
    "image": "https://i.discogs.com/BLb2qpCGiJ90OLh389AwftGVpJC3_S2UyzM-OJtnRKc/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODM2/NzI4LTE1ODc4MjQw/MDUtMzU5Mi5wbmc.jpeg",
    "title": "Delta's fury",
    "artist": "Wild Dani",
    "price": "30$"
  },
  {
    "id": 24,
    "image": "https://i.discogs.com/8POgHFUJSuNX92ueOEjqD974vOE2RgbrMqTWexX6VsI/rs:fit/g:sm/q:90/h:225/w:225/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwMzA4/NjItMTQzMjA3MjIz/Ni02NjQyLmpwZWc.jpeg",
    "title": "Shrek The Musical",
    "artist": "Jeanine Tesori",
    "price": "350$"
  },
  {
    "id": 26,
    "image": "https://i.discogs.com/L_VyYyJq5qz9dKeMRuRSGg3ftbl-sadWu4oaJotdn-M/rs:fit/g:sm/q:90/h:600/w:588/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNDE2/MTgtMTM5MDY3OTAy/NS0yMzcyLmpwZWc.jpeg",
    "title": "The Wall",
    "artist": "Pink Floyd",
    "price": "30$"
  },

  {
    "id": 18,
    "image": "https://i.discogs.com/UzOVsidig6oqt8HnKyd3JBzigVLyWuc_J3OYOqvU6ME/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyMTI3/MjItMTM1ODY5Njk0/OC02ODMzLmpwZWc.jpeg",
    "title": "Bone Structure",
    "artist": "Wycliffe Gordon",
    "price": "25$"
  },
  {
    "id": 19,
    "image": "https://i.discogs.com/pU2rfxJKyHRPQofpc2vFX3dzZ7i_kje9HdRQb6g3psM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2OTQw/OC0xMjQ1MzgwNTQw/LmpwZWc.jpeg",
    "title": "Hybrid Theory",
    "artist": "Linkin Park",
    "price": "15$"
  },
  {
    "id": 20,
    "image": "https://i.discogs.com/fZJ1BSdJ4r8Pz6rr8m6dJ8VCnqs3XAEB3ElkYRrGads/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg0NDkw/NC0xMTY0NzEyNzc4/LmpwZWc.jpeg",
    "title": "Demon Days",
    "artist": "Gorillaz",
    "price": "23$"
  },
  {
    "id": 22,
    "image": "https://i.discogs.com/zXG-O4nf8IAEJbD76pJcOTP87V9prsHUkyNswLvGQL8/rs:fit/g:sm/q:90/h:304/w:320/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUyODcy/NDItMTM5ODIyMjM5/OS00MDQyLmpwZWc.jpeg",
    "title": "Wish You Were Here",
    "artist": "Badfinger",
    "price": "10$"
  },
  {
    "id": 25,
    "image": "https://i.discogs.com/O0Axawoa5MwOD1jcV0tnlGa6PUQJDuQ8WvZILCtd_gM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzMjk0/MDYtMTQwODQ2NzU4/OC00OTc5LmpwZWc.jpeg",
    "title": "Favourite Worst Nightmare",
    "artist": "Arctic Monkeys",
    "price": "25$"
  },
  {
    "id": 27,
    "title": "30",
    "image": "https://i.discogs.com/hdxv-bzKMxY8Yh8OB2OZI59p0ezHJaXjbSB7i3q5-nc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMDI4/NDI5LTE2MzczMjIz/NzEtMTk0Ni5qcGVn.jpeg",
    "artist": "Adele",
    "price": "50$"
  }

];

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

// Función para volver a la tienda
const volverButton = document.getElementById("returnLink");
volverButton.addEventListener("click", function()
{
  window.location.href="shop.html"
})

const urlParams = new URLSearchParams(window.location.search);

let items = sessionStorage.getItem('discos');

if (items == null) {
    items = "";
}

const cartContainer = document.getElementById("cartContainer");
const itemsSplited = items.split("+");
let vinylsInCart;
let priceTotal = 0;
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
        imagen.alt=vinyl.title;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.innerText=vinyl.title;
        cardTitle.classList.add("card-title");

        const artist = document.createElement('h6');
        artist.classList.add('card-text');
        artist.innerText = vinyl.artist;

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
        cardBody.appendChild(artist);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(cardButton);

        priceTotal += parseInt(vinyl.price.replace("$",""));

        function removeItem(){
            itemsSplited.splice(i, 1);
            const newItems = itemsSplited.join("+");
            sessionStorage.setItem('discos', newItems);
            location.reload();
        }
    }
    });

}

// mostrar el total
document.getElementById("totalPrice").innerText = "Your total: " + priceTotal + "$";
sessionStorage.setItem("priceTotal", priceTotal);

if (items === "") {
    document.getElementById("payButton").remove();
    document.getElementById("borrarCarrito").remove();
    document.getElementById("totalPrice").remove();
    document.getElementById("cartMessage").innerText = "Your cart is empty";
} else {
  document.getElementById("returnLink").remove();
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

document.getElementById("searchButton").addEventListener("click", search, false);
document.getElementById("searchInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        search();
    }
}, false);

function search(){
    window.location.href="shop.html?search="+searchInput.value;
}
