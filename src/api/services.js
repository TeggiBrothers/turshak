function Services(config){
  var express = require('express');
  var router = express.Router();

  router.get('/', function (req, res) {
      return res.send("Services coming soon!");
  });

  return router;
}

module.exports = Services;
