const Ihm = require('./ihm');
const Service = require('./service');

console.log('** Application BreizhCamp 2018 **');

console.log("Création d'une instance de Service...")
let serviceObj = new Service();
//let serviceObj = new Service("http://2018.breizhcamp.org/json/talks.json");  // 2ème méthode de création possible.

console.log("Création d'une instance de Ihm...")
let ihm = new Ihm(serviceObj);

ihm.start();