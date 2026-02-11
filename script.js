// CAMBIAR NIVELES
function nextLevel(level) {
    document.querySelectorAll(".level").forEach(l => l.classList.remove("active"));
    document.getElementById("level" + level).classList.add("active");
}

// FUEGO 1-5
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

// Botón NO huye
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Cuando dice que sí
yesBtn.addEventListener("click", () => {
    document.querySelectorAll(".level").forEach(l => l.classList.remove("active"));
    document.getElementById("finalScreen").classList.add("active");
    setTimeout(startNameExplosion, 500);
});

// EXPLOSIÓN DE NOMBRES
function startNameExplosion() {

    const words = ["IRIS 💚", "YAM 💚", "RABANITO 💚", "MI AMOR 💚", "MI MUJER 💚"];
    const container = document.getElementById("explosionContainer");

    for (let i = 0; i < 30; i++) {
        const text = document.createElement("div");
        text.classList.add("explosionText");
        text.innerText = words[Math.floor(Math.random() * words.length)];
        text.style.left = Math.random() * 100 + "vw";
        text.style.top = Math.random() * 100 + "vh";
        container.appendChild(text);

        setTimeout(() => text.remove(), 2500);
    }
}

// PARTÍCULAS DE FONDO
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 70; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5
    });
}

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "rgba(0,255,150,0.7)";
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if(p.x<0||p.x>canvas.width) p.dx*=-1;
        if(p.y<0||p.y>canvas.height) p.dy*=-1;
    });
    requestAnimationFrame(animate);
}
animate();
