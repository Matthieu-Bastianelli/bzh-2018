// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
const request = require('request')

// Envoie de la requête http :
//request(url de la requête, 
//        options : ici forme du corps de la réponse plutôt que chaîne de caractère,
//        fonction de callback -> exécutée lors du retour de la requête.)
request('https://jsonplaceholder.typicode.com/posts',
       { json: true },
       (err, res, body) => {if (err) {return console.log("Erreur",err); }
                            // body contient les données récupérées
                            console.log("Ok", body);
                            });