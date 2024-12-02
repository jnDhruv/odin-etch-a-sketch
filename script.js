function generateDivs(numberOfDivs) {
    for (let i = 0; i < numberOfDivs; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");

        for (let j = 0; j < numberOfDivs; j++) {
            let div = document.createElement("div");

            div.addEventListener("mouseover", (e) => {
                div.classList.add("hovered");
            });

            rowDiv.appendChild(div);
        }
        
        container.appendChild(rowDiv);
    }
}

function clickedClear() {
    let allHoveredDivs = document.querySelectorAll(".hovered");

    for (let i = 0; i < allHoveredDivs.length; i++) {
        allHoveredDivs.item(i).classList.remove("hovered");
    }
}

function clickedNew() {
    let n = parseInt(prompt("Enter number of squares per side:"));
    if (n > 64) {
        return alert("Squares exceed 64");
    }

    let childDivs = document.querySelectorAll(".row-div");

    for (let i = 0; i < childDivs.length; i++) {
        container.removeChild(childDivs.item(i));
    }

    generateDivs(n);
}

let container = document.querySelector(".container");

generateDivs(16);

let clearBtn = document.getElementById("clear");
let newBtn = document.getElementById("new");

clearBtn.addEventListener("click", clickedClear);
newBtn.addEventListener("click", clickedNew);