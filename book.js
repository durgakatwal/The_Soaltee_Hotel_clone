document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var checkIn = document.getElementById('checkIn').value;
    var checkOut = document.getElementById('checkOut').value;
    var roomType = document.getElementById('roomType').value;

    // Validate form inputs (for demonstration purposes, you can implement more robust validation)
    if (name.trim() === '' || email.trim() === '' || checkIn.trim() === '' || checkOut.trim() === '' || roomType === '') {
        document.getElementById('bookingMessage').textContent = 'Please fill in all fields.';
        return;
    }

    // Simulate booking process (replace with actual booking logic)
    setTimeout(function () {
        // Display booking success message
        document.getElementById('bookingMessage').textContent = 'Booking successful.';

        // Reset form
        document.getElementById('bookingForm').reset();
    }, 1000); // Simulate booking delay of 1 second
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