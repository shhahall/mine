const form = document.querySelector('#login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === 'shahal' && password === 'ss') {
    alert('Login successful!');
    window.location.href = 'main.html';
  } else {
    alert('Incorrect username or password. Please try again.');
  }
});

