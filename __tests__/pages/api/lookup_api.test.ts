/**
 * Required to make tests pass (some dependency problem)
 * @jest-environment node
 */
import handler, {getResultsFromDatabase} from '../../../pages/api/lookup';
import {createMocks} from 'node-mocks-http';

describe('Test lookup api', () => {
    beforeAll(async () => {
        // @ts-ignore
        getResultsFromDatabase.find = jest.fn().mockReturnValueOnce([{name: "test"}]);
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
        const {req, res} = createMocks({
            method: 'POST',
            body: {
                query: "test",
                queryType: "domain",
                strict: true
            }
        })

        handler(req, res).then(() => {
            expect(res._getStatusCode()).toBe(200);
            expect(res._getData()).toBe([{name: "test"}]);
        })
    });
})

