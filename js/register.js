document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        fetch("users.json")
            .then((response) => response.json())
            .then((data) => {
                const existingUsers = data.users;

                if (existingUsers.some((user) => user.email === email)) {
                    alert("Account already exists.");
                } else {
                    const newUser = {
                        name: name,
                        email: email,
                        password: password,
                    };

                    existingUsers.push(newUser);

                    fetch("users.json", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    })
                        .then(() => {
                            alert("Registration successful!");
                        })
                        .catch((error) => console.error("Error updating JSON data:", error));
                }
            })
            .catch((error) => console.error("Error fetching JSON data:", error));
    });
});
