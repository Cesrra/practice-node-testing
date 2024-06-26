import { expect } from "chai"
import Calculator from "../src/calculator"
import nock from "nock"

const BASE_URL = "https://jsonplaceholder.typicode.com"

describe("API Tests", () => {
    it("Should make a GET request from API", async () => {
        const calculator = new Calculator()
        const mockUserResponse = { id: 1, name: "Cesar Rincon"}
        nock(BASE_URL).get('/users/1').reply(200, mockUserResponse)
        const res: any = await calculator.getUser()

        expect(res.status).to.equal(200)
        expect(res.data.id).to.equal(1)
    })

    it("Should make a POST request from API", async () => {
        const calculator = new Calculator()
        const userPayload = {
            "name": "Cesar Rincon",
            "username": "Cesrra",
            "email": "cesrra@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
        }
        const expectedUserResponse = {
            "id": 11,
            "name": "Cesar Rincon",
            "username": "Cesrra",
            "email": "cesrra@april.biz"
        }

        nock(BASE_URL).post('/users', userPayload).reply(201, expectedUserResponse)
        const res: any = await calculator.saveUser(userPayload)

        expect(res.status).to.equal(201)
        expect(res.data.id).to.equal(11)
    })

    after(() => {
        nock.cleanAll()
    })
})