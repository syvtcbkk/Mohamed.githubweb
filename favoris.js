
function renderFavCard(restaurant) {
  return `
    <div class="card" id="fav-card-${restaurant.id}">
      <img src="${restaurant.photo}" alt="Photo de ${restaurant.name}" style="width:100%;height:160px;object-fit:cover;border-radius:8px 8px 0 0;">
      <div style="padding:1rem;">
        <span class="badge-category">${restaurant.category}</span>
        <h3 style="margin:.4rem 0 .2rem;">${restaurant.name}</h3>
        <p style="color:#888;font-size:.9rem;margin:.2rem 0;">📍 ${restaurant.city}</p>
        <div style="margin:.4rem 0;">
          ${renderStars(restaurant.rating)}
          <span style="color:#888;font-size:.85rem;margin-left:.3rem;">${restaurant.rating}</span>
        </div>
        <div style="display:flex;gap:.6rem;margin-top:.6rem;">
          <a href="Restaurant.html?id=${restaurant.id}" style="flex:1;">
            <button class="btn btn-primary" style="width:100%;">Voir la fiche</button>
          </a>
          <button class="btn btn-outline" onclick="handleRemoveFav(${restaurant.id})" aria-label="">
            🗑️ Retirer
          </button>
        </div>
      </div>
    </div>
  `;
}

function handleRemoveFav(id) {
  removeFromFavorites(id);
  const card = document.getElementById(`fav-card-${id}`);
  if (card) card.remove();

  // Afficher le message vide si plus aucun favori
  const grid = document.getElementById('favoris-list');
  if (grid && grid.children.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#888;padding:2rem;">Vous n\'avez aucun restaurant en favoris pour le moment.<br><a href="index.html">Découvrir des restaurants</a></p>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('favoris-list');
  if (!grid) return;

  const favIds = getFavorites();
  const favRestaurants = restaurants.filter(r => favIds.includes(r.id));

  if (favRestaurants.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#888;padding:2rem;">Vous n\'avez aucun restaurant en favoris pour le moment.<br><a href="index.html">Découvrir des restaurants</a></p>';
  } else {
    grid.innerHTML = favRestaurants.map(renderFavCard).join('');
  }
});
