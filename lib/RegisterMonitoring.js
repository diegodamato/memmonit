const moment = require('moment');
const fs = require('fs')
const util = require('util');
const memoryMonitoring = require('./MemoryMonitoring');

class RegisterMonitoring{
    constructor(){
        this.writeFile = util.promisify(fs.writeFile);
    }

    async memoryUsage(pathFileName, unit){
        let date = moment().format('YYYY MM DD, h:mm:ss a');
        let memUsage = memoryMonitoring.getMemoryUsage(unit).toString();
        let data = `[${date}] - memory usage: ${memUsage} ${unit}\n`;
        this.writeFile(pathFileName, data)
    }

    async memoryUsageTrunc(pathFileName, unit){
        let date = moment().format('YYYY MM DD, h:mm:ss a');
        let memUsage = memoryMonitoring.getMemoryUsageTrunc(unit).toString();
        let data = `[${date}] - memory usage: ${memUsage} ${unit}\n`;
        this.writeFile(pathFileName, data)
    }

    async memoryUsageFixed(pathFileName, unit, fixed){
        let date = moment().format('YYYY MM DD, h:mm:ss a');
        let memUsage = memoryMonitoring.getMemoryUsageFixed(unit, fixed).toString();
        let data = `[${date}] - memory usage: ${memUsage} ${unit}\n`
        this.writeFile(pathFileName, data)
    }

    

}

module.exports = new RegisterMonitoring();