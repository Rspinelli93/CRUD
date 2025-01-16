const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); //WTF

let usuarios = [
  { id: 1, nombre: 'Ryu' },
  { id: 2, nombre: 'Ken' },
  { id: 3, nombre: 'Blanca' },
];

// READ
app.get('/', (req, res) => {
  res.send(`
    <h1>Street Fighter</h1>
    <ul>
      ${usuarios
        .map(
          (usuarios) =>
            `<li>ID: ${usuarios.id} || Nombre: ${usuarios.nombre}</li>`
        )
        .join('')}
    </ul>
    <form action="/usuarios" method="post">
        <label for="nombre">NOMBRE</label>
        <input type="text" id="nombre" name="nombre" required>
        <button type="submit">Agregar Usuario</button>
    </form>
    <a href="/usuarios">USUARIOS JJHONSON</a>
  `);
});

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
  //    WTF
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
  };
  usuarios.push(nuevoUsuario);
  res.redirect('/');
});

const PORT = 3000;

app.listen(3000, () => {
  console.log(`Express listening in http://localhost:${PORT}`);
});
