const container = document.querySelector(".container");
const colorPen = document.querySelector(".color");
const colorBackground = document.querySelector(".backgroundColor");
const slider = document.querySelector(".slider");
const girdSize = document.querySelector(".gridSize")
const erase = document.querySelector(".erase");
const clear = document.querySelector(".clear");
const rainbow = document.querySelector(".rainbow");
const pastel = document.querySelector(".pastel")

// GRID //
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

// Slider to define grid size
createGrid(slider.value);
slider.oninput = function() {
    clearGrid(slider.value);
    girdSize.textContent = "Grid Size: " + this.value + " x " + this.value;
    createGrid(this.value);
    hoverColor(colorPen.value);
    backgroundColorSet();
}

// PEN COLORS //

// For when you start the page 
hoverColor(colorPen.value);

// Function that changes Colors while hovering
function hoverColor(color) {
    var box = document.querySelectorAll(".square");
    box.forEach ((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = color;
        })
    })
}

// Changes color to the one selected
colorPen.addEventListener('input', () => {
    hoverColor(colorPen.value);
});

// Rainbow Button
function toggleRainbow(e) {  // Generates random color
    var p1 = Math.floor(Math.random()*255);
    var p2 = Math.floor(Math.random()*255);
    var p3 = Math.floor(Math.random()*255);
    var finalColor = `rgb(${p1},${p2},${p3})`
    e.target.style.backgroundColor  = finalColor;
}
rainbowCounter = 0
rainbow.addEventListener('click', () => {
    rainbowCounter++;
    if (rainbowCounter % 2 == 1) {
        rainbow.classList.add("bigButton");
        const box = document.querySelectorAll(".square");
        box.forEach((box) => {
            box.addEventListener('mouseover', toggleRainbow);   
        })
    } else {
        const box = document.querySelectorAll(".square");
        box.forEach((box) => {
            box.removeEventListener('mouseover', toggleRainbow);   
          })
        hoverColor(colorPen.value);
        rainbow.classList.remove("bigButton");
    }
})

// Pastel Button
function togglePastel(e) {  // Generates random color
    var p1= Math.floor(Math.random() * 128) + 128;
    var p2= Math.floor(Math.random() * 128) + 128;
    var p3= Math.floor(Math.random() * 128) + 128;
    var finalColor = `rgb(${p1},${p2},${p3})`
    e.target.style.backgroundColor  = finalColor;
}
pastelCounter = 0
pastel.addEventListener('click', () => {
    pastelCounter++;
    if (pastelCounter % 2 == 1) {
        pastel.classList.add("bigButton");
        const box = document.querySelectorAll(".square");
        box.forEach((box) => {
            box.addEventListener('mouseover', togglePastel);   
        })
    } else {
        const box = document.querySelectorAll(".square");
        box.forEach((box) => {
            box.removeEventListener('mouseover', togglePastel);   
          })
        hoverColor(colorPen.value);
        pastel.classList.remove("bigButton");
    }
})
    
  
// Erase Button
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

// BACKGROUND //

// Changes background-color to the one selected
function backgroundColorSet() {
    const box = document.querySelectorAll('.square');
    box.forEach((box) => {
        box.style.backgroundColor = colorBackground.value;
    });
}

colorBackground.addEventListener('input', () => {
    backgroundColorSet();
});

// Clear Button
clear.addEventListener('click', () => {
    if (colorBackground.value != "#000000") {
        backgroundColorSet(); 
    } else {
        const box = document.querySelectorAll('.square');
        backgroundColorSet();
    }
    clear.classList.add("bigButton");
    setTimeout( () => {
        clear.classList.remove("bigButton");
    }, 300);
})
