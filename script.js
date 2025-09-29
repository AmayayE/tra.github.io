document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    this.reset();
});

// Animation au défilement
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.product-card, .service-card');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialisation des animations
document.querySelectorAll('.product-card, .service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

