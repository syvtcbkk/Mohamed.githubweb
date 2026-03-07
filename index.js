// index.js — Page d'accueil (pas de guard, page publique)

document.addEventListener('DOMContentLoaded', () => {
  // Adapter la nav selon si connecté ou non
  const user = JSON.parse(localStorage.getItem('rf_current_user') || 'null');
  const navMenu = document.querySelector('.nav-menu');
  if (navMenu && user) {
    // Remplacer Connexion/Inscription par Dashboard/Déconnexion
    const liConnexion = navMenu.querySelector('a[href="connexion.html"]')?.parentElement;
    const liInscription = navMenu.querySelector('a[href="inscription.html"]')?.parentElement;
    if (liConnexion) liConnexion.innerHTML = `<a href="dashboard.html" class="nav-link">Tableau de bord</a>`;
    if (liInscription) liInscription.innerHTML = `<a href="#" class="nav-link" onclick="localStorage.removeItem('rf_current_user');location.href='connexion.html'">Déconnexion</a>`;
  }
});