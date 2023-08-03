document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    let canvasWidth, canvasHeight;
    let dots = [];
    const numDots = 35;
    const lineThreshold = 100;
    const rainbowThreshold = 95; // Odległość od kursora, od której zaczynają być tęczowe
    const lineWidth = 1; // Szerokość linii
    const maxLineLength = 100; // Maksymalna długość linii
    let mouse = { x: 0, y: 0 };

    function configureCanvas() {
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
    }

    class Dot {
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.speedX = getRandomValue(-0.5, 0.5);
            this.speedY = getRandomValue(-0.5, 0.5);
            this.isRainbow = false;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvasWidth) {
                this.speedX = -this.speedX;
            }
            if (this.y < 0 || this.y > canvasHeight) {
                this.speedY = -this.speedY;
            }

            // Reakcja na kursor i animacja tęczowego efektu
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < lineThreshold) {
                if (distance < rainbowThreshold) {
                    this.isRainbow = true;
                } else {
                    this.isRainbow = false;
                }
            } else {
                this.isRainbow = false;
            }
        }

        drawLineToMouse() {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < lineThreshold) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);

                // Obliczamy długość linii tak, aby nie przekraczała maxLineLength
                const lineLength = Math.min(distance, maxLineLength);

                // Obliczamy punkt docelowy na linii
                const targetX = this.x - (dx / distance) * lineLength;
                const targetY = this.y - (dy / distance) * lineLength;

                ctx.lineTo(targetX, targetY);

                // Animacja tęczowego efektu
                if (this.isRainbow) {
                    const gradient = ctx.createLinearGradient(this.x, this.y, targetX, targetY);
                    gradient.addColorStop(0, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
                    gradient.addColorStop(1, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
                    ctx.strokeStyle = gradient;
                } else {
                    ctx.strokeStyle = "#ffffff";
                }

                ctx.lineWidth = lineWidth;
                ctx.stroke();
                ctx.closePath();
            }
        }
    }

    function getRandomValue(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createDots() {
        dots = [];
        for (let i = 0; i < numDots; i++) {
            const x = getRandomValue(0, canvasWidth);
            const y = getRandomValue(0, canvasHeight);
            const radius = getRandomValue(1, 3);
            dots.push(new Dot(x, y, radius));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        for (let i = 0; i < numDots; i++) {
            dots[i].update();
            ctx.beginPath();
            ctx.arc(dots[i].x, dots[i].y, dots[i].radius, 0, Math.PI * 2);

            if (dots[i].isRainbow) {
                ctx.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            } else {
                ctx.fillStyle = "#ffffff";
            }

            ctx.fill();
            ctx.closePath();

            dots[i].drawLineToMouse();
        }
        setTimeout(function() {
            requestAnimationFrame(animate);
        }, 1000 / 60);
    }

    function updateMousePosition(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    configureCanvas();
    createDots();
    animate();

    window.addEventListener("resize", function() {
        configureCanvas();
        createDots();
    });

    window.addEventListener("mousemove", updateMousePosition);
});