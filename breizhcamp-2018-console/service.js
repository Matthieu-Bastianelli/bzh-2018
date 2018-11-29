//import de la fonction request.
const requestProm = require('request-promise-native');



module.exports = class Service{
        
    constructor(...urls){
        if (urls.length>0){
           this.tableauUrls = urls;
        }else{
           this.tableauUrls = ["http://2018.breizhcamp.org/json/talks.json", "http://2018.breizhcamp.org/json/others.json"];
        }
        this.talks=[];
    }

    init() {

        return Promise.all(
            this.tableauUrls
                .map(url => requestProm(url,{ json: true })))
            .then(tabResult => this.talks = tabResult.reduce((res1,res2)=>res1.concat(res2)))
            .then(()=>this.talks.length);
    
    };

    listerSessions(){return this.talks}

}
