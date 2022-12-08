/**
 * Required to make tests pass (some dependency problem)
 * @jest-environment node
 *
 */
import queryEndpoint from '../../lib/queryEndpoint';

describe('queryEndpoint', () => {
    beforeAll(async () => {
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                status: 200,
                json: () => {
                    return Promise.resolve({
                        database_name: "mock",
                        lines_in_database: 20000,
                        added: "2022-12-05T17:20:28.572+00:00"
                    })
                }
            })
        })
    })
    it('test everything goes well if status code 200', () => {
        // @ts-ignore
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({data: "test"}),
            status: 200
        }))
        return queryEndpoint("test", "email", true).then(data => {
            expect(data).toEqual({data: "test"});
        })
    });

    it('test error is thrown if status code is not 200', () => {
        // @ts-ignore
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({data: "test"}),
            status: 500
        }))
        return queryEndpoint("test", "email", true).catch(e => {
            expect(e).toEqual("there was an error fetching the endpoint");
        })
    })
})

