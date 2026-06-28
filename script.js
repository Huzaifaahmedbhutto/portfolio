// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2000);
});
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0, 229, 255, 0.05)';
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
                .replace('AI', '<span class="cyan">AI</span>')
                .replace('Future.', '<span class="purple">Future.</span>');
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
    }, 300);
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
        btn.textContent = '☀️ Light';
    } else {
        btn.textContent = '🌙 Dark';
    }
}
