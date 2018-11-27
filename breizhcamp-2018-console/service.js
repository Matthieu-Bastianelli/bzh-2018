// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];

var request = require('request');

exports.init = function (callback) {

   //callback(12);


     // TODO effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp
     request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function(err, res, body) {
    if (err) { return console.log('Erreur', err); }

    
    console.log(body.length);

    talks = talks.concat(body);
    
    
    console.log(talks.length);
    //});

    
     // TODO effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp
     request('http://2018.breizhcamp.org/json/others.json', { json: true }, function(err, res, body) {
    if (err) { return console.log('Erreur', err); }
    
    //console.log(body)
    talks = talks.concat(body);
    
    console.log(body.length);
    
    callback(talks.length);

        });
    });

    //var body2 = body;
    
    // TODO     => une fois les données récupérées, alimenter la variable talks

    

    //talks=talks.concat(talks);

    // TODO         => invoquer la callback avec le nombre de sessions récupérées
    //callback(talks.length);

};
