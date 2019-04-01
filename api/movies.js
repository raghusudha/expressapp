var express = require('express');
var router = express.Router();
var service=require('../services/moviedbservice');

// var moviesList=[
//     {id:1,name:'arya',year:2007}
// ]

router.get('/', function(req, res, next){
    var callback=function(result){
    res.send(result);
    }
    service.getmovies(callback);

});
router.post('/', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var movie = req.body;
    service.addMovie(movie, callback);
  });
  
  router.put('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var movieId = req.params.id;
    var movie = req.body;
    service.updateMovie(movie,callback);
  });
  
  router.delete('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var movieId = req.params.id;
    service.deleteMovie(movieId,callback);
  });
  
  router.get('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var movieId = req.params.id;
    var movie = service.getMovieById(movieId,callback);
  });
module.exports=router;