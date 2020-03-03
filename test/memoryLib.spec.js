let { assert } = require("chai");
let { expect } = require("chai");
let memoryMonitoring = require('./../lib/memoryLib');


describe('Testing the MemoryMonitoring class getMemoryUsage method', () => {
    
    it('#testando getMemoryUsage passando unidade errada por parametro(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryUsage("GBB")).to.throw(Error);
    });

    it('#testando getMemoryUsage passando unidade correta por parametro(GB)', () => {
        let mem = memoryMonitoring.getMemoryUsage("GB");
        assert.isNumber(mem);
    });

});


describe('Testing the MemoryMonitoring class getMemoryUsageTrunc method', () => {
    
    it('#testando getMemoryUsageTrunc passando unidade errada por parametro(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryUsageTrunc("GBB")).to.throw(Error);
    });
    
    it('testando getMemoryUsageTrunc passando unidade correta por parametro(GB)', () => {
        let mem = memoryMonitoring.getMemoryUsageTrunc("GB");
        assert.isNumber(mem);
    });

});


describe('Testing the MemoryMonitoring class getMemoryUsageFixed method', () => {
    
    it('testando getMemoryUsageFixed passando unidade errada por parametro(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryUsageFixed("GBB")).to.throw(Error);
    });
    
    it('testando getMemoryUsageFixed passando unidade correta por parametro(GB)', () => {
        let mem = memoryMonitoring.getMemoryUsageFixed("GB", 3);
        assert.isNumber(mem);
    });

});

describe('Testing the MemoryMonitoring class getMemoryTotal method', () => {
    
    it('testando getMemoryUsageFixed passando unidade errada por parametro(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryTotal("GBB")).to.throw(Error);
    });
    
    it('testando getMemoryUsageFixed passando unidade correta por parametro(GB)', () => {
        let mem = memoryMonitoring.getMemoryTotal("GB", 3);
        assert.isNumber(mem);
    });

});


describe('Testing the MemoryMonitoring class getMemoryTotalTrunc method', () => {
    
    it('testando getMemoryUsageFixed passando unidade errada por parametro(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryTotalTrunc("GBB")).to.throw(Error);
    });
    
    it('testando getMemoryUsageFixed passando unidade correta por parametro(GB)', () => {
        let mem = memoryMonitoring.getMemoryTotalTrunc("GB", 3);
        assert.isNumber(mem);
    });

});


describe('Testing the MemoryMonitoring class getMemoryTotalFixed method', () => {
    
    it('testando getMemoryUsageFixed passando unidade errada por parametro(GBB)', () => {
        expect(() => memoryMonitoring.getMemoryTotalFixed("GBB")).to.throw(Error);
    });
    
    it('testando getMemoryUsageFixed passando unidade correta por parametro(GB)', () => {
        let mem = memoryMonitoring.getMemoryTotalFixed("GB", 3);
        assert.isNumber(mem);
    });

});


describe('Testing the MemoryMonitoring class _getUnityValue method', () => {
    
    it('testando _getUnityValue passando unidade correta por parametro(GB)', () => {
        assert.isTrue(memoryMonitoring._getUnityValue("GB"));
    });

    it('testando _getUnityValue passando unidade errada por parametro(GBB)', () => {
        assert.isFalse(memoryMonitoring._getUnityValue("GBB"));
    });

});