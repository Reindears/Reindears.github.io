document.addEventListener("DOMContentLoaded", () => {
    AOS.init();

    // Typewriter Effect
    const textArray = ["Developer", "Designer", "Tech Enthusiast"];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenWords = 2000;
    const typewriterElement = document.querySelector(".typewriter");

    function type() {
        if (charIndex < textArray[index].length) {
            typewriterElement.innerHTML = textArray[index].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenWords);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriterElement.innerHTML = textArray[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            index = (index + 1) % textArray.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}