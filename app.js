const express = require('express');
const { create } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración de Handlebars
const hbs = create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta raíz
app.get('/', (req, res) => {
    const productos = ['Banana', 'Cebollas', 'Pimenton', 'Papas', 'Lechuga', 'Tomate'];
    res.render('main', { productos });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



