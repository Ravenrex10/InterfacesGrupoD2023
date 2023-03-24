const submit = document.getElementById("submit");
const container = document.getElementById("mensajeComprado");
const form = document.getElementById("formPagar");

submit.addEventListener("click",function(){
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    const mensaje = document.createElement("h5");
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
    title.innerText = "Gracias por comprar, " + name.value;


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


});




