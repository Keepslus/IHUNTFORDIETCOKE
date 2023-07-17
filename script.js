document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Hash the entered password
    var hashedPassword = sha256(password);

    // Compare the username and hashed password
    if (username === "Tim" && hashedPassword === "06b41234b72712e3eab2b29e084ddc0a273075c2a81228e68a880bdcf157ab0e") {
        alert("Login successful! Welcome, Tim!");
        // Redirect to the desired page after successful login
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
