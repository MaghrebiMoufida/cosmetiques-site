document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.querySelectorAll('.learn-more-button').forEach(function(button) {
    button.addEventListener('click', function() {
      const description = this.previousElementSibling.innerText;
      alert('Description: ' + description);
    });
  });
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
  });