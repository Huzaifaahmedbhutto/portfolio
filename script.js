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
        header.style.boxShadow = '0 2px 20px rgba(0, 229, 255, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Fade in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Typing effect
const text = "Huzaifa Ahmed Bhutto";
const typingEl = document.querySelector('.about-text h2');
typingEl.textContent = '';
let i = 0;
setTimeout(() => {
    const typing = setInterval(() => {
        typingEl.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(typing);
    }, 80);
}, 500);

// Skill cards stagger animation
document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
});

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.skill-card').forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }
    });
}, { threshold: 0.2 });

const skillsSection = document.querySelector('#skills');
if (skillsSection) skillObserver.observe(skillsSection);
