// Fonction pour ajouter ou enlever la classe 'scrolled' à l'header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Fonction pour le menu hamburger
  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navbar.classList.toggle('active');
    });
    
    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
      });
    });
  });



/* Compteur JS pour les stats */
const counters = document.querySelectorAll('.stat-number[data-count]');
const speed = 200;

counters.forEach(counter => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const increment = target / speed;
    
    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
    } else {
        counter.innerText = target;
    }
    
    function updateCount() {
        const count = +counter.innerText;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    }
});
    




    const Fiabilite =document.getElementById('Fiabilite');
    const hiddenFiabilite =document.getElementById('hiddentextFiabilite');
    Fiabilite.addEventListener('click',function(event){
        event.preventDefault();
        if (hiddentextFiabilite.style.display ==="none" || hiddentextFiabilite.style.display ==="") {
            hiddentextFiabilite.style.display = "block",
            hiddentextFiabilite.style.animation ="fadeInUp 2s ease-out forwards"
        }
        else{
            hiddentextFiabilite.style.display ="none"
            hiddentextFiabilite.style.animation ="fadeInUp 2s ease-out forwards"
        }
    }
);




    const Accessibilite =document.getElementById('Accessibilite');
    const hiddentextAccessibilite =document.getElementById('hiddentextAccessibilite');
    Accessibilite.addEventListener('click',function(event){
        event.preventDefault();
        if (hiddentextAccessibilite.style.display ==="none" || hiddentextAccessibilite.style.display ==="") {
            hiddentextAccessibilite.style.display = "block",
            hiddentextAccessibilite.style.animation ="fadeInUp 2s ease-out forwards"
        }
        else{
            hiddentextAccessibilite.style.display ="none"
            hiddentextAccessibilite.style.animation ="fadeInUp 2s ease-out forwards"
        }
    }
);



    const Engagement =document.getElementById('Engagement');
    const hiddenEngagement =document.getElementById('hiddentextEngagement');
    Engagement.addEventListener('click',function(event){
        event.preventDefault();
        if (hiddentextEngagement.style.display ==="none" || hiddentextEngagement.style.display ==="") {
            hiddentextEngagement.style.display = "block",
            hiddentextEngagement.style.animation ="fadeInUp 2s ease-out forwards"
        }
        else{
            hiddentextEngagement.style.display ="none"
            hiddentextEngagement.style.animation ="fadeInUp 2s ease-out forwards"
        }
    }
);







    // Initialisation (remplacez par votre User ID)
    emailjs.init('CniMfQSg5wTvd1NTx');
    
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours...';
        
        // Envoi via EmailJS (remplacez service et template ID)
        emailjs.sendForm('service_t4hnjoy', 'template_5qg4i7b', this)
            .then(() => {
                alert('Message envoyé avec succès !');
                this.reset();
            }, (error) => {
                alert('Erreur : Veuillez réessayer ou nous contacter directement.');
                console.error('Erreur EmailJS:', error);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer le message';
            });
    });