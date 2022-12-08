import {lookupModeIsSupported, queryTypeIsValid, userRequestIsValid} from '../../lib/validateLookupRequest';
import {createMocks} from 'node-mocks-http';

describe('lookupModeIsSupported', () => {
    test('lookupModeIsSupported is true with a valid query type.', () => {
        expect(lookupModeIsSupported("email")).toBe(true);
    });

    test('lookupModeIsSupported is false with an invalid query type.', () => {
        expect(lookupModeIsSupported("random")).toBe(false);
        expect(lookupModeIsSupported(" ")).toBe(false);
        expect(lookupModeIsSupported("")).toBe(false);
    });
    test('queryTypeIsValid is false with invalid input.', () => {
        expect(queryTypeIsValid("  ")).toBe(false);
        expect(queryTypeIsValid("unsupportedType")).toBe(false);
    });
    test('queryTypeIsValid is true with valid input.', () => {
        expect(queryTypeIsValid("email")).toBe(true);
        expect(queryTypeIsValid("domain")).toBe(true);
        expect(queryTypeIsValid("name")).toBe(true);
    });
    test('userRequestIsValid returns true with valid input.', () => {
        const mockBody: RequestBody = {
            query: "test",
            queryType: "email",
            strict: true
        }
        expect(userRequestIsValid(mockBody, "POST")).toBe(true);
    });
    test('userRequestIsValid returns false with invalid input.', () => {
        const {req, res} = createMocks({
            method: 'GET',
            body: {
                query: "test",
                queryType: "unsupportedType",
                strict: false
            }
        });
        expect(userRequestIsValid(req, res)).toBe(false);
    });
})
