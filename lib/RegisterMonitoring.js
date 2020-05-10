const moment = require('moment');
const fs = require('fs')
const memoryMonitoring = require('./MemoryMonitoring');

class RegisterMonitoring{
    constructor(){}

    /**
     * @param {string} pathFileName location of where the file will be saved.
     * @param {string} unit Memory measurement unit.
    */
    registerMemoryUsage(pathFileName, unit){
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

    /**
     * @param {string} pathFileName location of where the file will be saved.
     * @param {string} unit Memory measurement unit.
    */
    registerMemoryUsageTrunc(pathFileName, unit){
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

    /**
     * @param {string} pathFileName location of where the file will be saved.
     * @param {string} unit Memory measurement unit.
     * @param {number} fixed Decimal places for rounding.
    */
    registerMemoryUsageFixed(pathFileName, unit, fixed){
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
        });
    }

}

module.exports = new RegisterMonitoring();