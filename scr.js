document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        });
    }

    // Carousel
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;

    if (carouselInner && carouselItems.length > 0 && prevBtn && nextBtn) {
        function updateCarousel() {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel();
        });
    }

    // Modals pour "En savoir plus"
    const learnMoreButtons = document.querySelectorAll('.learn-more-button');
    if (learnMoreButtons.length > 0) {
        learnMoreButtons.forEach(button => {
            button.addEventListener('click', () => {
                const product = button.parentElement;
                const name = product.querySelector('h3')?.textContent || 'Produit inconnu';
                const description = product.querySelector('p')?.textContent || 'Description non disponible';
                const image = product.querySelector('img')?.src || '';

                const modal = document.createElement('div');
                modal.classList.add('modal', 'active');

                const modalContent = document.createElement('div');
                modalContent.classList.add('modal-content');

                const closeButton = document.createElement('button');
                closeButton.classList.add('close-button');
                closeButton.textContent = 'Fermer';
                closeButton.addEventListener('click', () => modal.remove());

                modalContent.innerHTML = `
                    <img src="${image}" alt="${name}" loading="lazy" style="max-width: 100%; height: auto;">
                    <h3>${name}</h3>
                    <p>${description}</p>
                `;
                modalContent.appendChild(closeButton);
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
            });
        });
    }

    // Panier pour "Ajouter au panier" et gestion moderne
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItems && cartTotal && checkoutButton) {
        function updateCart() {
            cartItems.innerHTML = '';
            let total = 0;
            cart.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    ${item.name} - ${item.price} €
                    <button class="remove-item" data-index="${index}">Supprimer</button>
                `;
                cartItems.appendChild(li);
                total += item.price;
            });
            cartTotal.textContent = total || '0';
            localStorage.setItem('cart', JSON.stringify(cart));

            // Ajouter les écouteurs pour les boutons "Supprimer"
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', () => {
                    const index = parseInt(button.dataset.index);
                    cart.splice(index, 1); // Supprimer l'article
                    updateCart(); // Mettre à jour le panier
                });
            });
        }

        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        if (addToCartButtons.length > 0) {
            addToCartButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const product = button.dataset.product;
                    const price = parseInt(button.dataset.price) || 0;
                    if (product && price) {
                        cart.push({ name: product, price });
                        updateCart();
                    }
                });
            });
        }

        // Bouton "Payer"
        checkoutButton.addEventListener('click', () => {
            if (cart.length > 0) {
                alert('Paiement simulé ! Total : ' + cartTotal.textContent + ' €. (Fonctionnalité fictive sans backend)');
                cart = []; // Vider le panier après "paiement"
                updateCart();
            } else {
                alert('Votre panier est vide !');
            }
        });

        updateCart();
    }

    // Recherche et filtre
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    const products = document.querySelectorAll('.product-grid li');

    if (searchInput && categoryFilter && products.length > 0) {
        function filterProducts() {
            const searchText = searchInput.value.toLowerCase();
            const category = categoryFilter.value;

            products.forEach(product => {
                const name = product.querySelector('h3')?.textContent.toLowerCase() || '';
                const productCategory = product.dataset.category || 'all';
                const matchesSearch = name.includes(searchText);
                const matchesCategory = category === 'all' || productCategory === category;
                product.style.display = matchesSearch && matchesCategory ? 'block' : 'none';
            });
        }

        searchInput.addEventListener('input', filterProducts);
        categoryFilter.addEventListener('change', filterProducts);
        filterProducts(); // Appliquer au chargement
    }
});