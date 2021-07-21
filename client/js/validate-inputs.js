const registerform = document.getElementById('registerform');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const pwdr = document.getElementById('pwdr');
const gen = document.getElementsByName('gender');
const submitBtn = document.getElementById('submit-btn');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check if number
function checkNumber(input) {
  if (typeof input.value == 'number') {
    showError(
        input,
        `${getFieldName(input)} must be a number.`
    );
  } else {
    showSuccess(input);
  }
}

// Check password
/*function checkPasswordIsSame(input, pwdr) {
  if (input.value !== pwdr.value) {
    showError(
        input,
        `${getFieldName(input)} must be the same.`
    );
  } else {
    showSuccess(input);
    showSuccess(pwdr);
  }
}*/

function checkPassword(input, input2) {
    let password = input.value.trim();
    let pwdr = input2.value.trim();

    console.log(`${password}, ${pwdr}`);

    // Return false if not same
    if (password !== pwdr) {
        showError(
            input2,
            `${getFieldName(input2)} must be a matching Password`
        );

    } else {
        showSuccess(input);
        showSuccess(input2);
    }
}

/*function CheckPassword(input pwdr) {
var password=  /^[A-Za-z]\w{7,14}$/;
if(input.value.match(password))
{
showSuccess(input);
}
else
{
  showError(
      input,
      `${getFieldName(input)} must be the same` );
  }
}*/

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateForm(){
  if(!checkRequired([firstname, lastname, email, mobile, password, pwdr, gen])){
    checkNumber(mobile);
    stringLengthCheck(firstname, 2, 20);
    stringLengthCheck(lastname, 2, 25);
    stringLengthCheck(password, 6, 25);
    checkPassword(password, pwdr);
    checkEmail(email);
  }
}

// Event listeners
registerform.addEventListener('submit', function(e) {
  e.preventDefault();
  validateForm();
});
