const squares = document.createElement("div");
const butt1 = document.querySelector("button");
const container = document.querySelector(".container")

butt1.textContent = "Grid Size"
squares.setAttribute("class", "squares");

container.appendChild(squares);

//button prompts user for number of squares per side (basically the size of the grid)
butt1.addEventListener("click", () => {
    let input = prompt("Specify a grid size between 1 and 100.");
    squares.innerHTML = "";
    createGrid(input);
});

function createGrid(num){
    squares.style.width = `${num*40}px`;
    for(let row = 0; row < num**2; row++){
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        //square.textContent = `${row+1}`;

        // change color on hover
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "teal";
        });

        squares.appendChild(square);
    };
};

// initialize 16 x 16 grid of squares
createGrid(16);