const { expect } = require("chai");
let chai = require("chai");
let chaiHttp = require("chai-http");
const should = chai.should();
let func  = require('../public/js/filterPrice');

chai.use(chaiHttp);

describe("Validation", function () {
    it("filter price", () => {
        expect(func.filterPrice(10, 200, 100)).to.be.equal(true);
    });
    it("filter price", () => {
        expect(func.filterPrice(10, 200, 400)).to.be.equal(false);
    });
    
})