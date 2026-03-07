
//Utilitaires favoris//
function getFavorites() {
  return JSON.parse(localStorage.getItem('rf_favorites') || '[]');
}
function saveFavorites(ids) {
  localStorage.setItem('rf_favorites', JSON.stringify(ids));
}
function isFavorite(id) {
  return getFavorites().includes(id);
}
function toggleFavorite(id) {
  let favs = getFavorites();
  favs = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id];
  saveFavorites(favs);
  return favs.includes(id);
}

// Rendu étoiles//
function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating))      html += '<span style="color:#E65100;">★</span>';
    else if (i - rating < 1)          html += '<span style="color:#E65100;opacity:.5;">★</span>';
    else                              html += '<span style="color:#ddd;">☆</span>';
  }
  return html;
}

//mode list//
function renderCard(r) {
  const fav = isFavorite(r.id);
  return `
    <div class="card" style="position:relative;border-radius:10px;overflow:hidden;transition:box-shadow .2s,transform .2s;">
      <div style="position:relative;">
        <img src="${r.photo}" alt="Photo de ${r.name}" style="width:100%;height:180px;object-fit:cover;display:block;">
        <button onclick="handleToggleFav(event,${r.id})" id="fav-btn-${r.id}"
          style="position:absolute;top:8px;right:8px;background:white;border:none;border-radius:50%;
                 width:36px;height:36px;font-size:1.1rem;cursor:pointer;
                 box-shadow:0 2px 6px rgba(0,0,0,.25);">
          ${fav ? 'Favori' : '❤️'}
        </button>
      </div>
      <div style="padding:1rem;">
        <span style="display:inline-block;background:#E65100;color:white;font-size:.75rem;
                     padding:.2rem .6rem;border-radius:20px;text-transform:capitalize;font-weight:600;">
          ${r.category}
        </span>
        <h3 style="margin:.4rem 0 .2rem;">${r.name}</h3>
        <p style="color:#888;font-size:.88rem;margin:.2rem 0;"> ${r.city}</p>
        <div style="margin:.4rem 0;">
          ${renderStars(r.rating)}
          <span style="color:#888;font-size:.82rem;">${r.rating} (${r.reviewsCount} avis)</span>
        </div>
        <a href="Restaurant.html?id=${r.id}" style="text-decoration:none;">
          <button class="btn btn-primary" style="width:100%;margin-top:.5rem;">Voir la fiche</button>
        </a>
      </div>
    </div>`;
}

function handleToggleFav(e, id) {
  e.stopPropagation();
  const isNow = toggleFavorite(id);
  const btn = document.getElementById('fav-btn-' + id);
  if (btn) btn.textContent = isNow ? '❤️' : '❤️';
}

function getFiltered() {
  const q   = (document.getElementById('search-q')?.value   || '').toLowerCase().trim();
  const loc = (document.getElementById('search-loc')?.value || '').toLowerCase().trim();
  const cat = (document.getElementById('search-cat')?.value || '').toLowerCase().trim();
  return restaurants.filter(r => {
    const matchQ   = !q   || r.name.toLowerCase().includes(q) || r.category.toLowerCase().includes(q);
    const matchLoc = !loc || r.city.toLowerCase().includes(loc);
    const matchCat = !cat || r.category.toLowerCase() === cat;
    return matchQ && matchLoc && matchCat;
  });
}

function renderGrid(list) {
  const grid = document.getElementById('restaurants-grid');
  const counter = document.getElementById('result-count');
  if (!grid) return;
  grid.innerHTML = list.length === 0
    ? `<p style="grid-column:1/-1;text-align:center;color:#888;padding:2rem;">Aucun résultat.</p>`
    : list.map(renderCard).join('');
  if (counter) counter.textContent = `${list.length} restaurant${list.length > 1 ? 's' : ''} trouvé${list.length > 1 ? 's' : ''}`;
}

function searchRestaurants() { renderGrid(getFiltered()); }

function renderListPage() {
  const detail = document.getElementById('restaurant-detail');
  if (!detail) return;

  detail.innerHTML = `
    <section class="section">
      <div class="container">
        <h1 style="margin-bottom:.3rem;">Restaurants au Gabon</h1>
        <p style="color:#888;margin-bottom:1.5rem;">Découvrez les meilleurs restaurants de Libreville, Port-Gentil, Franceville et Oyem.</p>

        <!-- Barre de recherche / filtres -->
        <div style="display:flex;flex-wrap:wrap;gap:.8rem;margin-bottom:1.5rem;">
          <input id="search-q" type="text" placeholder="Nom ou cuisine…"
            oninput="searchRestaurants()"
            style="flex:2;min-width:180px;padding:.6rem .9rem;border:1px solid #ddd;border-radius:6px;font-size:.95rem;">
          <select id="search-loc" onchange="searchRestaurants()"
            style="flex:1;min-width:130px;padding:.6rem .9rem;border:1px solid #ddd;border-radius:6px;font-size:.95rem;">
            <option value=""> Toutes les villes</option>
            <option value="libreville">Libreville</option>
            <option value="port-gentil">Port-Gentil</option>
            <option value="franceville">Franceville</option>
            <option value="oyem">Oyem</option>
          </select>
          <select id="search-cat" onchange="searchRestaurants()"
            style="flex:1;min-width:140px;padding:.6rem .9rem;border:1px solid #ddd;border-radius:6px;font-size:.95rem;">
            <option value="">Toutes catégories</option>
            <option value="africaine">Africaine</option>
            <option value="française">Française</option>
            <option value="libanaise">Libanaise</option>
            <option value="asiatique">Asiatique</option>
            <option value="fast-food">Fast-food</option>
            <option value="grillades">Grillades</option>
          </select>
        </div>

        <p id="result-count" style="color:#888;font-size:.9rem;margin-bottom:1rem;"></p>
        <div id="restaurants-grid" class="cards-grid"></div>
      </div>
    </section>`;

  renderGrid(restaurants);
}

function groupMenuByCategory(menu) {
  const cats = {};
  menu.forEach(item => {
    if (!cats[item.category]) cats[item.category] = [];
    cats[item.category].push(item);
  });
  return cats;
}

function renderDetailPage(r) {
  const detail = document.getElementById('restaurant-detail');
  if (!detail) return;

  const fav = isFavorite(r.id);
  const menuByCat = groupMenuByCategory(r.menu);
  const hoursRows = Object.entries(r.hours)
    .map(([day, h]) => `<tr><td>${day}</td><td>${h}</td></tr>`).join('');
  const reviewsHtml = r.reviews.map(rev => `
    <div class="review-card">
      <div class="review-meta">
        <span class="review-author">${rev.author}</span>
        <span>${renderStars(rev.rating)}</span>
        <span class="review-date">${rev.date}</span>
      </div>
      <p>${rev.comment}</p>
    </div>`).join('');
  const menuHtml = Object.entries(menuByCat).map(([cat, items]) => `
    <div class="menu-category">
      <h4>${cat}</h4>
      ${items.map(item => `
        <div class="menu-item">
          <span>${item.name}</span>
          <span class="menu-price">${item.price.toLocaleString('fr-FR')} FCFA</span>
        </div>`).join('')}
    </div>`).join('');

  detail.innerHTML = `
    <img src="${r.photo}" alt="${r.name}" class="restaurant-banner">
    <section class="section">
      <div class="container">

        <!-- En-tête -->
        <div style="display:flex;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:1rem;">
          <div style="flex:1;min-width:200px;">
            <span style="background:#E65100;color:white;font-size:.78rem;padding:.2rem .7rem;
                         border-radius:20px;text-transform:capitalize;font-weight:600;">${r.category}</span>
            <h1 style="margin:.4rem 0 .2rem;">${r.name}</h1>
            <p style="color:#888;margin:.2rem 0;"> ${r.address}</p>
            <div style="margin:.4rem 0;">
              ${renderStars(r.rating)}
              <span style="color:#888;font-size:.9rem;margin-left:.3rem;">${r.rating} (${r.reviewsCount} avis)</span>
            </div>
          </div>
          <div style="display:flex;gap:.6rem;flex-wrap:wrap;align-items:center;">
            <button id="fav-detail-btn" onclick="handleFavDetail(${r.id})"
              class="fav-btn-detail ${fav ? 'active' : ''}">
              ${fav ? 'Favori' : 'Ajouter aux favoris'}
            </button>
            ${r.phone ? `<a href="tel:${r.phone}"><button class="btn btn-outline">📞 Appeler</button></a>` : ''}
            <a href="Restaurant.html"><button class="btn btn-outline">← Retour</button></a>
          </div>
        </div>

        <p style="color:#555;line-height:1.6;margin-bottom:1.5rem;">${r.description}</p>

        <!-- Onglets -->
        <div class="tab-bar">
          <button class="tab-btn active" onclick="switchTab('menu')">Menu</button>
          <button class="tab-btn" onclick="switchTab('hours')"> Horaires</button>
          <button class="tab-btn" onclick="switchTab('map')">Carte</button>
          <button class="tab-btn" onclick="switchTab('reviews')"> Avis (${r.reviews.length})</button>
        </div>

        <div id="tab-menu" class="tab-panel active">${menuHtml}</div>

        <div id="tab-hours" class="tab-panel">
          <table class="hours-table"><tbody>${hoursRows}</tbody></table>
        </div>

        <div id="tab-map" class="tab-panel">
          <p style="color:#888;font-size:.9rem;"> ${r.address}</p>
          <iframe class="map-iframe"
            src="https://www.openstreetmap.org/export/embed.html?bbox=${r.lng - 0.01},${r.lat - 0.01},${r.lng + 0.01},${r.lat + 0.01}&layer=mapnik&marker=${r.lat},${r.lng}"
            loading="lazy">
          </iframe>
        </div>

        <div id="tab-reviews" class="tab-panel">
          ${reviewsHtml || '<p style="color:#888;">Aucun avis pour le moment.</p>'}
        </div>

      </div>
    </section>`;
}

function handleFavDetail(id) {
  const isNow = toggleFavorite(id);
  const btn = document.getElementById('fav-detail-btn');
  if (btn) {
    btn.textContent = isNow ? ' Favori' : ' Ajouter aux favoris';
    btn.className = 'fav-btn-detail' + (isNow ? ' active' : '');
  }
}

function switchTab(name) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name)?.classList.add('active');
  event.target.classList.add('active');
}

// URl//

document.addEventListener('DOMContentLoaded', () => {
  const favIds = getFavorites();
  console.log("Favoris chargés :", favIds);
  const favrestos = restaurants.filter(r => favIds.includes(r.id));
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));

  if (id) {
    const r = restaurants.find(r => r.id === id);
    if (r) renderDetailPage(r);
    else document.getElementById('restaurant-detail').innerHTML =
      '<p style="text-align:center;padding:3rem;color:#888;">Restaurant introuvable.</p>';
  } else {
    renderListPage();
  }
});