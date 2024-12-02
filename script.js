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
        console.log(allHoveredDivs);    
        allHoveredDivs.item(i).classList.remove("hovered");
    }
}

let container = document.querySelector(".container");

generateDivs(30);

let clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", clickedClear);