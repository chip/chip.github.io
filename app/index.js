require('../vendor/bootstrap/css/bootstrap.css');
require('../vendor/font-awesome/css/font-awesome.css');
require('../less/freelancer.less');
var FontFaceObserver = require('../node_modules/fontfaceobserver/fontfaceobserver');
//var FontFaceObserver = require('../node_modules/fontfaceobserver/fontfaceobserver.js');
//
console.log('what');
//var FontFaceObserver = require('fontfaceobserver');
console.log(FontFaceObserver);

new FontFaceObserver('Lato')
    .load()
    .then( function(){
      console.log('loaded Lato');
    });

new FontFaceObserver('Lato Bold')
    .load()
    .then( function(){
      console.log('loaded Lato Bold');
    });

new FontFaceObserver('Montserrat')
    .load()
    .then( function(){
      console.log('loaded Montserrat');
    });

new FontFaceObserver('Montserrat Bold')
    .load()
    .then( function(){
      console.log('loaded Montserrat Bold');
      window.document.documentElement.className += " fonts-loaded";
    });


//new FontFaceObserver('Lato')
    //.load()
    //.then( function(){
      //window.document.documentElement.className += " fonts-loaded";
    //});
