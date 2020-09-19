const concat = require('./util/concat');
const logger = require('./util/simplelogger');

var text = "text";
logger.emit('log',text);
console.log(concat.addText(text," is great to type"));