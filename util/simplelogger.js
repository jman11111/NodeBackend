const EventEmitter = require('events');

class SimpleLogger extends EventEmitter{
    log(message){
        console.log(message);
    }
}

const simplelogger = new SimpleLogger;

simplelogger.on('log', (arg)=>{
    simplelogger.log(arg);
})

module.exports = simplelogger;