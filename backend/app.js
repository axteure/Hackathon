const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Exemple de route
app.get('/', (req, res) => res.send('Bienvenue au Hackathon'));

// Lancement du serveur
app.listen(3000, () => console.log('Serveur backend démarré sur le port 3000'));
