document.getElementById('login-btn').addEventListener('click', function() {
    // Replace the following lines with your actual authentication logic
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;


    // Redirect to the main page after successful login
    window.location.href = 'index.html';

    // You can also store the username in a cookie or session storage for future use
    sessionStorage.setItem('username', username);

});