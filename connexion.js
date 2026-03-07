

function login() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const alertEl = document.getElementById('alert');

  alertEl.className = 'alert';
  alertEl.textContent = '';

  if (!email || !password) {
    alertEl.className = 'alert alert-error';
    alertEl.textContent = 'Veuillez remplir tous les champs.';
    return;
  }

  // Vérification dans localStorage 
  const users = JSON.parse(localStorage.getItem('rf_users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alertEl.className = 'alert alert-error';
    alertEl.textContent = 'Email ou mot de passe incorrect.';
    return;
  }

  // Stocker la session
  localStorage.setItem('rf_current_user', JSON.stringify({ nom: user.nom, email: user.email }));

  alertEl.className = 'alert alert-success';
  alertEl.textContent = `Bienvenue, ${user.nom} ! Redirection en cours...`;

  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 1200);
}

// Si déjà connecté, rediriger vers l'accueil
(function() {
  if (localStorage.getItem('rf_current_user')) {
    window.location.href = 'index.html';
  }
})();
