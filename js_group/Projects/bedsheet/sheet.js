const container = document.getElementById("spreadsheet-container");
const rows = 20;
const cols = 20;
let selectedCell = null;

class Grid {
  #data;
  constructor() {
    this.#data = JSON.parse(localStorage.getItem('spreadsheet')) || {};
    this.#createGrid();
    // this.#data = new Map(JSON.parse(localStorage.getItem("spreadsheet")) || {});
    // this.#data = new Map(); // map
  }

  #createGrid() {
    const table = document.createElement("table");

    for (let i = 0; i <= rows; ++i) {
      const tr = document.createElement("tr");

      for (let j = 0; j <= cols; ++j) {
        const cell =
          i === 0 || j === 0
            ? document.createElement("th")
            : document.createElement("td");

        // Headers
        if (i === 0 && j > 0) {
          cell.innerText = String.fromCharCode(64 + j);
        } else if (j === 0 && i > 0) {
          cell.innerText = i;
        }

        // Data cells
        if (i > 0 && j > 0) {
          cell.className = "cell";
          cell.id = `${String.fromCharCode(64 + j)}${i}`;
          // console.log(this.#data.has(cell.id))
          // cell.innerText = this.#data.has(cell.id) ? this.#data.get(cell.id) : null;
          cell.innerText = this.#data.hasOwnProperty(cell.id) ? this.#data[cell.id] : null;
          cell.contentEditable = false;
        }

        tr.appendChild(cell);
      }

      table.appendChild(tr);
    }

    table.addEventListener("click", (evnt) => {
      const clickedElement = evnt.target;
      if (clickedElement.tagName === "TH") {
        return;
      }
      if (selectedCell) {
        selectedCell.classList.remove("selected");
      }
      selectedCell = clickedElement;
      selectedCell.classList.add("selected");
    })

    table.addEventListener("dblclick", (evnt) => {
      const dblClickedElement = evnt.target;
      if (dblClickedElement.tagName === "TH") {
        return;
      }
      if (selectedCell) {
        selectedCell.classList.remove("selected");
      }
      selectedCell = dblClickedElement;
      selectedCell.classList.add("selected");
      selectedCell.contentEditable = true;
      selectedCell.focus();
    })

    table.addEventListener("focusout", (evnt) => {
      const bluredElement = evnt.target;
      if (bluredElement.tagName === "TH") {
        return;
      }
      bluredElement.contentEditable = false;
      if (bluredElement.innerText.trim() === "") {
        this.#data.delete(bluredElement.id);
      }
      // this.#data.set(bluredElement.id, bluredElement.innerText);
      this.#data[bluredElement.id] = bluredElement.innerText;
      this.#saveData();
    })

    table.addEventListener("keydown", (evnt) => {
      if (evnt.key === "Enter") {
        evnt.preventDefault(); // prevent adding new line
        selectedCell.blur(); // triggers focusout
      } else if (evnt.key === "Escape") {
        evnt.preventDefault();
        selectedCell.blur();
      } else if (evnt.ctrlKey === true && evnt.key === "C" && selectedCell.innerText) {
        navigator.clipboard.writeText(selectedCell.innerText);
        console.log(navigator.clipboard.readText());
      }
    })

    container.appendChild(table);
  }

  #saveData() {
    localStorage.setItem("spreadsheet", JSON.stringify(this.#data));
  }
}

const grid = new Grid();