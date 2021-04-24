const express = require('express');
const app = express();
const cors = require("cors");

// Cargar rutas
const todoRoutes = require("./routes/todoRoutes");

//middleware CORS
app.use(cors());
//permite trabajar con req.body
app.use(express.json());

// --- Routes ---

// TodoRoutes
app.use("/api/", todoRoutes);

// Mostrar todos los todos
// Mostrar 1 todos
// Actualizar 1 todo
// Borrar 1 todo

app.listen(5000, () => {
    console.log('server has started on port 5000');
})
