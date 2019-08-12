class Die {
    constructor(title, items) {
        this.title = title;
        this.items = items;
    }
}


class UI {
    static displayDice() {

        document.getElementById("dice-list").innerHTML = "";

        const dice = Store.getDice();

        dice.forEach((die) => UI.addDiceToList(die));
    }

    static addDiceToList(die) {
        const list = document.querySelector('#dice-list');

        const dieSection = document.createElement('div');
        dieSection.className = "editDie";

        let header = document.createElement("H1")
        var t = document.createTextNode(die.title);
        header.appendChild(t);

        dieSection.appendChild(header);

        const itemSection = document.createElement('div');

        die.items.forEach((item) => {
            let itemDiv = document.createElement("div")
            let x = document.createTextNode(item);
            itemDiv.appendChild(x);
            itemSection.appendChild(itemDiv);
        });

        dieSection.appendChild(itemSection);

        const addSection = document.createElement('div');

        var inputBox = document.createElement('input');
        inputBox.type = "text";

        var addButton = document.createElement('input');
        addButton.type = "button"
        addButton.value = "Add";
        addButton.addEventListener('click', (e) => {
            Store.addItemToDie(die.title, inputBox.value);
            UI.displayDice();
        });

        addSection.appendChild(inputBox);
        addSection.appendChild(addButton);

        dieSection.appendChild(addSection);


        list.appendChild(dieSection);



        // row.appendChild(inputBox);
        // row.appendChild(addButton);


        // var addNewDieInput = document.createElement('input');
        // addNewDieInput.type = "text";


        // var addNewDieButton = document.createElement('input');
        // addNewDieButton.type = "button"
        // addNewDieButton.value ="Add";
        // addButton.addEventListener('click', (e) => {
        //     console.log("test", addNewDieInput.value);

        // });

        // row.appendChild(addNewDieInput);
        // row.appendChild(addNewDieButton);

        // let existing = die.items.map(item => {
        //     return "<div>" + item + "</div>";
        // })
        // let newInput = `<input id="newItem"><button id="add">Add</button>`
        // row.innerHTML = `<div class="editDie">
        // <h1>${die.title}</h1>
        // <hr>
        // </div>
        // `;

        // list.appendChild(row);
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

    static addItemToDie(title, item) {
        const dice = Store.getDice();
        dice.forEach((_die) => {
            if (_die.title === title) {
                _die.items.push(item);
            }
        });
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

    static clearAll() {
        localStorage.setItem('dice', JSON.stringify([]));
    }
}


document.addEventListener('DOMContentLoaded', UI.displayDice);

document.getElementById("clear").addEventListener("click", (e) => {
    Store.clearAll();
    UI.displayDice();
});

document.getElementById("add").addEventListener("click", (e) => {
    let inputText = document.getElementById("newDie").value;
    document.getElementById("newDie").value = "";
    let die = new Die(inputText, []);
    Store.addDie(die);
    UI.displayDice();
});



