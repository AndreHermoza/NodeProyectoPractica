
function displayCurrentDate() {
    const dateDisplay = document.getElementById("date-display");
    const today = new Date();

    const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const dayName = dayNames[today.getDay()];
    const day = today.getDate().toString().padStart(2, '0');
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();

    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const seconds = today.getSeconds().toString().padStart(2, '0');

    const formattedDate = `${dayName}, ${day} de ${month} de ${year} a las ${hours}:${minutes}:${seconds}`;
    dateDisplay.textContent = formattedDate;
}

displayCurrentDate();
setInterval(displayCurrentDate, 1000);
