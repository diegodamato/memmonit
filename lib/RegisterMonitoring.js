const moment = require('moment');
const fs = require('fs')
const memoryMonitoring = require('./MemoryMonitoring');

class RegisterMonitoring{
    constructor(){}

    async memoryUsage(pathFileName, unit){
        return new Promise((resolve, reject) => {
            try{
                let date = moment().format('YYYY MM DD, h:mm:ss a');
                let memUsage = memoryMonitoring.getMemoryUsage(unit).toString();
                let data = `[${date}] - memory usage: ${memUsage} ${unit}\n`;
                fs.writeFileSync(pathFileName, data);
                resolve();
            }catch(err) {
                reject(err);
            }
        });
    }

    async memoryUsageTrunc(pathFileName, unit){
        return new Promise((resolve, reject) => {
            try{
                let date = moment().format('YYYY MM DD, h:mm:ss a');
                let memUsage = memoryMonitoring.getMemoryUsageTrunc(unit).toString();
                let data = `[${date}] - memory usage: ${memUsage} ${unit}\n`;
                fs.writeFileSync(pathFileName, data);
                resolve();
            }catch(err) {
                reject(err);
            }
        });
    }

    async memoryUsageFixed(pathFileName, unit, fixed){
        return new Promise((resolve, reject) => {
            try{
                let date = moment().format('YYYY MM DD, h:mm:ss a');
                let memUsage = memoryMonitoring.getMemoryUsageFixed(unit, fixed).toString();
                let data = `[${date}] - memory usage: ${memUsage} ${unit}\n`
                fs.writeFileSync(pathFileName, data);
                resolve();
            }catch(err){
                reject(err);
            }
        })
    }

}

module.exports = new RegisterMonitoring();