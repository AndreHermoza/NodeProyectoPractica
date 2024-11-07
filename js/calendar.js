fetch('http://localhost:3000/evento')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        const eventoDiv = document.getElementById('eventodia');
        eventoDiv.innerText = data;
    })
    .catch(error => {
        console.error('Error al obtener el evento:', error);
        document.getElementById('eventodia').innerText = 'No se pudo cargar el evento del día.';
    });
