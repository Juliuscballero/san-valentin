const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const finalScreen = document.getElementById("finalScreen");

let noScale = 1;
let yesScale = 1;

// El botón NO huye y se hace pequeño
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noScale -= 0.1;
    yesScale += 0.1;

    noBtn.style.transform = `scale(${noScale})`;
    yesBtn.style.transform = `scale(${yesScale})`;

    if (noScale <= 0.4) {
        noBtn.style.display = "none";
    }
});

// Cuando dice que sí
yesBtn.addEventListener("click", () => {
    document.querySelector(".buttons").style.display = "none";
    finalScreen.classList.remove("hidden");
    startConfetti();
});

// Elementos flotantes
const emojis = ["❤️", "🐢", "🌻"];

setInterval(() => {
    const floatItem = document.createElement("div");
    floatItem.classList.add("floating");
    floatItem.style.left = Math.random() * 100 + "vw";
    floatItem.style.animationDuration = (Math.random() * 3 + 5) + "s";
    floatItem.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    document.body.appendChild(floatItem);

    setTimeout(() => {
        floatItem.remove();
    }, 8000);
}, 500);

// Confetti verde
function startConfetti() {
    for (let i = 0; i < 120; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("floating");
        confetti.innerText = "💚";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.fontSize = "18px";
        confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

