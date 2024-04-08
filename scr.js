// Get all the "En savoir plus" buttons
const learnMoreButtons = document.querySelectorAll('.learn-more-button');

// Add an event listener to each button
learnMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Create a new modal element
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Create a new close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'Fermer';
    closeButton.addEventListener('click', () => {
      modal.remove();
    });

    // Create a new modal content element
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Add the close button to the modal content
    modalContent.appendChild(closeButton);

    // Add the content to the modal content
    const productName = button.parentElement.querySelector('h3').textContent;
    const productDescription = button.parentElement.querySelector('p').textContent;
    const productImage = button.parentElement.querySelector('img').src;

    const productContent = document.createElement('div');
    productContent.classList.add('product-content');

    const productImageElement = document.createElement('img');
    productImageElement.src = productImage;
    productImageElement.alt = productName;
    productContent.appendChild(productImageElement);

    const productTitle = document.createElement('h3');
    productTitle.textContent = productName;
    productContent.appendChild(productTitle);

    const productDescriptionElement = document.createElement('p');
    productDescriptionElement.textContent = productDescription;
    productContent.appendChild(productDescriptionElement);

    modalContent.appendChild(productContent);

    // Add the modal content to the modal
    modal.appendChild(modalContent);

    // Add the modal to the body
    document.body.appendChild(modal);
  });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all the "Envoyer" buttons
    var sendButtons = document.querySelectorAll('.send-button');

    // Add an event listener to each button
    sendButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // Get the corresponding paragraph
            var paragraph = this.previousElementSibling;
            // Toggle the 'hidden' class to show/hide the paragraph
            paragraph.classList.toggle('hidden');
        });
    });


    // Create a new modal element
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Create a new close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'Fermer';
    closeButton.addEventListener('click'), () => {
      modal.remove();
    }

    // Create a new modal content element
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Add the close button to the modal content
    modalContent.appendChild(closeButton);

    // Add the content to the modal content
    const productName = button.parentElement.querySelector('h3').textContent;
    const productDescription = button.parentElement.querySelector('p').textContent;
    const productImage = button.parentElement.querySelector('img').src;

    const productContent = document.createElement('div');
    productContent.classList.add('product-content');

    const productImageElement = document.createElement('img');
    productImageElement.src = productImage;
    productImageElement.alt = productName;
    productContent.appendChild(productImageElement);

    const productTitle = document.createElement('h3');
    productTitle.textContent = productName;
    productContent.appendChild(productTitle);

    const productDescriptionElement = document.createElement('p');
    productDescriptionElement.textContent = productDescription;
    productContent.appendChild(productDescriptionElement);

    modalContent.appendChild(productContent);

    // Add the modal content to the modal
    modal.appendChild(modalContent);

    // Add the modal to the body
    document.body.appendChild(modal);
  });
