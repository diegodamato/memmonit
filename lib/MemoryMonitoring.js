const os = require('os');
const errorUtil = require('./util/ErrorUtil');

class MemoryMonitoring{
    constructor(){
        this.units = new Map();
        this.units.set("KB", 1024);
        this.units.set("MB", 1024 * 1024);
        this.units.set("GB", 1024 * 1024 * 1024);
    }
    
    getMemoryUsage(unity){
        if(!this._getUnityValue(unity)){
            errorUtil.invalidUnity(unity);
        }

        let memoryUsage = (os.totalmem() - os.freemem());
        return parseFloat(memoryUsage / this.units.get(unity));
    }
    
    getMemoryUsageTrunc(unity){
        if(!this._getUnityValue(unity)){
            errorUtil.invalidUnity(unity);
        }

        let memoryUsage = (os.totalmem() - os.freemem());
        return Math.trunc(memoryUsage / this.units.get(unity));
    }

    getMemoryUsageFixed(unity, fixed){
        if(!this._getUnityValue(unity)){
            errorUtil.invalidUnity(unity);
        }
        
        let memoryUsage = (os.totalmem() - os.freemem())
        return parseFloat((memoryUsage / this.units.get(unity)).toFixed(parseInt(fixed)));
    }

    getMemoryTotal(unity){
        if(!this._getUnityValue(unity)){
            errorUtil.invalidUnity(unity);
        }

        return parseFloat(os.totalmem() / this.units.get(unity));
    }

    getMemoryTotalTrunc(unity){
        if(!this._getUnityValue(unity)){
            errorUtil.invalidUnity(unity);
        }

        return Math.trunc(os.totalmem() / this.units.get(unity));
    }

    getMemoryTotalFixed(unity, fixed){

        if(!this._getUnityValue(unity)){
            errorUtil.invalidUnity(unity);
        }

        return parseFloat((os.totalmem() / this.units.get(unity)).toFixed(parseInt(fixed)));
    }

    _getUnityValue(unity){

        return !isNaN(this.units.get(unity.toUpperCase()));
    }
    
}

module.exports = new MemoryMonitoring();