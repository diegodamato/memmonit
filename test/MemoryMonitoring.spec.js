let { assert } = require("chai");
let { expect } = require("chai");
let memoryMonitoring = require('../lib/MemoryMonitoring');


describe('Testing the MemoryMonitoring class getMemoryUsage method', () => {
    
    it('#Testing getMemoryUsage by passing wrong unit by parameter(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryUsage("GBB")).to.throw(Error);
    });

    it('#Testing getMemoryUsage by passing correct unit by parameter(GB)', () => {
        let mem = memoryMonitoring.getMemoryUsage("GB");
        assert.isNumber(mem);
    });

});


describe('Testing the MemoryMonitoring class getMemoryUsageTrunc method', () => {
    
    it('#Testing getMemoryUsageTrunc by passing wrong unit by parameter(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryUsageTrunc("GBB")).to.throw(Error);
    });
    
    it('#Testing getMemoryUsageTrunc by passing correct unit by parameter(GB)', () => {
        let mem = memoryMonitoring.getMemoryUsageTrunc("GB");
        assert.isNumber(mem);
    });

});


describe('Testing the MemoryMonitoring class getMemoryUsageFixed method', () => {
    
    it('#Testing getMemoryUsageFixed by passing wrong unit by parameter(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryUsageFixed("GBB")).to.throw(Error);
    });
    
    it('#Testing getMemoryUsageFixed by passing correct unit by parameter(GB)', () => {
        let mem = memoryMonitoring.getMemoryUsageFixed("GB", 3);
        assert.isNumber(mem);
    });

});

describe('Testing the MemoryMonitoring class getMemoryTotal method', () => {
    
    it('#Testing getMemoryUsageFixed by passing wrong unit by parameter(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryTotal("GBB")).to.throw(Error);
    });
    
    it('#Testing getMemoryUsageFixed by passing correct unit by parameter(GB)', () => {
        let mem = memoryMonitoring.getMemoryTotal("GB", 3);
        assert.isNumber(mem);
    });

});


describe('Testing the MemoryMonitoring class getMemoryTotalTrunc method', () => {
    
    it('#Testing getMemoryUsageFixed by passing wrong unit by parameter(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryTotalTrunc("GBB")).to.throw(Error);
    });
    
    it('#Testing getMemoryUsageFixed by passing correct unit by parameter(GB)', () => {
        let mem = memoryMonitoring.getMemoryTotalTrunc("GB", 3);
        assert.isNumber(mem);
    });

});


describe('Testing the MemoryMonitoring class getMemoryTotalFixed method', () => {
    
    it('#Testing getMemoryUsageFixed by passing wrong unit by parameter(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryTotalFixed("GBB")).to.throw(Error);
    });
    
    it('#Testing getMemoryUsageFixed by passing correct unit by parameter(GB)', () => {
        let mem = memoryMonitoring.getMemoryTotalFixed("GB", 3);
        assert.isNumber(mem);
    });

});


describe('Testing the MemoryMonitoring class _getUnityValue method', () => {
    
    it('#Testing _getUnityValue passing wrong unit by parameter(GBB)', () => {
        assert.isFalse(memoryMonitoring._getUnityValue("GBB"));
    });

    it('#Testing _getUnityValue passing correct unit by parameter(GB)', () => {
        assert.isTrue(memoryMonitoring._getUnityValue("GB"));
    });


});