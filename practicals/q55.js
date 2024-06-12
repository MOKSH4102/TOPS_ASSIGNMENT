// Email validation
const emailInput = document.getElementById('emailInput');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailInput.addEventListener('input', function() {
  if (emailRegex.test(emailInput.value)) {
    document.getElementById('emailFeedback').textContent = '';
  } else {
    document.getElementById('emailFeedback').textContent = 'Please enter a valid email address.';
  }
});

// Number validation
const numberInput = document.getElementById('numberInput');
numberInput.addEventListener('input', function() {
  const numberValue = parseInt(numberInput.value);
  if (numberValue >= 1 && numberValue <= 10) {
    document.getElementById('numberFeedback').textContent = '';
  } else {
    document.getElementById('numberFeedback').textContent = 'Please enter a number between 1 and 10.';
  }
});

// Password validation
const passwordInput = document.getElementById('passwordInput');
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
passwordInput.addEventListener('input', function() {
  if (passwordRegex.test(passwordInput.value)) {
    document.getElementById('passwordFeedback').textContent = '';
  } else {
    document.getElementById('passwordFeedback').textContent = 'Please enter a valid password. It must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.';
  }
});