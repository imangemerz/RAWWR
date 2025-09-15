const playButton = document.getElementById('playButton');
const videoWrapper = document.getElementById('videoWrapper');
const myVideo = document.getElementById('myVideo');

playButton.addEventListener('click', function() {
    const isHidden = !videoWrapper.classList.contains('show');
    if (isHidden) {
        videoWrapper.classList.add('show');
        myVideo.play();
        playButton.textContent = '⏹ Sembunyikan Video';
    } else {
        videoWrapper.classList.remove('show');
        myVideo.pause();
        myVideo.currentTime = 0;
        playButton.textContent = '▶ Tampilkan Video';
    }
});