const express = require('express');
const mysql = require('mysql2/promise'); // Usamos mysql2 en modo promesas
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Inicializar la conexión a la base de datos
let connection;

async function initializeDatabase() {
    try {
        connection = await mysql.createConnection({
            host: 'andre-calendar.ct0ywq6ie37s.us-east-1.rds.amazonaws.com', // Mi Endpoint
            user: 'admin', // Usuario de RDS
            password: 'fantasmita312', // Contraseña de mi RDS
            database: 'calendario_civico' // Nombre de la base de datos en RDS
        });
        console.log('Conectado a la base de datos.');
    } catch (error) {
        console.error('Error conectando a la base de datos: ' + error.stack);
    }
}

// Ruta para obtener el evento del día
app.get('/evento', async (req, res) => {
    const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

    try {
        const [results] = await connection.query('SELECT evento, ods FROM fechas_importantes WHERE fecha = ?', [today]);
        if (results.length > 0) {
            const { evento, ods } = results[0];
            res.send(`Hoy es ${today}, se celebra: ${evento}. (${ods})`);
        } else {
            res.send(`Hoy es ${today}, no hay eventos programados.`);
        }
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en la consulta: ' + error);
    }
});

// Iniciar el servidor después de inicializar la base de datos
async function startServer() {
    await initializeDatabase(); // Espera a que la base de datos se inicialice
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}

startServer(); // Inicia el servidor
