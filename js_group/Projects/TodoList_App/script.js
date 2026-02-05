// Globals
let count = 0;
let stats = {
  total: 0,
  notCompleted: 0,
  completed: 0
};
let todos = [];

// function createDeleteBtn() {
//   const deleteBtn = document.createElement('button');
//   deleteBtn.className = 'btn';
//   deleteBtn.id = 'delete-btn';
//   deleteBtn.innerText = "Delete Todo"
// }

const total = document.getElementById("stats-total");
const notCompleted = document.getElementById("stats-not-completed");
const completed = document.getElementById("stats-completed");

function createTodoBox(text) {

  const todoListContainer = document.createElement('div');
  todoListContainer.className = "todoListItem";
  todoListContainer.id = `${++count}`;
  // checkbox
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.addEventListener('change', (e) => {
    const checkStatus = e.target;
    if (checkStatus.checked) {
      todoListContainer.classList.add('completed');
    } else {
      todoListContainer.classList.remove('completed');
    }
  })
  // todo-div
  const todo = document.createElement('div');
  todo.innerText = text;
  todo.classList.add("todo-text")
  // delete-btn
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn';
  deleteBtn.id = 'delete-btn';
  deleteBtn.innerText = "Delete Todo"
  deleteBtn.addEventListener('click', () => {
    const todoListSection = document.getElementById('list-todos-section');
    const thisTodo = document.getElementById(`${count}`);
    todoListSection.removeChild(thisTodo);
  })


  // append items in todo-lint-container
  todoListContainer.append(checkBox, todo, deleteBtn);

  // update stats
  // const total = 

  return todoListContainer;
}

// const statsInfo = []


const addBtn = document.getElementById("add-btn");
addBtn.addEventListener('click', () => {
  // get value from input
  const todoInput = document.getElementById('todo-ipt');
  // console.log(todoInput); 
  // console.log(todoInput.value);
  const todoText = todoInput.value;
  // create todo list
  const todoToAppend = createTodoBox(todoText);
  // append to list section
  const todoListSection = document.getElementById('list-todos-section');
  todoListSection.appendChild(todoToAppend);

  todoInput.value = "";
})


const completedBtn = document.getElementById('completed-btn');
completedBtn.addEventListener('click', () => {

})
