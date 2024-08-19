function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Basic username and password check for demonstration purposes
    if (username !== "user" || password !== "password") {
        alert("Invalid username or password");
        return false;
    }

    alert("Login success1!");
    return true;
}
