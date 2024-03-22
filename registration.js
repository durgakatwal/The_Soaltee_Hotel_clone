document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validate form inputs (for demonstration purposes, you can implement more robust validation)
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        document.getElementById('registrationMessage').textContent = 'Please fill in all fields.';
        return;
    }

    // Simulate registration (replace with actual registration logic)
    setTimeout(function () {
        // Display registration success message
        document.getElementById('registrationMessage').textContent = 'Registration successful.';

        // Reset form
        document.getElementById('registrationForm').reset();
    }, 1000); // Simulate registration delay of 1 second
});



document.addEventListener('DOMContentLoaded', function() {
    // Scroll to a specific element when the page loads
    var scrollTargetElement = document.getElementById('scrollTarget');
    if (scrollTargetElement) {
        var offsetTop = scrollTargetElement.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});
