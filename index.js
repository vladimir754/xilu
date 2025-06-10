const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'xilu')); // Solo la carpeta de vistas

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('xilu1'); // renderiza views/xilu/xilu1.ejs
});

app.get('/redireccion', (req, res) => {
  res.render('xilu'); // renderiza views/xilu/xilu.ejs
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
