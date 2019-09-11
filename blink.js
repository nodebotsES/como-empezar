//
// Usa este codigo para probar que funciona
// Si la luz parpadea cada medio segundo ya estas listo.
//
// $ node blink.js
//

var five = require("johnny-five");
var board = new five.Board({port: process.argv[2]});

board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);
});

// Credit http://johnny-five.io