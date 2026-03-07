
(function authGuard() {
  if (!localStorage.getItem("rf_current_user")) {
    window.location.href = "connexion.html";
  }
})();

function logout() {
  localStorage.removeItem('rf_current_user');
  window.location.href = 'connexion.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('rf_current_user') || 'null');

  // Rediriger si non connecté
  if (!user) {
    window.location.href = 'connexion.html';
    return;
  }

  // Message de bienvenue
  const welcome = document.getElementById('welcome');
  if (welcome) welcome.textContent = `Bonjour, ${user.nom} 👋`;

  // Compte des favoris
  const favCount = document.getElementById('fav-count');
  if (favCount) {
    const favs = JSON.parse(localStorage.getItem('rf_favorites') || '[]');
    favCount.textContent = favs.length;
  }

  // Statut du compte
  const accountStatus = document.getElementById('account-status');
  if (accountStatus) {
    accountStatus.textContent = 'Actif';
    accountStatus.style.color = '#2E7D32';
  }
});
