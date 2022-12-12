// Set up the container by querying the appropriate div
const sketchContainer = document.querySelector("#sketchContainer");

// Set up a 2D for loop to create the 16x16 grid
for (rowNumber = 0; rowNumber < 16; rowNumber++) {

    // First create a 'row' div and append the rowNumber to its id
    const gridRow = document.createElement('div');
    gridRow.classList.add('row');
    gridRow.id = 'row' + rowNumber;
    sketchContainer.appendChild(gridRow);

    // Iterate to append each column item to the created row
    for (columnNumber = 0; columnNumber < 16; columnNumber++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('column');
        gridBox.id = 'column' + columnNumber;
        gridRow.appendChild(gridBox);
    }
}
