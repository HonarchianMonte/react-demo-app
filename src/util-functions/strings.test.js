const {upperCaseFirstLetter} = require('./strings');

describe('capitalize first letter of a string', () => {

    test('should return an empty string if the value is blank', () => {
        expect(upperCaseFirstLetter('')).toEqual('');
    });

    test('should return Hello for hello', () => {
        expect(upperCaseFirstLetter('hello')).toEqual('Hello');
    });

    test('should return H for h', () => {
        expect(upperCaseFirstLetter('h')).toEqual('H');
    });
});