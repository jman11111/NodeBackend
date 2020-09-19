const logger = require('./simplelogger');

function addText(basettext,addtext) {
    logger.emit("log", basettext + addtext);
    return basettext + addtext;
}

module.exports.addText = addText;