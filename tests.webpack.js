// var context = require.context('./src', true, /\.js$/);
// context.keys().forEach(context);
var context = require.context('./tests', true, /\.js$/);
context.keys().forEach(context);
