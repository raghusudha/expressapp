var express = require('express');
var router = express.Router();
var service=require('../services/bookingdbservice');

// var bookingList=[
//     {id:1,name:'arya',year:2007}
// ]

router.get('/', function(req, res, next){
    var callback=function(result){
    res.send({'result':result});
    }
    service.getbooking(callback);

});
router.post('/', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var booking = req.body;
  service.addBooking(booking, callback);
});

router.put('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var bookingId = req.params.id;
  var booking = req.body;
  service.updateBooking(booking,callback);
});

router.delete('/:id', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var bookingId = req.params.id;
  service.deleteBooking(bookingId,callback);
});

module.exports = router;