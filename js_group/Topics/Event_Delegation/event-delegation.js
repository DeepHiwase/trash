document.addEventListener("DOMContentLoaded", () => {


  const form = document.getElementById('add-item-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let fromData = new FormData(this);// or we have to pass e.target
    let newTodo = fromData.get("new-todo");
    // e.target;
    // console.log(e.target);
    // console.log(e);
    // console.log(this);   
    addNewTodo(newTodo);
  })


  // document.querySelector("ul#item-list").addEventListener("click", (evnt) => {
  //   console.log(evnt.target);
  //   console.log(evnt.currentTarget);

  //   if (evnt.target.closest("button")) {
  //     console.log("delete button clicked");
  //   } else if (evnt.target.matches("input[type='checkbox'")) {
  //     console.log("checkbox clicked");
  //   } else if (evnt.target.closest("label")) {
  //     console.log("label clicked");
  //   }
  // })

  function addNewTodo(newTodo) {
    const itemsList = document.getElementById("item-list");
    const itemListCount = itemsList.children.length;
    // console.log(itemListCount)

    const item = document.createElement('li');
    item.classList.add("item");

    const input = document.createElement('input');
    input.type = "checkbox";
    input.id = `todo${itemListCount + 1}`;
    input.name = `todo${itemListCount + 1}`;

    const label = document.createElement('label');
    label.textContent = newTodo;
    label.setAttribute("for", `todo${itemListCount + 1}`);

    const button = document.createElement('button');
    button.textContent = "Delete";

    console.log({ input, label, button });

    item.append(input, label, button);
    itemsList.append(item);
  }










  // // or ul#items-list > li.item > button
  // const deleteBtns = document.querySelectorAll("ul[id='item-list']>li[class='item']>button");
  // console.log(deleteBtns);

  // deleteBtns.forEach((btn) => {
  //   btn.addEventListener('click', (e) => {
  //     // console.log(btn.parentElement);
  //     const liEle = btn.parentElement;
  //     // liEle.style.display = "none";

  //     liEle.classList.toggle("hidden");
  //   })
  // })

  // or ul#items-list > li.item > button
  const itemsList = document.getElementById("item-list");
  // console.log(itemsList);

  itemsList.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.currentTarget);

    if (e.target.closest('button')) {
      const deleteBtn = e.target.closest("button");
      // console.log(deleteBtn.parentElement);
      const itemToDelete = deleteBtn.closest("li.item");
      e.currentTarget.removeChild(itemToDelete);
    }

  })

})