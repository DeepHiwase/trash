document.addEventListener("DOMContentLoaded", function() {
  const formElement = document.getElementById('#user-info');

  formElement.addEventListener("submit", function(evnt) {
    evnt.preventDefault();
    console.log(evnt);
  })
})