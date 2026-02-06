const container = document.getElementById("spreadsheet-container");
const rows = 40;
const cols = 26;
let selectedCell = null;

class Grid {
  #data;
  constructor() {
    this.#data = JSON.parse(localStorage.getItem("spreadsheet")) || {};
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
          cell.innerText = this.#data.hasOwnProperty(cell.id)
            ? this.#data[cell.id]
            : null;
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
    });

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
    });

    table.addEventListener("focusout", (evnt) => {
      const bluredElement = evnt.target;
      if (bluredElement.tagName === "TH") {
        return;
      }
      bluredElement.contentEditable = false;
      if (bluredElement.innerText.trim() === "") {
        // this.#data.delete(bluredElement.id);
        return;
      }

      // calculation part
      if (bluredElement.innerText.trim()[0] === "=") {
        // trigger formula functions
        // console.log("formula")
        const formula = bluredElement.innerText
          .trim()
          .split("(")[0]
          .slice(1)
          .toLowerCase();
        console.log(formula);

        const firstBracketIndex = bluredElement.innerText
          .trim()
          .split("")
          .indexOf("(");
        const lastBracketIndex = bluredElement.innerText
          .trim()
          .split("")
          .indexOf(")");
        const range = bluredElement.innerText
          .trim()
          .slice(firstBracketIndex + 1, lastBracketIndex);
        const [startRange, endRange] = range.split(":");

        switch (formula) {
          case "sum":
            {
              // bluredElement.innerText = sum("A1", "C1", this.#data);
              bluredElement.innerText = sum(startRange, endRange, this.#data);
            }
            break;
          default:
            bluredElement.innerText = eval(
              bluredElement.innerText.trim().slice(1),
            );
        }
      }

      // this.#data.set(bluredElement.id, bluredElement.innerText);
      this.#data[bluredElement.id] = bluredElement.innerText;
      this.#saveData();
    });

    table.addEventListener("keydown", (evnt) => {
      if (evnt.key === "Enter") {
        evnt.preventDefault(); // prevent adding new line
        selectedCell.blur(); // triggers focusout
      } else if (evnt.key === "Escape") {
        evnt.preventDefault();
        selectedCell.innerText = "";
        selectedCell.blur();
      } else if (
        evnt.ctrlKey === true &&
        evnt.key === "C" &&
        selectedCell.innerText
      ) {
        navigator.clipboard.writeText(selectedCell.innerText);
        console.log(navigator.clipboard.readText());
      } else if (
        evnt.key === "ArrowUp" ||
        evnt.key === "ArrowDown" ||
        evnt.key === "ArrowLeft" ||
        evnt.key === "ArrowRight"
      ) {
        const column = selectedCell.id.split("")[0];
        const row = +selectedCell.id.slice(1);

        switch (evnt.key) {
          case "ArrowUp": {
            if (row - 1 >= 1) {
              selectedCell.classList.remove("selected");

              selectedCell = document.querySelector(`#${column}${row - 1}`);
              // console.log(selectedCell);
              selectedCell.classList.add("selected");
              selectedCell.contentEditable = true;
              selectedCell.focus();
            }
            return;
          }
          case "ArrowDown": {
            if (row + 1 <= rows) {
              selectedCell.classList.remove("selected");

              selectedCell = document.querySelector(`#${column}${row + 1}`);
              // console.log(selectedCell);
              selectedCell.classList.add("selected");
              selectedCell.contentEditable = true;
              selectedCell.focus();
            }
            return;
          }
          case "ArrowLeft": {
            if (column.charCodeAt(0) - 1 >= 65) {
              selectedCell.classList.remove("selected");

              selectedCell = document.querySelector(
                `#${String.fromCharCode(column.charCodeAt(0) - 1)}${row}`,
              );
              // console.log(selectedCell);
              selectedCell.classList.add("selected");
              selectedCell.contentEditable = true;
              selectedCell.focus();
            }
            return;
          }
          case "ArrowRight": {
            if (column.charCodeAt(0) + 1 <= 90) {
              selectedCell.classList.remove("selected");

              selectedCell = document.querySelector(
                `#${String.fromCharCode(column.charCodeAt(0) + 1)}${row}`,
              );
              // console.log(selectedCell);
              selectedCell.classList.add("selected");
              selectedCell.contentEditable = true;
              selectedCell.focus();
            }
            return;
          }
        }
      } else if (evnt.key === "Tab") {
        evnt.preventDefault();
        const column = selectedCell.id.split("")[0];
        const row = +selectedCell.id.slice(1);

        if (column === "Z" && row === rows) {
          selectedCell.classList.remove("selected");
          selectedCell = document.querySelector(`#A1`);
          selectedCell.classList.add("selected");
          selectedCell.contentEditable = true;
          selectedCell.focus();
        } else if (column === "Z") {
          selectedCell.classList.remove("selected");
          selectedCell = document.querySelector(`#A${row + 1}`);
          selectedCell.classList.add("selected");
          selectedCell.contentEditable = true;
          selectedCell.focus();
        } else {
          selectedCell.classList.remove("selected");
          selectedCell = document.querySelector(
            `#${String.fromCharCode(column.charCodeAt(0) + 1)}${row}`,
          );
          selectedCell.classList.add("selected");
          selectedCell.contentEditable = true;
          selectedCell.focus();
        }
      }
    });

    container.appendChild(table);
  }

  #saveData() {
    localStorage.setItem("spreadsheet", JSON.stringify(this.#data));
  }
}

function sum(startRange, endRange, data) {
  // startRange   A1
  // endRange     A10
  // if single row -> 1d loop
  let startRangeColumn = startRange[0];
  let endRangeColumn = endRange[0];
  let startRangeRow = +startRange.slice(1);
  let endRangeRow = +endRange.slice(1);
  let sum = 0;
  if (startRangeColumn === endRangeColumn) {
    for (let i = startRangeRow; i <= endRangeRow; ++i) {
      sum += Number(data[`${startRangeColumn}${i}`]);
    }
  } else if (startRangeRow === endRangeRow) {
    for (
      let i = startRangeColumn.charCodeAt(0);
      i <= endRangeColumn.charCodeAt(0);
      ++i
    ) {
      sum += Number(data[`${String.fromCharCode(i)}${startRangeRow}`]);
    }
  } else {
    // 2d
    // outer -> rowWise
    for (let i = startRangeRow; i <= endRangeRow; ++i) {
      // inner -> columnWise
      for (
        let j = startRangeColumn.charCodeAt(0);
        j <= endRangeColumn.charCodeAt(0);
        ++j
      ) {
        sum += Number(data[`${String.fromCharCode(j)}${i}`]);
      }
    }
  }

  return sum;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = new Grid();
  // console.log(sum("A1", "C1", JSON.parse(localStorage.getItem("spreadsheet"))));
});
