const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const finalScreen = document.getElementById("finalScreen");

// Botón NO huye
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
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
    floatItem.style.animationDuration = (Math.random() * 5 + 5) + "s";
    floatItem.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    document.body.appendChild(floatItem);

    setTimeout(() => {
        floatItem.remove();
    }, 10000);
}, 600);

// Confetti simple
function startConfetti() {
    for (let i = 0; i < 80; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("floating");
        confetti.innerText = "💚";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.fontSize = "20px";
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}
