let contenedor = document.getElementById("contenedor");   
let cards = document.getElementsByClassName("cards");
let cartas = document.getElementsByClassName("carta");
let tarjetasBack = document.getElementsByClassName("tarjetaBack");
let buttonRestart = document.querySelector(".boton-reinicio");

let cartasActivas = [];
let carta;
let activeCounter = 0;

let images = [
    {
        urlFront: "Images/homero.png",
    },
    {
        urlFront: "Images/bart.png",
    },
    {
        urlFront: "Images/marge.png",
    },
    {
        urlFront: "Images/lisa.png",

    },
    {
        urlFront: "Images/maggie.png",
    }
];
function generateRandom(arr) {

    let repeatedCards = [];
    for (let i = 0; i < arr.length; i++) {
        repeatedCards.push(arr[i]);
    }


    let allCards = arr.concat(repeatedCards);

    for (let i = allCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = allCards[i];
        allCards[i] = allCards[j];
        allCards[j] = temp;
    }

    return allCards;
}


let gen = generateRandom(images)

for(let i = 0; i < cards.length; i++){
    cards[i].src = gen[i].urlFront;
}

contenedor.addEventListener("click", (e) =>{
    
    if(e.target.tagName === "IMG"){
        carta = (e.target.parentElement).parentElement;
        carta.classList.add("tarjetaClick");
        cartasActivas.push(carta);
        
    }

    if(cartasActivas.length == 2){
        let imagen1 = cartasActivas[0].children[0].children[0];
        let imagen2 = cartasActivas[1].children[0].children[0];
        
        if (imagen1.src != imagen2.src){    
            setTimeout(function (){
                this[0].classList.remove("tarjetaClick");
                this[1].classList.remove("tarjetaClick");

            }.bind(cartasActivas), 500);

        }else{
            activeCounter += 2;
        }

        cartasActivas = [];
    }

    if(activeCounter === 10){
        setTimeout(() =>{
            appendButton();
        }, 300);
        activeCounter = 0;
    }

    
});


function appendButton(){
    buttonRestart.classList.add("boton-reinicio-activa");
    buttonRestart.onclick = () => {
        [...cartas].forEach(x => {
            x.classList.remove("tarjetaClick");
        });


        buttonRestart.classList.remove("boton-reinicio-activa");
    }

}






 