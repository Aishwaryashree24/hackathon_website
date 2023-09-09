// Example JavaScript code for handling form submission (you can extend this as needed)

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        alert("Login successful!");
    
    });
});
