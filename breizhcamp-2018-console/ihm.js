
const readline = require('readline');

module.exports = class Ihm{

    constructor(service){
        this.textMenu = "*************************\n1. Rafraichir les données\n2. Lister les sessions\n99. Quitter\nSaisissez une option (1, 2 ou 99): \n";
        this.rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
        });
        this.service=service;
    }

    start(){
        this.rl.question(this.textMenu, saisie => {

            if(saisie == 99){
                //On ferme la saisie            
                this.rl.close();
            }else if(saisie==1){
                this.service.init()
                    .then(nb => console.log("[init]", nb, " sessions trouvées.\n... Données mises à jour."))
                    .catch(err => console.log("Erreur de requête", err))
                    .then(() => this.start())
                
                    
                
            }else if(saisie==2){
                let listeSessions = this.service.listerSessions();
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
            this.start();
        }
                        
        });
    }

}
    //let talks=[];

    

