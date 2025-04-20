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









// cursor js



document.addEventListener('DOMContentLoaded', () => {
    const cursorDotRed = document.querySelector('.cursor-dot.red');
    const cursorDotBlue = document.querySelector('.cursor-dot.blue');
    
    // Position initiale
    let mouseX = 0;
    let mouseY = 0;
    let redX = 0;
    let redY = 0;
    let blueX = 0;
    let blueY = 0;
    
    // Vitesse de suivi (plus lent pour la grosse boule bleue)
    const speedRed = 0.2;
    const speedBlue = 0.05;
    
    // Animation
    function animate() {
        // Calcul de la distance à parcourir
        let distX = mouseX - redX;
        let distY = mouseY - redY;
        
        // Déplacement de la petite boule rouge
        redX = redX + (distX * speedRed);
        redY = redY + (distY * speedRed);
        
        // Déplacement de la grosse boule bleue
        distX = mouseX - blueX;
        distY = mouseY - blueY;
        blueX = blueX + (distX * speedBlue);
        blueY = blueY + (distY * speedBlue);
        
        // Application des positions
        cursorDotRed.style.left = redX + 'px';
        cursorDotRed.style.top = redY + 'px';
        
        cursorDotBlue.style.left = blueX + 'px';
        cursorDotBlue.style.top = blueY + 'px';
        
        requestAnimationFrame(animate);
    }
    
    // Suivi de la souris
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Désactivation du curseur par défaut
    document.body.style.cursor = 'none';
    
    // Lancement de l'animation
    animate();
    
    // Effet au survol des éléments cliquables
    const clickables = document.querySelectorAll('button, a, [cursor-none]');
    clickables.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursorDotBlue.style.width = '20px';
            cursorDotBlue.style.height = '20px';
        });
        el.addEventListener('mouseout', () => {
            cursorDotBlue.style.width = '30px';
            cursorDotBlue.style.height = '30px';
        });
    });
});

