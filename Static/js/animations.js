document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.button');

    // Fonction pour détecter quand un élément est visible dans la fenêtre
    function isInView(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Animation pour les sections
    function animateSections() {
        sections.forEach((section, index) => {
            if (isInView(section)) {
                section.classList.add('animate-section');
                section.style.animationDelay = `${index * 0.3}s`;  // Delay pour chaque section
            }
        });
    }

    // Animation pour les cartes
    function animateCards() {
        cards.forEach((card, index) => {
            if (isInView(card)) {
                card.classList.add('animate-card');
                card.style.animationDelay = `${index * 0.2}s`;  // Delay pour chaque carte
            }
        });
    }

    // Animation pour les boutons (effet de pulsation)
    function animateButtons() {
        buttons.forEach(button => {
            button.classList.add('animate-button');
        });
    }

    // Lancer les animations au scroll
    window.addEventListener('scroll', () => {
        animateSections();
        animateCards();
    });

    // Initialiser les animations dès le chargement
    animateSections();
    animateCards();
    animateButtons();
});
