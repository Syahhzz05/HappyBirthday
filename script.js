document.getElementById("showMessageBtn").addEventListener("click", function() {
    // Hide Initial Message and Button
    document.querySelector(".intro-message").style.display = "none";
    this.style.display = "none";

    // Show Birthday Message
    document.getElementById("message").style.display = "block";

    // Play Happy Birthday Song
    document.getElementById("birthdaySong").play();

    // Play Firework Sound
    document.getElementById("fireworkSound").play();

    // Show Fireworks Effect
    startFireworks();
});

// Fireworks Animation
function startFireworks() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.style.display = "block";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    function createParticle(x, y, color) {
        return {
            x,
            y,
            color,
            radius: Math.random() * 3 + 1,
            velocityX: Math.random() * 5 - 2.5,
            velocityY: Math.random() * 5 - 2.5,
            life: 100
        };
    }

    function createExplosion(x, y) {
        const colors = ["red", "yellow", "blue", "white", "purple", "pink"];
        for (let i = 0; i < 30; i++) {
            particles.push(createParticle(x, y, colors[Math.floor(Math.random() * colors.length)]));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.x += p.velocityX;
            p.y += p.velocityY;
            p.life--;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();

            if (p.life <= 0) particles.splice(i, 1);
        });

        requestAnimationFrame(animate);
    }

    // Create Fireworks at Random Positions
    setInterval(() => {
        createExplosion(Math.random() * canvas.width, Math.random() * canvas.height / 2);
    }, 1000);

    animate();
}
