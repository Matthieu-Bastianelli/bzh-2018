var service = require('./service');
var readline = require('readline');

exports.start = function() {
    
   var talks=[];
    
    var textMenu = "*************************\n1. Rafraichir les données\n2. Lister les sessions\n99. Quitter\nSaisissez une option (1, 2 ou 99): \n";
    
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    
    
    function questionMenu() {
        rl.question(textMenu, function (saisie) {

            if(saisie == 99){
                //On ferme la saisie            
                rl.close();
            }else if(saisie==1){
                service.init(function(nb) {
                    console.log('[init]', nb, 'sessions trouvées.')
                    console.log('... Données mises à jour.');
                    questionMenu();
                });
            }else if(saisie==2){
                service.listerSessions(function(talks){
                    talks.forEach(element => console.log(" Titre de la session : "+element.name.concat(" (Speaker : "+element.speakers+")")));
                    if(talks.length==0){console.log('0 session trouvées. Assurez vous d\'avoir bien rafraichi les données.')}
                    questionMenu();
                });
                
            }
            else{
                console.log('Saisie non valide.')
            }
    
                        
        });
    }
    
    questionMenu();
    
    
    

};