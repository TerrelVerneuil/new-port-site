// audio.js

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myaudio');
    var record = document.getElementById('record');

    // Set initial volume
    audio.volume = 0.3;

    // Retrieve playback state from localStorage
    if (localStorage.getItem('audioPaused') === 'false') {
        audio.play();
    } else {
        audio.pause();
    }

    // Retrieve current time from localStorage
    var savedTime = localStorage.getItem('audioCurrentTime');
    if (savedTime !== null) {
        audio.currentTime = parseFloat(savedTime);
    }

    // Save playback state and time to localStorage on play/pause
    record.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            localStorage.setItem('audioPaused', 'false');
            record.classList.remove('paused');
        } else {
            audio.pause();
            localStorage.setItem('audioPaused', 'true');
            record.classList.add('paused');
        }
    });

    // Update current time in localStorage every second
    setInterval(function () {
        if (!audio.paused) {
            localStorage.setItem('audioCurrentTime', audio.currentTime);
        }
    }, 1000);
});
