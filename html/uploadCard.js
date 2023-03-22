const vinyls = [

    {
        "image": "https://i.discogs.com/N4Euq7BBUMVwWmlskftJ_vZtBXC71LVwwtbi0gvjoV4/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODg4/MDEtMTQ3NTc3MDI1/MC0zNjkyLmpwZWc.jpeg",
        "title": "Delta and a thousand Blades",
        "price": "20$"
    },

    {
        "image": "https://i.discogs.com/BLb2qpCGiJ90OLh389AwftGVpJC3_S2UyzM-OJtnRKc/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODM2/NzI4LTE1ODc4MjQw/MDUtMzU5Mi5wbmc.jpeg",
        "title": "Delta's fury",
        "price": "20$"
    },

    {
        "image": "https://i.discogs.com/2qhXeTo4drpHNpzqAWc_jpzfDV1wQrfWp7qUCzCi_Cc/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTYyNTAz/NjEtMTYyNTI2MTI2/Ni04NTg4LmpwZWc.jpeg",
        "title": "My Blade",
        "price": "20$"
    },

    {
        "image": "https://i.discogs.com/GozxOkL1APz4EBJeauQ0Gvjk0Nmu7NthCsbCvplL4p4/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NzI4/NjMzLTE1OTY3MDA3/ODQtNDk5NS5qcGVn.jpeg",
        "title": "Hidratado pero Mesa",
        "price": "20$"
    },
];

const container = document.getElementById("vinyls-container");

vinyls.forEach((vinyl) => {

    const colDiv = document.createElement('div');
    colDiv.classList.add('col');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.classList.add('bg-dark');
    cardDiv.classList.add('text-white');

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
    addCartButton.href = '#';
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

// console.log(vinyls);


