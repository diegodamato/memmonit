const { assert, expect } = require('chai');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const deleteFile = util.promisify(fs.unlink);
const InvalidUnityError = require('./../lib/errors/InvalidUnityError');


let registerMonitoring = require('./../lib/RegisterMonitoring');

describe('Testing the RegisterMonitoring class', () => {
    
    after(async() => {
        await deleteFile("./testeUsage.txt");
        await deleteFile("./testeUsageTrunc.txt");
        await deleteFile("./testeUsageFixed.txt");
    })

    it('#Testing save monitoring of memoryUsage method to file', async() => {
        await registerMonitoring.memoryUsage("./testeUsage.txt", "GB");
        let file = await readFile("./testeUsage.txt");
        let textFile = file.toString();

        assert.isString(textFile)
        assert.isTrue(textFile.includes("usage"));
        assert.isTrue(textFile.includes("memory"));
    });

    it('#Testing save monitoring of memoryUsageTrunc method to file', async() => {
        await registerMonitoring.memoryUsageTrunc("./testeUsageTrunc.txt", "GB");
        let file = await readFile("./testeUsageTrunc.txt");
        let textFile = file.toString();

        assert.isString(textFile)
        assert.isTrue(textFile.includes("usage"));
        assert.isTrue(textFile.includes("memory"));
    });

    it('#Testing save monitoring of memoryUsageFixed method to file', async() => {
        await registerMonitoring.memoryUsageFixed("./testeUsageFixed.txt", "GB");
        let file = await readFile("./testeUsageFixed.txt");
        let textFile = file.toString();

        assert.isString(textFile)
        assert.isTrue(textFile.includes("usage"));
        assert.isTrue(textFile.includes("memory"));
    });

    it('#Testing save with error monitoring the memoryUsage method on file', () => {
        expect(async() => await registerMonitoring.memoryUsage("./testeUsage.txt", "GBB").to.throw(InvalidUnityError));
    });

    it('#Testing save with error monitoring the memoryUsageTrunc method on file', () => {
        expect(async() => await registerMonitoring.memoryUsageTrunc("./testeUsageTrunc.txt", "GBB").to.throw(InvalidUnityError));
    });

    it('#Testing save with error monitoring the memoryUsageFixed method on file', () => {
        expect(async() => await registerMonitoring.memoryUsageFixed("./testeUsageFixes.txt", "GBB").to.throw(InvalidUnityError));
    });

   
});

