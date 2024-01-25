import Calculator from './calculator'

let calculator = new Calculator();

test('3 + 2 = 5', () => {
    expect(calculator.add(3, 2)).toBe(5)
})

test('3 - 2 = 1', () => {
    expect(calculator.subtract(3,2)).toBe(1)
})

test('3 * 2', () => {
    expect(calculator.multiply(3,2)).toBe(6)
})

test('6 / 2', () => {
    expect(calculator.divide(6,2)).toBe(3)
})