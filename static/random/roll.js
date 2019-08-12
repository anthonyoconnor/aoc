class Die {
    constructor(title, items) {
        this.title = title;
        this.items = items;
    }
}


class UI {
    static displayDice() {

        // let die = new Die("names3", ["anthony", "julie", "jack", "lily", "luke"]);
        // Store.addDie(die);

        const dice = Store.getDice();

        dice.forEach((die) => UI.addDiceToList(die));
    }

    static addDiceToList(die) {
        const list = document.querySelector('#dice-list');

        const row = document.createElement('div');
        row.innerHTML = `
        <h1>${die.title}</h1>
        <div id=${die.title}></div>
        `;

        list.appendChild(row);
    }
}

// Store Class: Handles Storage
class Store {
    static getDice() {
        let dice;
        if (localStorage.getItem('dice') === null) {
            dice = [];
        } else {
            dice = JSON.parse(localStorage.getItem('dice'));
        }

        return dice;
    }

    static addDie(die) {
        const dice = Store.getDice();
        dice.push(die);
        localStorage.setItem('dice', JSON.stringify(dice));
    }

    static removeDie(die) {
        const dice = Store.getDice();

        dice.forEach((_die, index) => {
            if (_die.title === die.title) {
                dice.splice(index, 1);
            }
        });

        localStorage.setItem('dice', JSON.stringify(dice));
    }
}


document.addEventListener('DOMContentLoaded', UI.displayDice);

document.getElementById("roll").addEventListener("click", (e) => {
    removeHighlightSelection();

    displayRandomItem();

    var timer = setInterval(function () {
        displayRandomItem();
    }, 250);

    setTimeout(function () {
        clearInterval(timer);
        highlightSelection();
    }, 6000);

});

function displayRandomItem() {
    const dice = Store.getDice();

    dice.forEach((die) => {
        let min = 0;
        let max = die.items.length;
        let random = Math.floor(Math.random() * (+max - +min)) + +min;
        let element = document.getElementById(die.title);
        if (element && die.items && die.items.length > 0) {
            element.innerHTML = die.items[random];
        }
    });
}

function highlightSelection() {
    const dice = Store.getDice();

    dice.forEach((die) => {
        let element = document.getElementById(die.title);
        if (element) {
            element.classList.add("highlighted");
        }
    });
}

function removeHighlightSelection() {
    const dice = Store.getDice();

    dice.forEach((die) => {
        let element = document.getElementById(die.title);
        if (element) {
            element.classList.remove("highlighted");
        }
    });
}

