document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const movie = document.getElementById('movie').value;
    const numTickets = document.getElementById('numTickets').value;
    const seats = document.getElementById('seats').value;

    // Validate required fields
    if (!name || !email || !movie || !numTickets || !seats) {
        alert("Please fill out all fields.");
        return;
    }

    // Validate email format
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate number of tickets
    if (isNaN(numTickets) || numTickets < 1 || numTickets > 10) {
        alert("Please enter a valid number of tickets (1-10).");
        return;
    }

    // Validate seat format (e.g., A1, B2)
    const seatArray = seats.split(',').map(seat => seat.trim());
    if (seatArray.length !== parseInt(numTickets)) {
        alert("Please enter the correct number of seats corresponding to the number of tickets.");
        return;
    }

    alert(`Ticket booked successfully for ${name}!`);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Function to add and remove images in the gallery
function addImage() {
    const gallery = document.getElementById('gallery');
    const imageURL = document.getElementById('imageURL').value;

    if (imageURL === '') {
        alert("Please enter an image URL.");
        return;
    }

    // Create a new image element
    const img = document.createElement('img');
    img.src = imageURL;

    // Add an event listener to delete the image on click
    img.addEventListener('click', function() {
        gallery.removeChild(img);  // Remove the clicked image
    });

    // Append the image to the gallery
    gallery.appendChild(img);

    // Clear the input field
    document.getElementById('imageURL').value = '';
}
