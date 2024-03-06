// script.js
const targetDate = new Date("2024-12-25T00:00:00").getTime(); // Example: Christmas 2024

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("timer").innerText = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // Update progress bar
    const totalSeconds = (targetDate - new Date().setFullYear(new Date().getFullYear() - 1)) / 1000;
    const pastSeconds = totalSeconds - (distance / 1000);
    const percentage = (pastSeconds / totalSeconds) * 100;
    document.getElementById("progress-bar").style.width = percentage.toFixed(2) + "%";
    document.getElementById("percentage").innerText = percentage.toFixed(2) + "% until " + new Date(targetDate).toLocaleDateString();

    // If the countdown is over
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerText = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
        document.getElementById("percentage").innerText = "100% - Time's up!";
    }
}

// Update the countdown every 1 second
const interval = setInterval(updateCountdown, 1000);

