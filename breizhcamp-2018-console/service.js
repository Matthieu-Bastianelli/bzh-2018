//import de la fonction request.
const requestProm = require('request-promise-native');

// tableau qui contiendra toutes les sessions du BreizhCamp -  réinitialisé à chaque appel de la fonction init.
let talks = [];

exports.init = ()=>{

    return Promise.all([
            'http://2018.breizhcamp.org/json/talks.json',
            'http://2018.breizhcamp.org/json/others.json']
                .map(url => requestProm(url,{ json: true })))
            .then(tabResult => talks = tabResult.reduce((res1,res2)=>res1.concat(res2)))
            .then(()=>talks.length);
    
};

exports.listerSessions = () => talks;


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
