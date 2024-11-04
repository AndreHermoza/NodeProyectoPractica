// JSON con los eventos
const eventData = {
    "events": [
        {
            "title": "Día Mundial del Agua",
            "date": "2024-03-22",
            "description": "Celebración mundial sobre la importancia del agua."
        },
        {
            "title": "Día de la Tierra",
            "date": "2024-04-22",
            "description": "Conciencia sobre la protección del medio ambiente."
        },
        {
            "title": "Día Internacional de la Educación",
            "date": "2024-01-24",
            "description": "Promover la importancia de la educación para el desarrollo sostenible."
        },
        
    ]
};

// Función para obtener la fecha de hoy en formato YYYY-MM-DD
function getTodayDate() {
    const simulatedToday = "2024-04-22"; // Cambia esta fecha a la que quieres simular
    return simulatedToday;
}

// Función para formatear la fecha
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('en-EN', { month: 'long' }).toUpperCase();
    return { day, month };
}

// Contenedor de eventos
const eventsContainer = document.getElementById("events-container");
const todayDate = getTodayDate();

eventData.events.forEach(event => {
    const { day, month } = formatDate(event.date);

    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    // Agregar clase de animación si el evento es hoy
    if (event.date === todayDate) {
        eventCard.classList.add("today-event");
    }

    const eventDate = document.createElement("div");
    eventDate.classList.add("event-date");
    eventDate.innerHTML = `<div class="day">${day}</div><div class="month">${month}</div>`;

    const eventDescription = document.createElement("div");
    eventDescription.classList.add("event-description");
    eventDescription.innerHTML = `<h2>${event.title}</h2><p>${event.description}</p>`;

    eventCard.appendChild(eventDate);
    eventCard.appendChild(eventDescription);
    eventsContainer.appendChild(eventCard);
});
