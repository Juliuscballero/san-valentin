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
    for (let i = 0; i < 25; i++) {
        const text = document.createElement("div");
        text.classList.add("explosionText");
        text.innerText = words[Math.floor(Math.random() * words.length)];
        text.style.left = Math.random() * 100 + "vw";
        text.style.top = Math.random() * 100 + "vh";
        document.body.appendChild(text);
        setTimeout(() => text.remove(), 2000);
    }
}

function ultimateAccept() {
    document.body.classList.add("fireMode");

    const official = document.createElement("div");
    official.classList.add("officialText");
    official.innerText = "OFICIAL 💚🔥";
    official.style.top = "40%";
    official.style.left = "50%";
    official.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(official);

    setTimeout(() => official.remove(), 3000);
}
