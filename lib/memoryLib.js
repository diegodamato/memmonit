const os = require("os");

class MemoryMonitoring{
    constructor(){
        this.units = new Map();
        this.units.set("KB", 1024);
        this.units.set("MB", 1024 * 1024);
        this.units.set("GB", 1024 * 1024 * 1024);
    }

    getMemoryUsage(unity){
        if(this._getUnityValue(unity)){
            let memoryUsage = (os.totalmem() - os.freemem())
            return memoryUsage / this.units.get(unity);
        }
        throw new Error(`A unidade passada por parâmetro não existe: ${unity}`);
    }
    
    getMemoryUsageTrunc(unity){
        if(this._getUnityValue(unity)){
            let memoryUsage = (os.totalmem() - os.freemem())
            return Math.trunc(memoryUsage / this.units.get(unity));
        }
        throw new Error(`A unidade passada por parâmetro não existe: ${unity}`);
    }
    
    getMemoryUsageFixed(unity, fixed){
        if(this._getUnityValue(unity)){
            let memoryUsage = (os.totalmem() - os.freemem())
            return (memoryUsage / this.units.get(unity)).toFixed(parseInt(fixed));
        }
        throw new Error(`A unidade passada por parâmetro não existe: ${unity}`);
    }

    getMemoryTotal(unity){
        throw os.totalmem() / this.units.get(unity);
    }

    getMemoryTotalTrunc(unity){
        return Math.trunc(os.totalmem() / this.units.get(unity));
    }

    getMemoryTotalFixed(unity, fixed){
        return (os.totalmem() / this.units.get(unity)).toFixed(parseInt(fixed));
    }

    _getUnityValue(unity){
        return !isNaN(this.units.get(unity));
    }
    
    
}

module.exports = new MemoryMonitoring();

let mem = new MemoryMonitoring();





