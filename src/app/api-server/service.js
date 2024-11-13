const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configura la conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'reminiscencias',
  password: 'morgana123',
  port: 5432,
});

// Ruta para registrar usuario
app.post('/register', async (req, res) => {
  const { nombre, usuario, email, contrasena } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO usuarios (nombre, usuario, email, contrasena) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre, usuario, email, contrasena]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Ruta para autenticar usuario (login)
app.post('/login', async (req, res) => {
  const { usuario, contrasena } = req.body;

  try {
    // Imprimir los datos recibidos para depuración
    console.log('Datos recibidos para autenticación:', { usuario, contrasena });

    const result = await pool.query(
      'SELECT * FROM usuarios WHERE usuario = $1 AND contrasena = $2',
      [usuario, contrasena]
    );

    if (result.rows.length > 0) {
      // Usuario encontrado, autenticación exitosa
      res.json({ success: true, message: 'Autenticación exitosa' });
    } else {
      // Usuario no encontrado o contraseña incorrecta
      res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
    }
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});