const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const enquiry = document.getElementById('enquiry');
const request = document.getElementById('request');
const message = document.getElementById('message');
const consent = document.getElementById('consent');
const consentError = document.querySelector('.consent_error');
const checkedImg = document.querySelector('.checked-img');
const submit = document.getElementById('submit');
const errorMsgs = document.querySelectorAll('.error_msg');
const names = document.querySelectorAll('.name');
const errorEmail = document.querySelector('.email');
const errorType = document.querySelector('.query_type');
const radios = document.querySelector('.query_type input');
const queryTypes = document.querySelectorAll('.type');
const errorMessage = document.querySelector('.message');
const success = document.querySelector('.success-msg');

submit.addEventListener('click', submitForm);

function submitForm() {
  validation();
}

function validation() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isQueryValid = validateQuery();
  const isMsgValid = validateMsg();
  const isConsentValid = validateConsent();

  if (
    isNameValid &&
    isEmailValid &&
    isMsgValid & isConsentValid &&
    isQueryValid
  ) {
    success.classList.add('success');
    setTimeout(() => {
      success.classList.remove('success');
    }, 3000);
  }
}

function validateName() {
  if (fname.value === '' || lname.value === '') {
    names.forEach((name) => {
      name.style.display = 'block';
      return true;
    });
  } else {
    return true;
  }
}

function validateEmail() {
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;
  if (email.value === '' || !email.value.match(emailRegex)) {
    errorEmail.style.display = 'block';
    return false;
  } else {
    errorEmail.style.display = 'none';
    return true;
  }
}

queryTypes.forEach((queryType) => {
  if (queryType.classList.contains('checked')) {
  }
  queryType.addEventListener('click', () => {
    queryTypes.forEach((qt) => qt.classList.remove('checked'));
    queryType.classList.add('checked');
  });
});

function validateQuery() {
  const isChecked = Array.from(queryTypes).some((queryType) =>
    queryType.classList.contains('checked')
  );

  if (!isChecked) {
    errorType.style.display = 'block'; // Show the error message
    return false;
  } else {
    errorType.style.display = 'none'; // Hide the error message
    return true;
  }
}

function validateMsg() {
  if (message.value === '') {
    errorMessage.style.display = 'block'; // Show the error message
    return false;
  } else {
    errorMessage.style.display = 'none'; // Hide the error message
    return true;
  }
}

consent.addEventListener('click', () => {
  consent.classList.toggle('remove');
  checkedImg.classList.toggle('add');
});

function validateConsent() {
  if (consent.checked) {
    consentError.style.display = 'block'; // Show the error message
    return false;
  } else {
    consentError.style.display = 'none'; // Hide the error message
    return true;
  }
}
