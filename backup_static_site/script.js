
document.addEventListener('DOMContentLoaded', () => {
    // --- Background Ripple Effect ---
    const container = document.getElementById('background-ripple');
    const boxSize = 50; // Increased slightly for performance
    let boxes = [];
    let mouseX = -1000;
    let mouseY = -1000;

    function createGrid() {
        container.innerHTML = '';
        boxes = [];

        const cols = Math.ceil(window.innerWidth / boxSize);
        const rows = Math.ceil(window.innerHeight / boxSize);

        container.style.display = 'grid';
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const box = document.createElement('div');
                box.classList.add('ripple-box');
                // Optional: varying opacities for texture
                box.style.opacity = Math.random() * 0.1 + 0.05;
                container.appendChild(box);

                // Pre-calculate center position
                // We can approximate center based on index since it's a grid
                // or just read it once.
                // Actually, reading rect once here is fine.
                // But since grid is flexible, strict pixel coords might drift if window resizes slightly without triggering full re-layout (e.g. scrollbars).
                // Let's just store the element for now and read rects ONLY if needed, or better:
                // Calculate position based on r * boxSize + boxSize/2

                const x = c * (window.innerWidth / cols) + (window.innerWidth / cols / 2);
                const y = r * (window.innerHeight / rows) + (window.innerHeight / rows / 2);

                boxes.push({
                    element: box,
                    x: x,
                    y: y
                });
            }
        }
    }

    createGrid();

    // Debounce resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(createGrid, 200);
    });

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        // Only checking proximity to mouse
        const maxDistance = 250;

        boxes.forEach(boxObj => {
            const dx = mouseX - boxObj.x;
            const dy = mouseY - boxObj.y;
            // Check bounding box first for speed (manhattan distance approx)
            if (Math.abs(dx) < maxDistance && Math.abs(dy) < maxDistance) {
                const distanceStr = dx * dx + dy * dy;

                if (distanceStr < maxDistance * maxDistance) {
                    const distance = Math.sqrt(distanceStr);
                    const intensity = 1 - (distance / maxDistance);

                    boxObj.element.style.transform = `scale(${1 + intensity * 0.5})`;
                    boxObj.element.style.borderColor = `rgba(139, 92, 246, ${intensity * 0.5})`;
                    boxObj.element.style.backgroundColor = `rgba(139, 92, 246, ${intensity * 0.1})`;
                } else {
                    // Reset if previously active (optimization: could track state)
                    if (boxObj.element.style.transform !== '') {
                        boxObj.element.style.transform = '';
                        boxObj.element.style.borderColor = '';
                        boxObj.element.style.backgroundColor = '';
                    }
                }
            } else {
                // Ensure reset
                if (boxObj.element.style.transform !== '') {
                    boxObj.element.style.transform = '';
                    boxObj.element.style.borderColor = '';
                    boxObj.element.style.backgroundColor = '';
                }
            }
        });

        requestAnimationFrame(animate);
    }

    animate();

    // --- Mobile Menu Toggle ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }


    // --- Smooth Scroll with Offset ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('nav').offsetHeight;
                // Accounts for fixed header
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Navbar Blur Effect on Scroll ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('bg-black/80', 'backdrop-blur-xl');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('bg-black/80', 'backdrop-blur-xl');
                navbar.classList.add('bg-transparent');
            }
        });
    }

    // --- Initialize Lucide Icons ---
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
