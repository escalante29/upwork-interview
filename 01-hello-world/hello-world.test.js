const helloWorld = require('./hello-world');

test('Return the value that was sent into the function', () => {
  const string = 'Hello World';
  const result = 'Hello World!';
  expect(helloWorld(string)).toEqual(result);
});
