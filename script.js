const form = document.querySelector('form');
form.addEventListener('submit', e => {
  let pass1Value = document.querySelector('#password').value;
  console.log(pass1);
  let pass2Value = document.querySelector('#confirmPassword').value;
  console.log(pass2);
  let pass1 = document.querySelector('#password').value;
  console.log(pass1);
  let pass2 = document.querySelector('#confirmPassword').value;
  console.log(pass2);
  let errorMsg = document.querySelector('.pass-error-msg');
  if (pass1Value !== pass2Value) {
    pass1.classList.add('error');
    pass2.classList.add('error');
    errorMsg.style.display = 'flex';
    console.log();
  }
  else{
    errorMsg.style.removeProperty="display";
    errorMsg.style.display = 'none';

  }
});