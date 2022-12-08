/**
 * Required to make tests pass (some dependency problem)
 * @jest-environment node
 */
import handler from '../../../pages/api/lookup';
import {createMocks} from 'node-mocks-http';

// TODO: make ci pass in the future.
describe('Test lookup api', () => {
    beforeAll(async () => {
        // @ts-ignore
        // getResultsFromDatabase.find = jest.fn().mockReturnValue([{name: "test"}]);
        const mockMongoInstance = {
            db: jest.fn().mockReturnValue({
                collection: jest.fn().mockReturnValue({
                    find: jest.fn().mockReturnValue({
                        toArray: jest.fn().mockReturnValue([{name: "test"}])
                    })
                })
            })
        }
        // @ts-ignore
        handler.client = {
            connect: mockMongoInstance,
        }
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

