function generateDivs(numberOfDivs) {
    for (let i = 0; i < numberOfDivs; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");

        for (let j = 0; j < numberOfDivs; j++) {
            let div = document.createElement("div");
            rowDiv.appendChild(div);
        }
        
        container.appendChild(rowDiv);
    }
}

let container = document.querySelector(".container");

generateDivs(16);