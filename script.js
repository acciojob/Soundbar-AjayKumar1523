const buttons = document.querySelectorAll(".btn");

let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const sound = button.innerText;

        // Stop button
        if (button.classList.contains("stop")) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            return;
        }

        // Remove previous audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.remove();
        }

        // Create audio element (THIS IS THE FIX)
        const audio = document.createElement("audio");
        audio.src = `sounds/${sound}.mp3`;
        audio.autoplay = true;

        document.body.appendChild(audio); // important

        currentAudio = audio;
    });
});