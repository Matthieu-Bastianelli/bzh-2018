const service = require('../service')

//En asynchrone :
service.init(nb => console.log("[init]", nb, "sessions trouvées."));

////Ce que ça aurait donné en synchrone (ne fonctionne donc pas puisqu'on est en synchrone)
//var nbElements =service.init();
//console.log('....');