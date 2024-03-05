// Ajouter un écouteur d'événement au bouton CTA
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        const productsSection = document.querySelector('#products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Ajouter des écouteurs d'événement aux boutons "En savoir plus"
const learnMoreButtons = document.querySelectorAll('.learn-more-button');
learnMoreButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const description = this.previousElementSibling.innerText;
        alert('Description: ' + description);
    });
});

// Ajouter un écouteur d'événement au formulaire de contact
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    });
}
