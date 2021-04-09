const http = require('http');
const path = require('path');
const express = require('express');

const app = express();


app.use(express.json()); 
app.use(express.urlencoded()); //Parse URL-encoded bodies


const httpServer = http.createServer(app);

app.set('views', path.join(__dirname, 'views')); // precission du repertoire de stockage des templates
app.set('view engine', 'ejs'); // le moteur de template utilisé

app.use(express.static(path.join(__dirname, 'public'))); // repertoire à utiliser pour les fichiers statics
app.use("/mdbootstrap", express.static(__dirname + "/node_modules/mdbootstrap")); // module mbd bootstrap



const index = require('./routes/index');
const admin = require('./routes/admin');
const inscription = require('./routes/inscription');
const connexion = require('./routes/connexion');
const deconnexion = require('./routes/deconnexion');
const paiement = require('./routes/paiement');

const mairieAccueil = require('./routes/mairie/accueil');




app.use(index);
app.use(admin);
app.use(connexion);
app.use(deconnexion);
app.use(inscription);
app.use(paiement);
app.use('/mairie',mairieAccueil);

/* normalizePort permet de rechercher un port valide afin d'eviter des
 *   desagrement lors du deploiyement.
 */
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/* errorHandler permet de lever les erreurs si 
 *  le server rencontre des difficultés.
 */
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' necessite des privièges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' en cours d\'utilisation.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

httpServer.on('error', errorHandler);
httpServer.on('listening', () => {
    const address = httpServer.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('connecté sur le ' + bind);
});

httpServer.listen(port);