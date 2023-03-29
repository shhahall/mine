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

function uploadFile() {
    var fileInput = document.getElementById("myFile");
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append("file", file);
  
    // Replace "upload.php" with the URL of your upload script
    fetch("main.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
  }
  
