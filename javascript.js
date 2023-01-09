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

// Changing Colors while hovering
function hoverColor(color) {
    var box = document.querySelectorAll(".square");
    box.forEach ((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = color;
        })
    })
}

// Changes color to the one selected
const colorPen = document.querySelector(".color");
    colorPen.addEventListener('input', () => {
    hoverColor(colorPen.value);
});

// Changes background-color to the one selected
const colorBackground = document.querySelector(".backgroundColor");
colorBackground.addEventListener('input', () => {
    const box = document.querySelectorAll('.square');
    box.forEach((box) => {
      box.style.backgroundColor = colorBackground.value;
    });
});

// Slider to define grid size
const slider = document.querySelector(".slider");
createGrid(slider.value);
const girdSize = document.querySelector(".gridSize")
slider.oninput = function() {
    clearGrid(slider.value);
    girdSize.textContent = "Grid Size: " + this.value + " x " + this.value;
    createGrid(this.value);
    hoverColor(colorPen.value);
}

// For when you start the page 
hoverColor(colorPen.value);

// Erase & Clear buttons
const erase = document.querySelector(".erase");
const clear = document.querySelector(".clear");

erase.addEventListener('click', () => {
    if (colorBackground.value != "#000000") {
        hoverColor(colorBackground.value);
    } else {
        hoverColor("white")
    }
    erase.classList.add("bigButton");
    setTimeout( () => {
        erase.classList.remove("bigButton");
    }, 300);
})

clear.addEventListener('click', () => {
    if (colorBackground.value != "#000000") {
        const box = document.querySelectorAll('.square');
        box.forEach((box) => {
        box.style.backgroundColor = colorBackground.value;
    }); 
    } else {
        const box = document.querySelectorAll('.square');
        box.forEach((box) => {
        box.style.backgroundColor = "white";
        });
    }
    clear.classList.add("bigButton");
    setTimeout( () => {
        clear.classList.remove("bigButton");
    }, 300);
})