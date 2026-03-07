
const restaurants = [
  {
    id: 1,
    name: "Le Bistrot de Libreville",
    category: "française",
    city: "Libreville",
    address: "Avenue du Colonel Parant, Libreville",
    phone: "+241 01 72 34 56",
    website: "https://bistrot-libreville.ga",
    description: "Restaurant français authentique au cœur de Libreville. Cuisine raffinée avec des produits frais locaux et importés. Ambiance chaleureuse idéale pour les repas d'affaires ou en famille.",
    photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    rating: 4.5,
    reviewsCount: 38,
    hours: {
      lundi: "12h–14h30 / 19h–22h30",
      mardi: "12h–14h30 / 19h–22h30",
      mercredi: "12h–14h30 / 19h–22h30",
      jeudi: "12h–14h30 / 19h–22h30",
      vendredi: "12h–14h30 / 19h–23h",
      samedi: "12h–15h / 19h–23h",
      dimanche: "Fermé"
    },
    menu: [
      { name: "Salade niçoise", price: 3500, category: "Entrées" },
      { name: "Soupe à l'oignon", price: 2800, category: "Entrées" },
      { name: "Steak frites", price: 8500, category: "Plats" },
      { name: "Poulet rôti", price: 7500, category: "Plats" },
      { name: "Crème brûlée", price: 2500, category: "Desserts" },
      { name: "Tarte tatin", price: 2800, category: "Desserts" }
    ],
    reviews: [
      { author: "Marie K.", rating: 5, comment: "Excellent restaurant, service impeccable !", date: "2026-01-15" },
      { author: "Jean P.", rating: 4, comment: "Très bonne cuisine, un peu cher mais ça vaut le coup.", date: "2026-02-03" }
    ],
    lat: 0.3924,
    lng: 9.4536
  },
  {
    id: 2,
    name: "Saveurs d'Afrique",
    category: "africaine",
    city: "Libreville",
    address: "Quartier Louis, Libreville",
    phone: "+241 01 65 78 90",
    website: "",
    description: "Plongez dans les saveurs authentiques de l'Afrique centrale. Nyembwe, poulet DG, viande de brousse... une cuisine gabonaise et africaine dans sa plus belle expression.",
    photo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    rating: 4.7,
    reviewsCount: 62,
    hours: {
      lundi: "11h–22h",
      mardi: "11h–22h",
      mercredi: "11h–22h",
      jeudi: "11h–22h",
      vendredi: "11h–23h",
      samedi: "10h–23h",
      dimanche: "10h–21h"
    },
    menu: [
      { name: "Salade de légumes", price: 1500, category: "Entrées" },
      { name: "Poisson braisé sauce nyembwe", price: 6500, category: "Plats" },
      { name: "Poulet DG (Directeur Général)", price: 7000, category: "Plats" },
      { name: "Antilope aux arachides", price: 8000, category: "Plats" },
      { name: "Beignets de banane plantain", price: 1200, category: "Desserts" },
      { name: "Ananas frais", price: 1000, category: "Desserts" }
    ],
    reviews: [
      { author: "Sylvie M.", rating: 5, comment: "Le meilleur nyembwe de Libreville !", date: "2026-01-20" },
      { author: "Robert A.", rating: 5, comment: "Authentique et délicieux. Je recommande vivement.", date: "2026-02-10" }
    ],
    lat: 0.3901,
    lng: 9.4521
  },
  {
    id: 3,
    name: "Le Liban à Libreville",
    category: "libanaise",
    city: "Libreville",
    address: "Boulevard Triomphal Omar Bongo, Libreville",
    phone: "+241 01 74 12 33",
    website: "https://liban-libreville.com",
    description: "Restaurant libanais proposant mezze, grillades et spécialités du Proche-Orient dans un cadre élégant. Idéal pour partager en famille ou entre amis.",
    photo: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    rating: 4.3,
    reviewsCount: 45,
    hours: {
      lundi: "12h–15h / 18h30–23h",
      mardi: "12h–15h / 18h30–23h",
      mercredi: "12h–15h / 18h30–23h",
      jeudi: "12h–15h / 18h30–23h",
      vendredi: "12h–15h / 18h30–23h30",
      samedi: "12h–23h30",
      dimanche: "12h–22h"
    },
    menu: [
      { name: "Houmous", price: 2000, category: "Entrées" },
      { name: "Fattoush", price: 2200, category: "Entrées" },
      { name: "Kefta grillée", price: 6500, category: "Plats" },
      { name: "Shawarma poulet", price: 5500, category: "Plats" },
      { name: "Baklava", price: 2000, category: "Desserts" },
      { name: "Maamoul", price: 1800, category: "Desserts" }
    ],
    reviews: [
      { author: "Carine F.", rating: 4, comment: "Très bon mezze, ambiance agréable.", date: "2026-01-28" }
    ],
    lat: 0.3957,
    lng: 9.4572
  },
  {
    id: 4,
    name: "Asia Garden",
    category: "asiatique",
    city: "Port-Gentil",
    address: "Avenue Savorgnan de Brazza, Port-Gentil",
    phone: "+241 05 23 45 67",
    website: "",
    description: "Restaurant asiatique mêlant cuisine chinoise, thaïlandaise et vietnamienne. Décor zen, service rapide et prix abordables pour toute la famille.",
    photo: "https://images.unsplash.com/photo-1512003867696-6d5ce6835040?w=800&q=80",
    rating: 4.0,
    reviewsCount: 29,
    hours: {
      lundi: "Fermé",
      mardi: "11h30–14h30 / 18h–22h",
      mercredi: "11h30–14h30 / 18h–22h",
      jeudi: "11h30–14h30 / 18h–22h",
      vendredi: "11h30–14h30 / 18h–22h30",
      samedi: "11h30–22h30",
      dimanche: "12h–21h30"
    },
    menu: [
      { name: "Nems au porc", price: 2500, category: "Entrées" },
      { name: "Soupe won-ton", price: 2000, category: "Entrées" },
      { name: "Riz sauté au poulet", price: 4500, category: "Plats" },
      { name: "Pad Thaï", price: 5500, category: "Plats" },
      { name: "Glace au sésame", price: 1500, category: "Desserts" }
    ],
    reviews: [
      { author: "Thomas N.", rating: 4, comment: "Bon rapport qualité-prix, je reviendrai.", date: "2026-02-14" }
    ],
    lat: -0.7239,
    lng: 8.7817
  },
  {
    id: 5,
    name: "Burger Palace",
    category: "fast-food",
    city: "Libreville",
    address: "Rue des Cocotiers, Libreville",
    phone: "+241 01 55 66 77",
    website: "https://burgerpalace.ga",
    description: "Le meilleur fast-food de Libreville ! Burgers généreux, frites croustillantes et milkshakes maison. Service rapide, idéal pour une pause déjeuner.",
    photo: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
    rating: 3.9,
    reviewsCount: 84,
    hours: {
      lundi: "10h–23h",
      mardi: "10h–23h",
      mercredi: "10h–23h",
      jeudi: "10h–23h",
      vendredi: "10h–00h",
      samedi: "10h–00h",
      dimanche: "11h–22h"
    },
    menu: [
      { name: "Classic Burger", price: 3500, category: "Burgers" },
      { name: "Double Cheese Burger", price: 5000, category: "Burgers" },
      { name: "Chicken Burger", price: 4000, category: "Burgers" },
      { name: "Frites classiques", price: 1200, category: "À côté" },
      { name: "Milkshake vanille", price: 2000, category: "Boissons" }
    ],
    reviews: [
      { author: "Alex D.", rating: 4, comment: "Burgers copieux et savoureux !", date: "2026-01-30" },
      { author: "Nadège B.", rating: 3, comment: "Bon mais service un peu lent.", date: "2026-02-05" }
    ],
    lat: 0.3934,
    lng: 9.4548
  },
  {
    id: 6,
    name: "Le Grill du Port",
    category: "grillades",
    city: "Port-Gentil",
    address: "Front de mer, Port-Gentil",
    phone: "+241 05 34 56 78",
    website: "",
    description: "Restaurant de grillades en bord de mer. Poissons, crevettes, brochettes de viande et homards grillés sur charbon de bois. Vue panoramique sur l'Atlantique.",
    photo: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    rating: 4.6,
    reviewsCount: 51,
    hours: {
      lundi: "Fermé",
      mardi: "12h–15h / 18h–23h",
      mercredi: "12h–15h / 18h–23h",
      jeudi: "12h–15h / 18h–23h",
      vendredi: "12h–15h / 18h–23h",
      samedi: "12h–23h",
      dimanche: "12h–22h"
    },
    menu: [
      { name: "Crevettes grillées (500g)", price: 9500, category: "Entrées" },
      { name: "Brochettes bœuf x4", price: 5000, category: "Entrées" },
      { name: "Homard grillé (700g)", price: 18000, category: "Plats" },
      { name: "Thiéboudienne (riz au poisson)", price: 7000, category: "Plats" },
      { name: "Barracuda grillé", price: 9000, category: "Plats" },
      { name: "Salade de fruits tropicaux", price: 2000, category: "Desserts" }
    ],
    reviews: [
      { author: "Pierre V.", rating: 5, comment: "Vue magnifique et poisson frais ! Incontournable.", date: "2026-02-18" },
      { author: "Amina S.", rating: 4, comment: "Excellentes grillades, un peu cher mais ça vaut.", date: "2026-01-25" }
    ],
    lat: -0.7218,
    lng: 8.7843
  },
  {
    id: 7,
    name: "Chez Mama Rose",
    category: "africaine",
    city: "Franceville",
    address: "Quartier Mvengue, Franceville",
    phone: "+241 04 11 22 33",
    website: "",
    description: "Cuisine gabonaise traditionnelle préparée avec amour. Bouillon de porc, feuilles de manioc, poisson braisé... Comme à la maison, en mieux !",
    photo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    rating: 4.8,
    reviewsCount: 43,
    hours: {
      lundi: "11h–21h",
      mardi: "11h–21h",
      mercredi: "11h–21h",
      jeudi: "11h–21h",
      vendredi: "11h–22h",
      samedi: "10h–22h",
      dimanche: "10h–20h"
    },
    menu: [
      { name: "Bouillon de porc", price: 4500, category: "Plats" },
      { name: "Feuilles de manioc au poisson fumé", price: 4000, category: "Plats" },
      { name: "Poisson braisé sauce tomate", price: 5500, category: "Plats" },
      { name: "Bâton de manioc (10 pièces)", price: 1000, category: "À côté" },
      { name: "Jus de gingembre maison", price: 800, category: "Boissons" }
    ],
    reviews: [
      { author: "Brigitte O.", rating: 5, comment: "La vraie cuisine gabonaise, c'est ici !", date: "2026-02-01" }
    ],
    lat: -1.6335,
    lng: 13.5877
  },
  {
    id: 8,
    name: "Resto du Nord",
    category: "africaine",
    city: "Oyem",
    address: "Centre-ville, Oyem",
    phone: "+241 03 44 55 66",
    website: "",
    description: "Spécialités du nord du Gabon : viandes de brousse, poissons de rivière, légumes du terroir. Un voyage culinaire dans la province du Woleu-Ntem.",
    photo: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
    rating: 4.2,
    reviewsCount: 19,
    hours: {
      lundi: "11h–21h",
      mardi: "11h–21h",
      mercredi: "11h–21h",
      jeudi: "11h–21h",
      vendredi: "11h–22h",
      samedi: "10h–22h",
      dimanche: "Fermé"
    },
    menu: [
      { name: "Poisson de rivière grillé", price: 5000, category: "Plats" },
      { name: "Viande de brousse sauce arachide", price: 6500, category: "Plats" },
      { name: "Eru (légumes mijotés)", price: 3500, category: "Plats" },
      { name: "Plantain frit", price: 800, category: "À côté" }
    ],
    reviews: [
      { author: "Samuel E.", rating: 4, comment: "Saveurs authentiques du nord, vraiment bien.", date: "2026-01-18" }
    ],
    lat: 1.6289,
    lng: 11.5816
  }
];
