const express = require('express');
const db = require('./db'); // Importamos la conexión externa de db.js
const app = express();

app.use(express.json());

// 1. CRITERIO: Ruta GET /usuarios para traer todos los registros
app.get('/usuarios', async (req, res) => {
    try {
        const resultado = await db.select('*').from('usuarios');
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: "Error al consultar la base de datos" });
    }
});

// 2. CRITERIO: Ruta GET /usuarios/:id usando obligatoriamente req.params
app.get('/usuarios/:id', async (req, res) => {
    // Captura explícita del parámetro id de la URL
    const idBuscar = req.params.id; 
    
    try {
        // Consulta usando el método .where() de Knex filtrando por la columna 'id'
        const usuario = await db.select('*').from('usuarios').where('id', idBuscar).first();
        
        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }
        
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Error al buscar el usuario por ID" });
    }
});

// Puerto de escucha
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor de la semana 7 activo en el puerto ${PORT}`);
});
