// Set up the container by querying the appropriate div
const sketchContainer = document.querySelector("#sketchContainer");
let nRowsUser = 16; // set a default number of rows / columns
const gridSize = 960; // set the maximum grid size
const darkenSpeed = 50;

function darken(e) {
    // subtract a given amount from the brightness of a div
    // first get the rgb() of the target of the function
    let rgbString = getComputedStyle(e.target).getPropertyValue("background-color")
    // split into the individual RGB values and create an Array of them
    rgb = rgbString.slice(rgbString.indexOf("(") + 1, rgbString.indexOf(")")).split(", ")
    // subtract the given darkenSpeed from each RGB value
    rgbNew = rgb.map( function(x) { 
        // don't go below 0
        if (x > 0) { return x - darkenSpeed }
        else return 0 ; });
    // create the new string to plug back into the DOM
    let newRgbString = "rgb(" + String(rgbNew[0]) + ", " + String(rgbNew[1] + ", " + String(rgbNew[2] + ")"))
    e.target.style.backgroundColor = newRgbString;
}

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
        gridBox.addEventListener('mouseenter', darken);
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
    // remove the existing rows one by one
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.lastChild)
    }
    // set a new grid with n rows/columns
    setGrid(nRowsUser);
}

setGrid(nRowsUser) // set the grid up at the initial value

// set up the resizeButton
const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener('click', resizeGrid);

// set up the resetButton with a quick shim function
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', () => {
    nRowsUser = 16;
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.lastChild)
    }
    setGrid(nRowsUser);
});

