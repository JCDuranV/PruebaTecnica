const express = require('express');
const app = express();

// Para poder leer JSON en las peticiones
app.use(express.json());

let productos = [
  { id: 1, nombre: "Laptop", precio: 1200 },
  { id: 2, nombre: "Mouse", precio: 25 },
  { id: 3, nombre: "Teclado", precio: 45 }
];

// Endpoint de prueba
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// GET
app.get('/productos', (req, res) => {
    res.json(productos);
});

//POST
app.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;

  // Validar datos obligatorios
  if (!nombre || precio == null) {
    return res.status(400).json({ mensaje: "Faltan datos" });
  }

  // Validar que el precio sea un número mayor a 0
  if (typeof precio !== "number" || precio <= 0) {
    return res.status(400).json({ mensaje: "El precio debe ser un número mayor a 0" });
  }

  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio
  };

  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

//DELETE
app.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  productos.splice(index, 1);
  res.json({ mensaje: "Producto eliminado" });
});

// Puerto del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

