let { expect } = require("chai");
let errorUtil = require('../lib/util/ErrorUtil');

describe('Testing the Error class invalidUnity method', () => {
    
    it('#testando _getUnityValue passando unidade correta por parametro(GB)', () => {
        expect(() => errorUtil.invalidUnity("GBB")).to.throw(Error);
    });

});