// scripts.js

// Lorsque le bouton "Shop Now" est cliqué, cela fait défiler l'écran vers la section "Products"
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Lorsque l'un des boutons "Learn More" est cliqué, cela affiche une alerte avec la description du produit correspondant
  document.querySelectorAll('.learn-more-button').forEach(function(button) {
    button.addEventListener('click', function() {
      const description = this.previousElementSibling.innerText;
      alert('Description: ' + description);
    });
  });
  
  // Lorsque le formulaire de contact est soumis, cela affiche un message de confirmation
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
  });