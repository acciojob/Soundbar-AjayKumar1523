//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");

let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const sound = button.innerText;

        // Stop button logic
        if (button.classList.contains("stop")) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            return;
        }

        // Stop previous audio if playing
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Play new audio
        const audio = new Audio(`sounds/${sound}.mp3`);
        currentAudio = audio;
        audio.play();
    });
});