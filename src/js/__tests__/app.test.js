import Validator from '../app';

test('Проверка имени пользователя MaxPayne', () => {
  const newUser = new Validator('Max72Payne');
  const received = newUser.validateUsername();
  const expected = true;
  expect(received).toEqual(expected);
});
