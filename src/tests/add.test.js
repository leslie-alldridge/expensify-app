const add = (a, b) => a + b;
const generateGreeting = (name = 'no name') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
    
});

test('name should be mike', () => {
    const nametest = generateGreeting(`Mike`);
    expect(nametest).toBe(`Hello Mike!`);
});

test('name not entered', () => {
    const nametest = generateGreeting();
    expect(nametest).toBe('Hello no name!');
});