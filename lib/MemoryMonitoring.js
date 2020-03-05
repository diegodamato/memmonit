const os = require('os');
const InvalidUnityError = require('./errors/InvalidUnityError');

class MemoryMonitoring{
    constructor(){
        this.units = new Map();
        this.units.set("KB", 1024);
        this.units.set("MB", 1024 * 1024);
        this.units.set("GB", 1024 * 1024 * 1024);
    }
    
    /**
     * @param {string} unity Memory measurement unit.
    */
    getMemoryUsage(unity){
        if(!this._getUnityValue(unity)){
            throw new InvalidUnityError(unity);
        }

        let memoryUsage = (os.totalmem() - os.freemem());
        return parseFloat(memoryUsage / this.units.get(unity));
    }
    
    /**
     * @param {string} unity Memory measurement unit.
    */
    getMemoryUsageTrunc(unity){
        if(!this._getUnityValue(unity)){
            throw new InvalidUnityError(unity);
        }

        let memoryUsage = (os.totalmem() - os.freemem());
        return Math.trunc(memoryUsage / this.units.get(unity));
    }

    /**
     * @param {string} unity Memory measurement unit.
     * @param {number} fixed Decimal places for rounding.
    */
    getMemoryUsageFixed(unity, fixed){
        if(!this._getUnityValue(unity)){
            throw new InvalidUnityError(unity);
        }
        
        let memoryUsage = (os.totalmem() - os.freemem())
        return parseFloat((memoryUsage / this.units.get(unity)).toFixed(parseInt(fixed)));
    }

    /**
     * @param {string} unity Memory measurement unit.
    */
    getMemoryTotal(unity){
        if(!this._getUnityValue(unity)){
            throw new InvalidUnityError(unity);
        }

        return parseFloat(os.totalmem() / this.units.get(unity));
    }

    /**
     * @param {string} unity Memory measurement unit.
    */
    getMemoryTotalTrunc(unity){
        if(!this._getUnityValue(unity)){
            throw new InvalidUnityError(unity);
        }

        return Math.trunc(os.totalmem() / this.units.get(unity));
    }

    /**
     * @param {string} unity Memory measurement unit.
     * @param {number} fixed Decimal places for rounding.
    */
    getMemoryTotalFixed(unity, fixed){

        if(!this._getUnityValue(unity)){
            throw new InvalidUnityError(unity);
        }

        return parseFloat((os.totalmem() / this.units.get(unity)).toFixed(parseInt(fixed)));
    }

    _getUnityValue(unity){

        return !isNaN(this.units.get(unity.toUpperCase()));
    }
    
}

module.exports = new MemoryMonitoring();