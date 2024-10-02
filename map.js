document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    if (username) {
        document.getElementById("step1").classList.add("hidden");
        document.getElementById("step2").classList.remove("hidden");
        displayMap(username);
    }
});

function displayMap(username) {
    const map = L.map('map').setView([13.69294, -89.21819], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    const fitnessOffers = [
        { name: "CrossFit La Grotta", location: [13.6981, -89.1913], description: "Clases de CrossFit" },
        { name: "Shanti Yoga", location: [13.6968, -89.2000], description: "Clases de Yoga" },
        // Añade los otros negocios afiliados (hasta 25 según la membresía)
    ];

    fitnessOffers.forEach(offer => {
        const marker = L.marker(offer.location).addTo(map);
        marker.bindPopup(`<strong>${offer.name}</strong><br>${offer.description}`);
        marker.on('click', () => {
            document.getElementById("step2").classList.add("hidden");
            document.getElementById("step3").classList.remove("hidden");
            displaySchedule(offer);
        });
    });
}

function displaySchedule(offer) {
    const schedules = [
        { time: "8:00 AM" },
        { time: "10:00 AM" },
        { time: "6:00 PM" },
    ];
    const scheduleList = document.getElementById("scheduleList");
    scheduleList.innerHTML = "";
    
    schedules.forEach(schedule => {
        const listItem = document.createElement("li");
        listItem.textContent = schedule.time;
        listItem.addEventListener('click', () => {
            confirmReservation(offer, schedule.time);
        });
        scheduleList.appendChild(listItem);
    });
}

function confirmReservation(offer, time) {
    const confirmation = confirm(`¿Deseas confirmar tu reserva para ${offer.name} a las ${time}?`);
    if (confirmation) {
        document.getElementById("step3").classList.add("hidden");
        document.getElementById("step4").classList.remove("hidden");
        document.getElementById("confirmationMessage").textContent = `Te has suscrito al curso "${offer.name}" a las ${time} con éxito.`;
        generateQRCode(`Reserva para ${offer.name} a las ${time}`);
    }
}

function generateQRCode(data) {
    const qr = new QRious({
        element: document.getElementById("qrCode"),
        value: data,
        size: 150,
    });
}
