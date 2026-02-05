const para = document.createElement('p');
para.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni impedit ea beatae rerum sunt tempora, ab quaerat, fuga natus explicabo placeat, laboriosam exercitationem alias atque.";
document.body.appendChild(para);


// ---------------------------------------------------------------
// 1. Create button
const removeBtn = document.createElement('button');
removeBtn.innerText = "Remove Node";
// 2. add event to btn to remove childs from body
removeBtn.onclick = (e) => {
  // alert('Hello')
  if (document.body.firstChild) {
    // document.body.firstChild.remove();
    document.body.removeChild(document.body.firstChild);
  }

}
// 3. add btn to body in document
document.body.appendChild(removeBtn);