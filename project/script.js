const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

loginBtn.addEventListener('click', () => {
  loginBtn.classList.add('active');
  signupBtn.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
  signupBtn.classList.add('active');
  loginBtn.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});

switchToSignup.addEventListener('click', () => signupBtn.click());
switchToLogin.addEventListener('click', () => loginBtn.click());

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-password').value;
  if (!email || !pass) {
    alert("Please fill in all fields.");
  } else {
    alert("Login successful!");
  }
});

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const pass = document.getElementById('signup-password').value;
  const confirmPass = document.getElementById('signup-confirm').value;

  if (!name || !email || !pass || !confirmPass) {
    alert("Please fill in all fields.");
  } else if (pass !== confirmPass) {
    alert("Passwords do not match.");
  } else {
    alert("Signup successful!");
  }
});
