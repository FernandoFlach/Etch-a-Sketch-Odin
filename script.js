
const container = document.querySelector("#container");
const button = document.querySelector("#button");

button.addEventListener("click", createGrid);


function createGrid() {

    container.innerHTML = "<div></div>"

    let size = prompt("What size is the grid?");

    while (size > 100){
        size = prompt("What size is the grid?");
    }

    for (let i = 0; i < size; i++){

        let squareContainer = document.createElement("div");
        squareContainer.classList.add("squareContainer");

        for (let i = 0; i < size; i++) {

            let square = document.createElement("div");
            square.classList.add("square");
            //square.innerText = "Test"
            square.addEventListener("mouseover", () => {square.style.backgroundColor = "black"})
        
            squareContainer.appendChild(square);
        }
        
        container.appendChild(squareContainer);

        let hovered = document.querySelector(".square:hover");
        if (hovered != null) {
            hovered.textContent = "hovered";
            hovered.style.backgroundColor = "black";
        }
    
    }
}
