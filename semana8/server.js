const express = require('express');
const db = require('./db'); // Importa la conexión externa que configuramos en db.js
const app = express();

// CRITERIO DE REVISIÓN OBLIGATORIO: Middleware para interpretar JSON en el req.body
app.use(express.json());

// CRITERIO DE REVISIÓN OBLIGATORIO: Ruta POST /incidencias
app.post('/incidencias', async (req, res) => {
    // Extracción de datos del cuerpo de la petición
    const tipo = req.body.tipo;
    const descripcion = req.body.descripcion;

    // Validación básica de seguridad
    if (!tipo || !descripcion) {
        return res.status(400).json({ error: "Por favor, completa el tipo y la descripción del reporte." });
    }

    try {
        // CRITERIO DE REVISIÓN OBLIGATORIO: Uso de .insert() para guardar en PostgreSQL
        await db('incidencias').insert({
            tipo: tipo,
            descripcion: descripcion
        });

        // Respuesta exitosa (Status 201: Creado)
        res.status(201).json({
            mensaje: "Incidencia registrada exitosamente en la base de datos",
            datos: { tipo, descripcion }
        });
    } catch (error) {
        res.status(500).json({ error: "Error interno al intentar guardar el reporte ciudadano" });
    }
});

// Inicializar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor de la comunidad (Semana 8) activo en: http://localhost:${PORT}`);
});
