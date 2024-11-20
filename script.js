const preloader = document.getElementById('preloader');
const content = document.getElementById('content');
const audio = document.getElementById('background-music');
const accessibilityIcon = document.getElementById('accessibility-icon');
const accessibilityPopup = document.getElementById('accessibility-popup');
const toggleMusicButton = document.getElementById('toggle-music');

let isMusicPlaying = false;

accessibilityIcon.addEventListener('click', () => {
    accessibilityPopup.style.display = accessibilityPopup.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('music-on').addEventListener('click', () => {
    audio.play().catch(console.error);
    isMusicPlaying = true;
    removePreloader();
});

document.getElementById('music-off').addEventListener('click', () => {
    removePreloader();
});

toggleMusicButton.addEventListener('click', () => {
    if (isMusicPlaying) {
        audio.pause();
        isMusicPlaying = false;
        toggleMusicButton.textContent = 'Turn Music On';
    } else {
        audio.play().catch(console.error);
        isMusicPlaying = true;
        toggleMusicButton.textContent = 'Turn Music Off';
    }
});

function removePreloader() {
    preloader.style.display = 'none';
    content.style.display = 'block';
    accessibilityIcon.style.display = 'flex';
    document.body.style.overflow = 'auto';
}
