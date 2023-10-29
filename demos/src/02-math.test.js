const { sum, multiply, divide } = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 4 + 6 to equal 10', () => {
  expect(sum(4, 6)).toBe(10);
});

test('multiplies 2 * 4 to equal 8', () => {
  expect(multiply(2, 4)).toBe(8);
});

test('divides 12 / 3 to equal 4', () => {
  expect(divide(12, 3)).toBe(4);
});

test('zero division', () => {
  expect(divide(2, 0)).toBeNull();
});