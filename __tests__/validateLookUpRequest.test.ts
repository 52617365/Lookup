import {lookupModeIsSupported, queryTypeIsValid} from '../lib/validateLookupRequest';

describe('lookupModeIsSupported is true with a valid query type.', () => {
    test('lookupModeIsSupported', () => {
        expect(lookupModeIsSupported("email")).toBe(true);
    });
})

describe('lookupModeIsSupported is false with an invalid query type.', () => {
    test('lookupModeIsSupported', () => {
        expect(lookupModeIsSupported("random")).toBe(false);
        expect(lookupModeIsSupported(" ")).toBe(false);
        expect(lookupModeIsSupported("")).toBe(false);
    });
})
describe('queryTypeIsValid is false with invalid input.', () => {
    test('queryTypeIsValid', () => {
        expect(queryTypeIsValid("  ")).toBe(false);
        expect(queryTypeIsValid("unsupportedType")).toBe(false);
    });
})
describe('queryTypeIsValid is true with valid input.', () => {
    test('queryTypeIsValid', () => {
        expect(queryTypeIsValid("email")).toBe(true);
        expect(queryTypeIsValid("domain")).toBe(true);
        expect(queryTypeIsValid("name")).toBe(true);
    });
})
