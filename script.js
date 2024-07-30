
const container = document.querySelector("#container");

for (let i = 0; i< 16; i++){

    let squareContainer = document.createElement("div")

    for (let i = 0; i < 16; i++) {

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

