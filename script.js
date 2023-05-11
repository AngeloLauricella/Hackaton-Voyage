// Script.js

// Sélectionner tous les éléments de la liste de la barre latérale
const sidebarItems = document.querySelectorAll('.sidebar .list-group-item');

// Ajouter un gestionnaire d'événements de clic à chaque élément
sidebarItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Supprimer la classe "active" de tous les éléments
    sidebarItems.forEach((item) => {
      item.classList.remove('active');
    });

    // Ajouter la classe "active" à l'élément cliqué
    item.classList.add('active');
  });
});