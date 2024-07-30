
const container = document.querySelector("#container");

for (let i = 0; i< 16; i++){

    let squareContainer = document.createElement("div")

    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.innerText = "Test"
    
        squareContainer.appendChild(square);
    }
    
    container.appendChild(squareContainer);
}
