import { assert, expect, should } from "chai"

describe("Assert Style", () => {
    it("EXPECT Assertion style", () => {
        const name = "cesar"
        const age = 29
        const objectData = {
            name: "cesar",
            age: 29
        }
        const arrData: Array<number> = [1,2,3,4]
        const booleanData = true

        expect(name).to.be.ok
        expect(name).to.be.equal("cesar")
        expect(name).to.be.a("string")
        
        expect(age).to.be.ok
        expect(age).to.be.equal(29)
        expect(age).to.be.a("number")

        expect(objectData).to.be.ok
        expect(objectData).to.be.a("object")
        expect(objectData).to.have.property("name").equal("cesar")
        expect(objectData).to.have.property("age").equal(29)
        
        expect(arrData).to.be.ok
        expect(arrData).to.have.lengthOf(4)
        expect(arrData).to.have.lengthOf(4).include(4)
        expect(arrData).to.have.lengthOf(4).that.not.include(5)
        expect(arrData).to.be.a("array")

        expect(booleanData).to.be.ok
        expect(booleanData).to.be.a("boolean")
        expect(booleanData).to.be.true
    })

    it("SHOULD Assertion style", () => {
        should()

        const name = "cesar"
        const age = 29
        const objectData = {
            name: "cesar",
            age: 29
        }
        const arrData: Array<number> = [1,2,3,4]
        const booleanData = true

        name.should.be.ok
        name.should.be.equal("cesar")
        name.should.be.a("string")
        
        age.should.be.ok
        age.should.be.equal(29)
        age.should.be.a("number")

        objectData.should.be.ok
        objectData.should.be.a("object")
        objectData.should.have.property("name").equal("cesar")
        objectData.should.have.property("age").equal(29)
        
        arrData.should.be.ok
        arrData.should.have.lengthOf(4)
        arrData.should.have.lengthOf(4).include(4)
        arrData.should.have.lengthOf(4).that.not.include(5)
        arrData.should.be.a("array")

        booleanData.should.be.ok
        booleanData.should.be.a("boolean")
        booleanData.should.be.true
    })

    it("ASSERT Assertion style", () => {
        const name = "cesar"
        const age = 29
        const objectData = {
            name: "cesar",
            age: 29
        }
        const arrData: Array<number> = [1,2,3,4]
        const booleanData = true

        assert.isOk(name)
        assert.equal(name, "cesar")
        assert.typeOf(name, "string")
        
        assert.isOk(age)
        assert.equal(age, 29)
        assert.typeOf(age, "number")

        assert.isOk(objectData)
        assert.typeOf(objectData, "object")
        assert.deepEqual(objectData, {
            name: "cesar",
            age: 29
        })
        
        assert.isOk(arrData)
        assert.typeOf(arrData, "array")
        assert.deepEqual(arrData, [1,2,3,4])

        assert.isOk(booleanData)
        assert.typeOf(booleanData, "boolean")
        assert.equal(booleanData, true)
    })
})