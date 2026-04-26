const container = document.querySelector(".main-container")
const gridInput = document.querySelector('.grid-input');
const submitBtn = document.querySelector('.modal-button');
const modalOverlay = document.querySelector('.modal-overlay');

submitBtn.addEventListener("click", () => {
    let rawInput = gridInput.value

    let gridSize = Number(rawInput)

    if (Number.isInteger(gridSize) && gridSize > 0 && gridSize <= 100) { 
            console.log("Можна будувати сітку розміром:", gridSize);
            modalOverlay.classList.add('hidden'); 
            gridInput.value = '';
        } else {
            alert("Please, provide a whole number from 1 to 100");
            gridInput.value = '';
        }
    createGrid(gridSize)
})

function createGrid(gridSize){
    let fullSize = gridSize * gridSize;
    let divPercentageSize = 100 / gridSize;
    for (let i = 0; i < fullSize; i++){
        const divSquare = document.createElement("div")
        divSquare.classList.add("div-pixel-container")

        divSquare.style.width = `${divPercentageSize}%`
        divSquare.style.height = `${divPercentageSize}%`

        divSquare.addEventListener('mouseover', () => {
            divSquare.classList.add("drawn");
        });

        container.appendChild(divSquare)
    }
}
