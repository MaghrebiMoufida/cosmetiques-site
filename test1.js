QUnit.test("Test de la création de modal", function(assert) {
    // Créer un bouton "En savoir plus" simulé
    const button = document.createElement('button');
    button.classList.add('learn-more-button');
    document.body.appendChild(button);

    // Simuler un clic sur le bouton
    button.click();

    // Vérifier si la modal a été créée
    const modal = document.querySelector('.modal');
    assert.ok(modal, "La modal a été créée avec succès.");

    // Vérifier si le bouton "Fermer" est présent dans la modal
    const closeButton = modal.querySelector('.close-button');
    assert.ok(closeButton, "Le bouton 'Fermer' est présent dans la modal.");

    // Vérifier si le contenu de la modal est correct
    const productName = modal.querySelector('.product-content h3').textContent;
    const productDescription = modal.querySelector('.product-content p').textContent;
    const productImage = modal.querySelector('.product-content img').src;

    assert.strictEqual(productName, "Product 1", "Le nom du produit est correct.");
    assert.strictEqual(productDescription, "Description du produit 1", "La description du produit est correcte.");
    assert.strictEqual(productImage, "img.jpg", "L'image du produit est correcte.");
});
