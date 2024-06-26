import { expect } from "chai"
import Calculator from "../src/calculator"
import sinon, { SinonMock, SinonSpy, SinonStub } from "sinon"

describe.only("Spy, Stup and Mock Tests", () => {
    const calcu = new Calculator()
    let spy: SinonSpy
    let stub: SinonStub
    let mock: SinonMock

    before(() => {
        console.log('Before')
    })

    beforeEach(() => {
        console.log('BeforeEach')
        mock = sinon.mock(calcu)
    })    

    after(() => {
        console.log('After')
    })

    afterEach(() => {
        console.log('AfterEach')
        if(stub) stub.restore()
        if(spy) spy.restore()
        if(mock) mock.restore()
    })

    describe("Set a Suite Tests", () => {
        it("Should return Sum", () => {
            spy = sinon.spy(calcu, "add")
            stub = sinon.stub(calcu, "getRandomValue").returns(2)            

            const expectation = mock.expects("logMessage").exactly(1).withArgs("Looging add function")
            const result = calcu.add(2,3)
            expect(result).to.equal(7)
            expect(spy.calledOnceWith(2, 3)).to.be.true
            expectation.verify()            
        })
    
        it("Should return Substract", () => {
            spy = sinon.spy(calcu, "substract")
            
            const expectation = mock.expects("logMessage").exactly(1).withArgs("Looging substract function")
            const result = calcu.substract(2,3)
            expect(result).to.equal(-1)
            expect(spy.calledWith(2, 3)).to.be.true
            expectation.verify()
        })
    })    
})