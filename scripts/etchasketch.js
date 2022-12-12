// Set up the container by querying the appropriate div
const sketchContainer = document.querySelector("#sketchContainer");
let nRowsUser = 16; // set a default number of rows / columns
const gridSize = 960; // set the maximum grid size


// Set up a 2D for loop to create the 16x16 grid
function setGrid (nRows) {
    for (rowNumber = 0; rowNumber < nRows; rowNumber++) {

    // First create a 'row' div and append the rowNumber to its id
    const gridRow = document.createElement('div');
    gridRow.classList.add('row');
    gridRow.id = 'row' + rowNumber;
    sketchContainer.appendChild(gridRow);

    // Iterate to append each column item to the created row
    for (columnNumber = 0; columnNumber < nRows; columnNumber++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('column');
        gridBox.id = 'column' + columnNumber;
        // gridSize - (2*nRows) accounts for 1px border either side of box
        boxSize = Math.floor((gridSize - (2*nRows)) / nRows) + "px";
        gridBox.style.width = boxSize;
        gridBox.style.height = boxSize;

        // add hover listeners and class modifiers
        gridBox.addEventListener('mouseenter', (e) => e.target.classList.add('hover'));
        gridBox.addEventListener('mouseleave', (e) => e.target.classList.remove('hover'));
        gridRow.appendChild(gridBox); 
        }
    }

}

function resizeGrid() {
    nRows = Number(prompt("Enter a number between 4 and 100:"))

    if ( !Number.isInteger(nRows)) {
        alert("Must enter an integer between 4 and 100.")
        return;
    }

    if ( nRows < 4 ) {
        nRows = 4;
    }

    else if ( nRows > 100 ) {
        nRows = 100;
    }

    nRowsUser = nRows;
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.lastChild)
    }
    setGrid(nRowsUser);
}

setGrid(nRowsUser) // set the grid up at the initial value

const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener('click', resizeGrid);

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', () => {
    nRowsUser = 16;
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.lastChild)
    }
    setGrid(nRowsUser);
});

