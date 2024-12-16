const {Router}= require('express');
const indexController = require('../controller/indexController')
const indexRoute = Router();


indexRoute.get('/',indexController.indexGet);
indexRoute.get('/cat',indexController.catSearchGet);


//! edit 
indexRoute.get('/catEdit',indexController.catEditGet);
indexRoute.post('/catEdit',indexController.catEditPost);

indexRoute.get('/nameEdit',indexController.nameEditGet);
indexRoute.post('/nameEdit',indexController.nameEditPost);



// ! delete
indexRoute.get('/catDelete',indexController.catDeleteGet);
indexRoute.post('/catDelete',indexController.catDeletePost);

// indexRoute.get('/nameDelete',indexController.nameDeleteGet);
indexRoute.post('/nameDelete',indexController.nameDeletePost);
    




//! create 
indexRoute.post('/createCat',indexController.createCatPost);
indexRoute.post('/createName',indexController.createNamePost);







module.exports=indexRoute;





