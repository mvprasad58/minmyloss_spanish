'use strict';
var express = require('express');
module.exports = function(app) {
  var PowerLossConsController = require('../Controller/PowerController');
var apiRoutes =  express.Router();
app.get('/',function(req,res){
    res.send('We are happy to see you using Chat Bot Webhook');
  });
// registerUser Route
  app.route('/')
    .post(PowerLossConsController.processRequest);
};
