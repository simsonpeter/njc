// Dark/Light Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.querySelector('i').classList.toggle('fa-moon');
    themeToggle.querySelector('i').classList.toggle('fa-sun');
});

// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active'); // Hide the menu
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Audio Player Functionality
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const trackTitle = document.getElementById('trackTitle');
const trackSpeaker = document.getElementById('trackSpeaker');
const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sermonItem = button.closest('.sermon-item');
        const title = sermonItem.querySelector('h3').textContent;
        const speaker = sermonItem.querySelector('.speaker').textContent;
        const src = button.getAttribute('data-src');

        // Update audio player
        audioSource.src = src;
        trackTitle.textContent = title;
        trackSpeaker.textContent = speaker;
        
        // Show player and play
        audioPlayer.classList.add('active');
        audioSource.play().catch(error => {
            console.error("Audio playback failed:", error);
        });
    });
});

function closeAudioPlayer() {
    audioPlayer.classList.remove('active');
    audioSource.pause();
    audioSource.currentTime = 0;
}