const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var cron = require('node-cron');


const app = express();
app.use(bodyParser.json());
app.use(cors());

// Exemple de route
app.get('/', (req, res) => res.send('Bienvenue au Hackathon'));

app.get('/cron', (req, res) => {

    cron.schedule('*/2 * * * * *', () => {
        console.log('running a task every 2 seconds');
    });

    res.send('Cron déclenché.')

});




// Lancement du serveur
app.listen(5000, () => console.log('Serveur backend démarré sur le port 5000'));
