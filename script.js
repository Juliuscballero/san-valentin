function nextLevel(level) {
    document.querySelectorAll(".level").forEach(l => l.classList.remove("active"));
    document.getElementById("level" + level).classList.add("active");
}

function selectFire(level) {
    let text = "";
    if (level < 3) text = "Uy... tibio 🥺";
    if (level === 3) text = "Eso ya se siente 😏🔥";
    if (level === 4) text = "Cuidado que me prendo 😳🔥🔥";
    if (level === 5) text = "INCENDIO TOTAL 🔥🔥🔥🔥🔥💘";
    document.getElementById("fireResult").innerText = text;
}

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", () => {
    document.querySelectorAll(".level").forEach(l => l.classList.remove("active"));
    document.getElementById("finalScreen").classList.add("active");
    startExplosion();
});

function startExplosion() {
    const words = ["IRIS 💚", "YAM 💚", "RABANITO 💚", "MI AMOR 💚", "MI MUJER 💚"];
    const container = document.getElementById("explosionContainer");

    for (let i = 0; i < 25; i++) {
        const text = document.createElement("div");
        text.classList.add("explosionText");
        text.innerText = words[Math.floor(Math.random() * words.length)];
        text.style.left = Math.random() * 100 + "vw";
        text.style.top = Math.random() * 100 + "vh";
        container.appendChild(text);
        setTimeout(() => text.remove(), 2000);
    }
}
