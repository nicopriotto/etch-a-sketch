// Function that creates the boxes within a line
function createLine(num, line) {
    for (let i = 0; i < num; i++) {
        var box = document.createElement("div");
        box.classList.add("square");
        line.appendChild(box);
    }
}

// Function that creates the grid itself, num x num
function createGrid(num) {
    for (let i = 0; i < num; i++) {
        var line = document.createElement("div");
        line.classList.add("line");
        container.appendChild(line);
        createLine(num, line);
    }
}

// Clear grid every time the amount of boxes change
function clearGrid(num) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const container = document.querySelector(".container");

// Slider to define grid size
const slider = document.querySelector(".slider");
createGrid(slider.value);
const girdSize = document.querySelector(".gridSize")
slider.oninput = function() {
    clearGrid(slider.value);
    girdSize.textContent = "Select Grid Size: " + this.value + " x " + this.value;
    createGrid(this.value);
}



