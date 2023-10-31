// matchers

test('test object', () => {
  const data = { name: 'alejandro' };
  data.lastname = 'chavez';
  expect(data).toEqual({ name: 'alejandro', lastname: 'chavez' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('boolean', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Christopher').toMatch(/stop/);
});

test('arrays', () => {
  expect([1, 2, 3, 4, 5, 6]).toContain(3);
});
