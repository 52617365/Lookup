import queryEndpoint from '../lib/queryEndpoint';


describe('queryEndpoint', () => {
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

