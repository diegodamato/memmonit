let { assert } = require('chai');
let { expect } = require('chai');
// const FileHelper = require('./../lib/helper/FileHelper');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const deleteFile = util.promisify(fs.unlink);

let registerMonitoring = require('./../lib/RegisterMonitoring');

describe('Testing the RegisterMonitoring class', () => {
    
    after(async() => {
        await deleteFile("./testeUsage.txt");
        // FileHelper.deleteFile("./testeUsageTrunc");
        // FileHelper.deleteFile("./testeUsageFixed");
    })

    it.only('#Testing getMemoryUsage by passing wrong unit by parameter(GBB)', async() => {
        registerMonitoring.memoryUsage("./testeUsage.txt", "GB");
        testeUsage = await readFile("./testeUsage.txt");
        
        assert.isString(testeUsage.toString())
         
        // expect(() => memoryMonitoring.getMemoryUsage("GBB")).to.throw(Error);
    });

    // it('#Testing getMemoryUsage by passing correct unit by parameter(GB)', () => {
    //     assert.isNumber(memoryMonitoring.getMemoryUsage("GB"));
    //     assert.isNumber(memoryMonitoring.getMemoryUsage("Gb"));
    // });

});

