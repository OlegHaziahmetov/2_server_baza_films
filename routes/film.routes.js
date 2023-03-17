const Router = require('express');
const router = new Router();
const filmController = require('../controller/film.controller');

router.post('/adm', filmController.createFilm);
router.get('/adm', filmController.getFilm);
router.get('/adm/:id', filmController.getOneFilm);
router.put('/adm', filmController.updateFilm);
router.delete('/adm/:id', filmController.deleteFilm);




module.exports = router;