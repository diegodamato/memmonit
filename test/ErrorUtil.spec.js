let { expect } = require("chai");
let errorUtil = require('../lib/util/ErrorUtil');

describe('Testing the ErrorUtil class invalidUnity method', () => {
    
    it('#Testing _getUnityValue passing correct unit by parameter(GB)', () => {
        expect(() => errorUtil.invalidUnity("GBB")).to.throw(Error);
    });

});