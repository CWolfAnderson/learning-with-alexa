'use strict';
let Alexa = require('alexa-sdk');
let firebase = require('firebase');
let config = require('./config');

let APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
let SKILL_NAME = 'Desktop Controller';

firebase.initializeApp({
  serviceAccount: config,
  databaseURL: "https://alexacontroller.firebaseio.com/"
});

let database = firebase.database();

/**
* Array containing space facts.
*/

exports.handler = function(event, context, callback) {
  let alexa = Alexa.handler(event, context);
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {
  'LaunchRequest': function(){
    this.emit();
  },
  'Itunes': function(){
    this.emit('LaunchItunes');
  },
  'LaunchItunes': function (){
   var speechOutput = "Launching Itunes";
    var prompt =  "open -a itunes";
    var command ="command";
    database.ref('commands').update({
      command: prompt
    }); () => {
        this.emit();    
    }
  },
  'Netflix': function(){
    this.emit('LaunchNetflix');
  },
  'LaunchNetflix': function (){
   var speechOutput = "Launching Itunes";
    var prompt =  "open http://www.netflix.com";
    var command ="command";
    database.ref('commands').update({
      command: prompt
    }); () => {
        this.emit();    
    }
  },
  'Spotify': function(){
    this.emit('LaunchSpotify');
  },
  'LaunchSpotify': function (){
   var speechOutput = "Launching Spotify";
    var prompt =  "open -a spotify";
    var command ="command";
    database.ref('commands').update({
      command: prompt
    }); () => {
        this.emit();    
    }
  }
}
