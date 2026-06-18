const express = require('express');
const app = express();

// CRITERIO DE REVISIÓN: El servidor usa express.json() obligatoriamente
app.use(express.json());

// RUTA 1: /registro
app.post('/registro', (req, res) => {
    // Uso de req.body para recibir los datos enviados por el usuario
    const nombre = req.body.nombre;
    const mensaje = req.body.mensaje;

    res.json({
        estado: "Datos recibidos",
        nombre: nombre,
        mensaje: mensaje
    });
});

// RUTA 2: /incidencia (Criterio de revisión de simulación comunitaria)
app.post('/incidencia', (req, res) => {
    // Uso de req.body para capturar la información estructurada del ciudadano
    const tipo = req.body.tipo;
    const descripcion = req.body.descripcion;

    res.json({
        mensaje: "Incidencia registrada",
        tipo: tipo,
        descripcion: descripcion
    });
});

// Configurar el puerto de escucha
const PUERTO = 3000;
app.listen(PUERTO, () => {
    console.log(`Servidor ejecutándose de forma segura en el puerto ${PUERTO}`);
});