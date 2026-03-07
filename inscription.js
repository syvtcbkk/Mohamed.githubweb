
function register() {
  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;
  const alertEl = document.getElementById('alert');

  alertEl.className = 'alert';
  alertEl.textContent = '';

  // Validations
  if (!nom || !email || !password || !confirm) {
    alertEl.className = 'alert alert-error';
    alertEl.textContent = 'Veuillez remplir tous les champs.';
    return;
  }

  if (password.length < 6) {
    alertEl.className = 'alert alert-error';
    alertEl.textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
    return;
  }

  if (password !== confirm) {
    alertEl.className = 'alert alert-error';
    alertEl.textContent = 'Les mots de passe ne correspondent pas.';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alertEl.className = 'alert alert-error';
    alertEl.textContent = 'Adresse email invalide.';
    return;
  }

  // Vérifier si l'email est déjà utilisé
  const users = JSON.parse(localStorage.getItem('rf_users') || '[]');
  if (users.find(u => u.email === email)) {
    alertEl.className = 'alert alert-error';
    alertEl.textContent = 'Cette adresse email est déjà utilisée.';
    return;
  }

  // Enregistrer l'utilisateur
  users.push({ nom, email, password });
  localStorage.setItem('rf_users', JSON.stringify(users));

  alertEl.className = 'alert alert-success';
  alertEl.textContent = 'Compte créé avec succès ! Redirection vers la connexion...';

  setTimeout(() => {
    window.location.href = 'connexion.html';
  }, 1500);
}

// Si déjà connecté, rediriger vers l'accueil
(function() {
  if (localStorage.getItem('rf_current_user')) {
    window.location.href = 'index.html';
  }
})();
