$(document).ready(function () {
    // Form submission handler
    $('#signup-form').on('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        const username = $('#username').val();
        alert(`Thank you for signing up, ${username}!`);

        // Redirect to Home.html after the alert is closed
        window.location.href = 'views/Home.html';
    });

    // Canvas drawing
    const canvas = document.getElementById('interactive-canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 200, 50);

    // Button to clear the canvas
    $('<button>Clear Canvas</button>')
        .attr('id', 'clear-canvas-btn')
        .css({
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#007BFF',
            color: '#FFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        })
        .on('click', function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        })
        .insertAfter('#canvas-section');

    // Dynamic content loading
    const featuresContent = {
        feature1: "Feature 1: Advanced Responsive Design.",
        feature2: "Feature 2: Interactive Canvas Examples.",
        feature3: "Feature 3: Smooth Navigation Effects."
    };

    $.each(featuresContent, function (key, value) {
        $('#features').append(`<p>${value}</p>`);
    });

    // Smooth scrolling for navigation links
    $('.main-navigation a').on('click', function (event) {
        event.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

    // Show/Hide form details toggle
    $('<button>Toggle Form Details</button>')
        .attr('id', 'toggle-form-btn')
        .css({
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#28A745',
            color: '#FFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        })
        .on('click', function () {
            $('#form-section').toggle(300);
        })
        .insertAfter('#form-section');
});

// Trigger SweetAlert2 popup when the page loads
window.onload = function () {
    Swal.fire({
        title: 'Welcome to the Robot World!',
        text: 'Discover the amazing world of robotics.',
        icon: 'info',  // 'info', 'success', 'warning', 'error'
        confirmButtonText: 'Start Exploring'
    });
};

// Add click event listener for bottom navigation links to use SweetAlert2
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.bottom-navigation a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent the default link behavior
            Swal.fire({
                title: 'Redirecting...',
                text: 'You are about to navigate to: ' + event.target.textContent,
                icon: 'info',
                confirmButtonText: 'OK'
            }).then(() => {
                // After the alert is closed, allow navigation
                window.location.href = link.href;
            });
        });
    });
});