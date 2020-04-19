const { assert, expect } = require('chai');
const memoryMonitoring = require('../lib/MemoryMonitoring');
const InvalidUnityError = require('./../lib/errors/InvalidUnityError');


describe('Testing the MemoryMonitoring class', () => {
    
    it('#Testing getMemoryUsage by passing wrong unit by parameter(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryUsage("GBB")).to.throw(Error);
    });

    it('#Testing getMemoryUsage by passing correct unit by parameter(GB)', () => {
        assert.isNumber(memoryMonitoring.getMemoryUsage("GB"));
        assert.isNumber(memoryMonitoring.getMemoryUsage("Gb"));
    });

    it('#Testing getMemoryUsageTrunc by passing wrong unit by parameter(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryUsageTrunc("GBB")).to.throw(InvalidUnityError);
    });
    
    it('#Testing getMemoryUsageTrunc by passing correct unit by parameter(GB)', () => {
        assert.isNumber(memoryMonitoring.getMemoryUsageTrunc("GB"));
        assert.isNumber(memoryMonitoring.getMemoryUsageTrunc("Gb"));
    });

    it('#Testing getMemoryUsageFixed by passing wrong unit by parameter(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryUsageFixed("GBB")).to.throw(Error);
    });
    
    it('#Testing getMemoryUsageFixed by passing correct unit by parameter(GB)', () => {
        assert.isNumber(memoryMonitoring.getMemoryUsageFixed("GB", 3));
        assert.isNumber(memoryMonitoring.getMemoryUsageFixed("Gb", 3));
        assert.isNumber(memoryMonitoring.getMemoryUsageFixed("GB", 3.8));
        assert.isNumber(memoryMonitoring.getMemoryUsageFixed("Gb", 3));
    });
    
    it('#Testing getMemoryTotal by passing wrong unit by parameter(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryTotal("GBB")).to.throw(Error);
    });
    
    it('#Testing getMemoryTotal by passing correct unit by parameter(GB)', () => {
        assert.isNumber(memoryMonitoring.getMemoryTotal("GB"));
        assert.isNumber(memoryMonitoring.getMemoryTotal("Gb"));
    });

    it('#Testing getMemoryTotalTrunc by passing wrong unit by parameter(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryTotalTrunc("GBB")).to.throw(Error);
    });
    
    it('#Testing getMemoryTotalTrunc by passing correct unit by parameter(GB)', () => {
        assert.isNumber(memoryMonitoring.getMemoryTotalTrunc("GB"));
        assert.isNumber(memoryMonitoring.getMemoryTotalTrunc("Gb"));
    });

    it('#Testing getMemoryUsageFixed by passing wrong unit by parameter(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryTotalFixed("GBB")).to.throw(Error);
    });
    
    it('#Testing getMemoryTotalFixed by passing correct unit by parameter(GB)', () => {
        assert.isNumber(memoryMonitoring.getMemoryTotalFixed("GB", 3));
        assert.isNumber(memoryMonitoring.getMemoryTotalFixed("Gb", 3));
        assert.isNumber(memoryMonitoring.getMemoryTotalFixed("GB", 3.8));
        assert.isNumber(memoryMonitoring.getMemoryTotalFixed("Gb", 3.8));
    });

    it('#Testing _getUnityValue passing wrong unit by parameter(GBB)', () => {
        assert.isFalse(memoryMonitoring._getUnityValue("GBB"));
    });

    it('#Testing _getUnityValue passing correct unit by parameter(GB)', () => {
        assert.isTrue(memoryMonitoring._getUnityValue("gB"));
        assert.isTrue(memoryMonitoring._getUnityValue("GB"));
    });

});