// Custom Cursor
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 80);
});

document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        follower.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        follower.classList.remove('active');
    });
});
// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2500);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(204, 51, 85, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Typing effect
const text = "I Build Apps with AI & the Future.";
const typingEl = document.querySelector('.hero-title');
if (typingEl) {
    typingEl.innerHTML = '';
    let i = 0;
    setTimeout(() => {
        const typing = setInterval(() => {
            const current = text.slice(0, i);
            typingEl.innerHTML = current
                .replace('AI', '<span class="accent">AI</span>')
                .replace('Future.', '<span class="accent2">Future.</span>');
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
    }, 2800);
}

// Fade in sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Skill cards stagger
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.skill-card').forEach((card, i) => {
                setTimeout(() => card.classList.add('visible'), i * 60);
            });
        }
    });
}, { threshold: 0.2 });

const skillsSection = document.querySelector('#skills');
if (skillsSection) skillObserver.observe(skillsSection);

// Project cards stagger
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.project-card').forEach((card, i) => {
                setTimeout(() => card.classList.add('visible'), i * 100);
            });
        }
    });
}, { threshold: 0.1 });

const projectsSection = document.querySelector('#projects');
if (projectsSection) projectObserver.observe(projectsSection);

// Dark/Light theme toggle
function toggleTheme() {
    document.body.classList.toggle('light');
    const btn = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('light')) {
        btn.textContent = '🌙 Dark';
    } else {
        btn.textContent = '☀️ Light';
    }
}

// Contact form
function sendMessage() {
    const inputs = document.querySelectorAll('.form-input');
    const textarea = document.querySelector('.form-textarea');
    if (inputs[0].value && inputs[1].value && textarea.value) {
        alert('Message sent! I will get back to you soon. 🚀');
        inputs.forEach(i => i.value = '');
        textarea.value = '';
    } else {
        alert('Please fill all fields!');
    }
}
// Particles
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#cc3355' },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 2, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#cc3355',
            opacity: 0.1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' }
        },
        modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
        }
    }
});
