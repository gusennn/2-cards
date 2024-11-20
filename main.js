import Card from './card.js'


let newGame = (container, cardsCount) => {
    let cardsAreaArray = [];
    let cardsArray = [];
    let firstCard = null;
    let secondCard = null;


    for (let i = 1; i <= cardsCount / 2 ; i++) {
        cardsAreaArray.push (i)
        cardsAreaArray.push (i)
    }


    cardsAreaArray = cardsAreaArray.sort (() => Math.random () - 0.5);

    let tomeOutId;
    let timer =()=> {
        clearInterval(tomeOutId);
        tomeOutId = setInterval(timeHandler, 200);
    };
    let timeHandler =()=> {
        alert('Победа')
        clearInterval(tomeOutId);
    };

    let flip = (card) => {
        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number !== secondCard.number) {
                firstCard.open = false
                secondCard.open = false
                firstCard = null
                secondCard = null
            }
        }

        if (firstCard == null) {
            firstCard = card
        } else {
            if (secondCard == null) {
                secondCard = card
            }
        }

        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number == secondCard.number) {
                firstCard.success = true
                secondCard.success = true
                firstCard = null
                secondCard = null
            }
        }

        if (document.querySelectorAll('.card.success').length == cardsAreaArray.length) {
            timer()
            container.innerHTML = ''
            cardsAreaArray = [];
            cardsArray = [];
            firstCard = null;
            secondCard = null;

            newGame(container, cardsCount)
        }

    }

    for (let cardNumber of cardsAreaArray) {
        cardsArray.push (new Card (container, cardNumber, flip))
    }
}



newGame (document.getElementById ('game'), 8)



