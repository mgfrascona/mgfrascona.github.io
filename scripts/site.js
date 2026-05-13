const key = "It's a secret to everybody."
localStorage.setItem(key, JSON.stringify('Hello, World!'))

const hamburgerIcon = document.querySelector('.hamburgerIcon');
const navMenu = document.querySelector('nav ul');

if (window.innerWidth < 768) {
    hamburgerIcon.addEventListener('click', () => {
        navMenu.classList.toggle('open')
    })
} else {
    navMenu.classList.remove('open')
}

if (window.matchMedia('(hover: none)').matches) {
    document.querySelectorAll('.projectBoxOverlay p, .projectBoxOverlay button').forEach(el => {
        el.style.opacity = '1'
        el.style.maxHeight = '200px'
        el.style.transform = 'translateY(0)'
        el.style.marginBottom = '14px'
    })
}

/* =============================================
   PROJECTS CAROUSEL
   ============================================= */
(function initProjectCarousel() {
    const carousel = document.querySelector('.projectsCarousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carouselTrack');
    const slides = Array.from(track.children);
    const prevBtn = carousel.querySelector('.carouselPrev');
    const nextBtn = carousel.querySelector('.carouselNext');
    const dotsContainer = carousel.querySelector('.carouselDots');

    let currentIndex = 0;

    function slidesPerView() {
        if (window.innerWidth <= 768) return 1;
        return 2;
    }

    function maxIndex() {
        return Math.max(0, slides.length - slidesPerView());
    }

    function buildDots() {
        dotsContainer.innerHTML = '';
        const pages = maxIndex() + 1;
        for (let i = 0; i < pages; i++) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        }
    }

    function update() {
        const slide = slides[0];
        const slideWidth = slide.getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        const offset = currentIndex * (slideWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex();

        Array.from(dotsContainer.children).forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
            dot.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
        });
    }

    function goTo(index) {
        currentIndex = Math.max(0, Math.min(index, maxIndex()));
        update();
    }

    prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
    nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

    // Keyboard navigation when carousel is focused
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentIndex - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIndex + 1); }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchDeltaX = 0;
    let touching = false;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchDeltaX = 0;
        touching = true;
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
        if (!touching) return;
        touchDeltaX = e.touches[0].clientX - touchStartX;
    }, { passive: true });

    track.addEventListener('touchend', () => {
        if (!touching) return;
        touching = false;
        const threshold = 50;
        if (touchDeltaX > threshold) goTo(currentIndex - 1);
        else if (touchDeltaX < -threshold) goTo(currentIndex + 1);
    });

    // Rebuild on resize (slides-per-view may change)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            currentIndex = Math.min(currentIndex, maxIndex());
            buildDots();
            update();
        }, 120);
    });

    buildDots();
    update();
})();