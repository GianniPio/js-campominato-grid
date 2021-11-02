// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro

// 1. Far scegliere all'utente la difficoltà -> while
    // 1.1 Deve scegliere tra 3 numeri, in base al numero scelto, decide la difficoltà

// 2. Creare le funzioni per la creazione della griglia
    // 2.1 In base al numero scelto, si attiva una funzione diversa -> if


// 3. In base alla difficoltà scelta, viene creare la griglia
    // 3.1 Difficoltà 1 = 10X10
    // 3.2 Difficoltà 2 = 9X9
    // 3.3 Difficoltà 3 = 7X7

// 4. Generare numeri -> for

const container = document.getElementById("container-grid");

var numDiff = 0; 

while ((numDiff < 1 ) || (numDiff > 3)) {
    numDiff = parseInt(prompt("Scegli un numero: 1 - Facile / 2 - Intermedio / 3 - Difficile"));
}

if (numDiff === 1) {
    
    for (let i = 0; i < 100; i++) {

        let newGrid = generetedGrid("div", "square1")
        
        container.append(newGrid);
    }

} else if (numDiff === 2) {
    
    for (let i = 0; i < 81; i++) {

        let newGrid = generetedGrid("div", "square2")
        
        container.append(newGrid);
    }
} else if (numDiff === 3) {

    for (let i = 0; i < 49; i++) {

        let newGrid = generetedGrid("div", "square3")
        
        container.append(newGrid);
    }

}









// funzioni

function generetedGrid(gridElement, gridClass) {
    
    let grid = document.createElement(gridElement);
    grid.classList.add(gridClass);

    return grid

}


