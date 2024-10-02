// Inicializar el mapa centrado en San Salvador
const map = L.map('map').setView([13.69294, -89.21819], 13);

// Añadir la capa de mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Información de las ofertas fitness
const fitnessOffers = [
    {
        name: "La Grotta (CrossFit)",
        category: "CrossFit",
        location: [13.6981, -89.1913],
        description: "Clases de CrossFit en horarios flexibles. $5 por clase.",
    },
    {
        name: "Shanti Yoga",
        category: "Yoga",
        location: [13.6968, -89.2000],
        description: "Clases de Yoga en diferentes horarios. $6.50 por clase.",
    },
    {
        name: "Smart Fit",
        category: "Gimnasio General",
        location: [13.6944, -89.2102],
        description: "Acceso mensual a gimnasio. $25 al mes.",
    },
    {
        name: "Pádel Club",
        category: "Pádel",
        location: [13.6912, -89.2140],
        description: "Canchas de pádel disponibles a $6 por hora de juego.",
    },
    {
        name: "Gatio Surf Lessons",
        category: "Surf",
        location: [13.6732, -89.2395],
        description: "Clases de surf disponibles. $25 por clase.",
    },
    {
        name: "Lotus Masaje",
        category: "Masajes",
        location: [13.6989, -89.2064],
        description: "Masajes relajantes. $25 por hora.",
    },
    {
        name: "MMA 300 Training Center",
        category: "Artes Marciales",
        location: [13.7007, -89.2241],
        description: "Entrenamientos de MMA. $55 por 12 clases.",
    },
    {
        name: "Boxing Pride Gym",
        category: "Boxeo",
        location: [13.6895, -89.2081],
        description: "Clases de boxeo disponibles. $99 por 24 clases.",
    },
    {
        name: "Harmony Pilates Studio",
        category: "Pilates",
        location: [13.6957, -89.2025],
        description: "Clases de pilates en varios horarios. $115 por 15 clases.",
    },
    {
        name: "Body Impact",
        category: "Gimnasio General",
        location: [13.6922, -89.1978],
        description: "Acceso a gimnasio con dos visitas diarias. $39 al mes.",
    }
];

// Añadir marcadores al mapa
fitnessOffers.forEach(offer => {
    const marker = L.marker(offer.location).addTo(map);
    marker.bindPopup(`
        <div class="info-window">
            <strong>${offer.name}</strong><br>
            Categoría: ${offer.category}<br>
            ${offer.description}
        </div>
    `);
});
