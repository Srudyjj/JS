document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const re = /^[a-zA-Z]{2,10}$/;
  if (!re.test(this.value)) {
    this.classList.add('is-invalid');
  } else {
    this.classList.remove('is-invalid');
  }
};

function validateZip() {
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if (!re.test(this.value)) {
    this.classList.add('is-invalid');
  } else {
    this.classList.remove('is-invalid');
  }
};

function validateEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/;
  if (!re.test(this.value)) {
    this.classList.add('is-invalid');
  } else {
    this.classList.remove('is-invalid');
  }  
};

function validatePhone() {
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (!re.test(this.value)) {
    this.classList.add('is-invalid');
  } else {
    this.classList.remove('is-invalid');
  } 
}


