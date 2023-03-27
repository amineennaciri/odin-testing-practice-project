const { capitalize, reverseString, calculator } = require('./index');
//const reverseString = require('./index');

test('takes a string and returns it with the first character capitalized', () =>{
    expect(capitalize('hello')).toBe('Hello');
});

test('takes a string and returns it with the first character capitalized', () =>{
    expect(capitalize('hello')).toMatch('Hello');
});

test('takes a string and reverse it', () =>{
    expect(reverseString('hello')).toMatch('olleh');
});

test('takes two numbers and add them', () =>{
    expect(calculator.add(2,5)).toBe(7);
});

test('takes two numbers and substract them', () =>{
    expect(calculator.substract(2,5)).toBe(-3);
});

test('takes two numbers and divide them', () =>{
    expect(calculator.divide(2,5)).toBe(0.4);
});

test('takes two numbers and multiply them', () =>{
    expect(calculator.multiply(2,5)).toBe(10);
});