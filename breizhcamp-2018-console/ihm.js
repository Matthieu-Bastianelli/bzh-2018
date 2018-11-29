const Service = require('./service');
const readline = require('readline');
//import Service from 'service';

exports.start = () => {

    let serviceObj = new Service();
    //let serviceObj = new Service("http://2018.breizhcamp.org/json/talks.json");

    //let talks=[];
    const textMenu = "*************************\n1. Rafraichir les données\n2. Lister les sessions\n99. Quitter\nSaisissez une option (1, 2 ou 99): \n";

    const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
            });

                        
    questionMenu = () => {
        rl.question(textMenu, saisie => {

            if(saisie == 99){
                //On ferme la saisie            
                rl.close();
            }else if(saisie==1){
                serviceObj.init()
                    .then(nb => console.log("[init]", nb, " sessions trouvées.\n... Données mises à jour."))
                    .catch(err => console.log("Erreur de requête", err))
                    .then(() => questionMenu())
                
                    
                
            }else if(saisie==2){
                let listeSessions = serviceObj.listerSessions();
                if(listeSessions.length===0){
                    console.log('0 session trouvées. Assurez vous d\'avoir bien rafraîchi les données.')
                }else{
                    listeSessions.forEach(element => console.log(` Titre de la session :  ${element.name} (Speaker : ${element.speakers})`));
                }
                                    
            }
            else{
                console.log('Saisie non valide.')
            }
        if(saisie != 99 && saisie != 1){
            questionMenu();
        }
                        
        });
    }
    
    questionMenu();

};