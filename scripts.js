
        // JavaScript pour la suggestion de recherche
        const suggestions = ["Téléphone", "Ordinateur", "T-shirt", "Chaussures", "Sac à dos", "Montre", "Casque"];
        const searchInput = document.getElementById("search");
        const suggestionsList = document.getElementById("suggestions");
        searchInput.addEventListener("input", function() {
            const input = this.value.toLowerCase();
            suggestionsList.innerHTML = "";
            if (input.length > 0) {
                const filtered = suggestions.filter(item => item.toLowerCase().includes(input));
                filtered.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item;
                    li.addEventListener("click", function() {
                        searchInput.value = item;
                        suggestionsList.innerHTML = "";
                    });
                    suggestionsList.appendChild(li);
                });
            }
        });

        // JavaScript pour le carrousel modifié
        let currentSlide = 0;
        const track = document.querySelector('.carousel-track');
        const slides = document.querySelectorAll('.carousel-item');
        const slideCount = slides.length;
        const controlsContainer = document.getElementById('carousel-controls');
        
        // Créer les contrôles du carrousel
        for (let i = 0; i < slideCount; i++) {
            const control = document.createElement('div');
            control.classList.add('carousel-control');
            if (i === currentSlide) control.classList.add('active');
            control.addEventListener('click', () => {
                currentSlide = i;
                updateCarousel();
            });
            controlsContainer.appendChild(control);
        }
        
        const controls = document.querySelectorAll('.carousel-control');
        
        function updateCarousel() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Mettre à jour les contrôles actifs
            controls.forEach((control, index) => {
                control.classList.toggle('active', index === currentSlide);
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideCount;
            updateCarousel();
        }
        
        setInterval(nextSlide, 5000); // Change la slide toutes les 5 secondes

        // JavaScript pour le compteur du panier avec localStorage
        const cartCountElem = document.getElementById("cart-count");
        let cartCount = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;
        cartCountElem.textContent = cartCount;
        const addCartButtons = document.querySelectorAll(".add-cart-btn");
        addCartButtons.forEach(button => {
            button.addEventListener("click", () => {
                cartCount++;
                cartCountElem.textContent = cartCount;
                localStorage.setItem("cartCount", cartCount);
                
                // Animation du bouton
                button.textContent = "✓ Ajouté!";
                setTimeout(() => {
                    button.textContent = "Ajouter au panier";
                }, 1500);
            });
        });

        // Sélecteur de langue
        document.getElementById("language").addEventListener("change", function() {
            if (this.value === "ar") {
                alert("Langue changée en Arabe (simulée)");
                // Logique pour charger le contenu en arabe peut être ajoutée ici
            }
        });
  
