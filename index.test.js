const { capitalize, reverseString, calculator, caesarCipher } = require('./index');
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
    expect(calculator.multiply(20,10)).toBe(200);
});

test('take a string and apply a ceaser Cipher on it', () =>{
    expect(caesarCipher('attackatdawn',1)).toMatch('buubdlbuebxo');
    expect(caesarCipher('attack at dawn',1)).toMatch('buubdl bu ebxo');
    expect(caesarCipher('z',1)).toMatch('a');
    expect(caesarCipher('Z',1)).toMatch('A');
    //expect(caesarCipher('z.',1)).toMatch('a.');
    //expect(caesarCipher('z',1)).toMatch('a');
});