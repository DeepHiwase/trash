//your JS code here. If required.
const inputs = document.querySelectorAll("input[type='number']");

const eye = document.getElementById("visibility");

eye.addEventListener('click', (e) => {
  e.preventDefault();
  const pass = document.getElementById('password');
  console.log(pass);
  const vis = pass.getAttribute('type');
  console.log(vis);
  if (vis == 'password') {
    pass.setAttribute('type', 'text');
  } else {
    pass.setAttribute('type', 'password');
  }
})


// document.createElement('')