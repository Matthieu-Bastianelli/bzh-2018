// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];

//import de la fonction request.
var request = require('request');

exports.init = function (callback) {

    // TODO effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp
    request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }

        talks = body;

        //console.log(talks.length);


        // TODO effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp
        request('http://2018.breizhcamp.org/json/others.json', { json: true }, function (err, res, body) {
            if (err) { return console.log('Erreur', err); }

            // TODO     => une fois les données récupérées, alimenter la variable talks
            talks = talks.concat(body);

            //console.log(body.length);


            // TODO         => invoquer la callback avec le nombre de sessions récupérées
            callback(talks.length);

        });
    });

};


/* exports.listerSessions = function (callback) {

    // effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp
    request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }

        
        talks = talks.concat(body);

        //body.forEach(element => console.log(element.name.concat(" (Speaker : "+element.speakers+")")));


        // effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp
        request('http://2018.breizhcamp.org/json/others.json', { json: true }, function (err, res, body2) {
            if (err) { return console.log('Erreur', err); }

         
        talks = talks.concat(body2);   
            
        //body2.forEach(element => console.log(element.name.concat(" (Speaker : "+element.speakers+")")));


            // TODO         => invoquer la callback avec les sessions récupérées
            
            callback(talks);

        });
    });

}; */

exports.listerSessions = function (callback) {
    callback(talks);
};