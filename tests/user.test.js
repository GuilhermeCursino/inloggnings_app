const { createUser, login, changePassword, users } = require('../src/user');

beforeEach(() => {
  users.length = 0; // Clear users array before each test
});

test('createUser should create a new user', () => {
  const result = createUser('testUser', 'Password1');
  expect(result).toEqual({ username: 'testUser', password: 'Password1' });
  expect(users.length).toBe(1);
});

test('createUser should not create a user with an existing username', () => {
  createUser('testUser', 'Password1');
  const result = createUser('testUser', 'Password2');
  expect(result).toBe('Error: Username already exists');
  expect(users.length).toBe(1);
});

test('login should authenticate a user', () => {
  createUser('testUser', 'Password1');
  const result = login('testUser', 'Password1');
  expect(result).toBe(true);
});

test('login should return error for invalid credentials', () => {
  createUser('testUser', 'Password1');
  const result = login('testUser', 'WrongPassword');
  expect(result).toBe('Error: Incorrect password');
});

test('changePassword should change the password', () => {
  createUser('testUser', 'Password1');
  const result = changePassword({ username: 'testUser' }, 'Password1', 'NewPassword1');
  expect(result).toBe(true);
  expect(users[0].password).toBe('NewPassword1');
});

test('changePassword should return error for invalid old password', () => {
  createUser('testUser', 'Password1');
  const result = changePassword({ username: 'testUser' }, 'WrongPassword', 'NewPassword1');
  expect(result).toBe('Error: Old password does not match');
});