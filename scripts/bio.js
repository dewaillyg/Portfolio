const dynamicText = document.querySelector(".bio-left .top span");
const words = [
    "Front-End",
    "Back-End",
    "Communication",
    "Graphisme"
]

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) { // ajouter carac
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) { // effacer carac
        charIndex--;
        setTimeout(typeEffect, 75);
    } else {
        // si mot effacé, passer au prochain
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 800); // délai avant effacement
    }
}

typeEffect();

const imgBio = document.querySelector("#me");
const imbBioHeight = imgBio.clientHeight;

imgBio.style.width = imbBioHeight + "px";
