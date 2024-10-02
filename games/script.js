    const iframe = document.querySelector('iframe');
    const fullscreenBtn = document.getElementById('fullscreen-button');

    // Function to make the iframe fullscreen
    function goFullscreen() {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { // Firefox
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { // IE/Edge
            iframe.msRequestFullscreen();
        } else {
            alert("Fullscreen is not supported by this browser.");
        }
    }

    // Event listener for button click
    fullscreenBtn.addEventListener('click', function() {
        goFullscreen();
    });

    // Event listener for 'f' key press to trigger fullscreen
    document.addEventListener('keydown', function(event) {
        if (event.key === 'f' || event.key === 'F') {
            goFullscreen();
        }
    });
document.addEventListener('keydown', function(event) {
    // Check if the '[' key is pressed 
    if (event.key === 'r' || event.key === '[') {
        // Redirect to the desired page
        window.location.href = '../index.html'; // Replace with the actual URL
    }
});
