/**
 * Required to make tests pass (some dependency problem)
 * @jest-environment node
 */
import handler from '../../../pages/api/lookup';
import {createMocks} from 'node-mocks-http';
import {ObjectId} from "mongodb";


describe('Test lookup api', () => {
    beforeAll(async () => {
        jest.mock('../../../pages/api/lookup', () => {
            return {
                getResultsFromDatabase: jest.fn()
            }
        });
    })

    test('lookup handler returns 404 on invalid input', () => {
        const {req, res} = createMocks({
            method: 'GET',
            body: {
                query: "test",
                queryType: "unsupportedType",
                strict: true
            }
        })

        handler(req, res).then(() => {
            expect(res._getStatusCode()).toBe(404);
        })
    });
    test('lookup handler returns 404 on invalid input', () => {
        const {req, res} = createMocks({
            method: 'GET',
            body: {
                query: "test",
                queryType: "domain",
                strict: false
            }
        })

        handler(req, res).then(() => {
            expect(res._getStatusCode()).toBe(404);
        })
    });

    test('lookup handler returns 200 on valid input', () => {
        jest.mock('../../../pages/api/lookup')
        const {req, res} = createMocks({
            method: 'POST',
            body: {
                query: "test",
                queryType: "domain",
                strict: true
            }
        });

        handler(req, res).then(() => {
            expect(res._getData()).toBe([{
                id: new ObjectId("60f1b5b0b9b5b8b1b8b1b8b1"),
                username: "hello",
            }]);
            expect(res._getStatusCode()).toBe(200);
        })
    });
})

