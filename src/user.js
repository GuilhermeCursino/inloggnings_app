/**
 * Represents a user with a username and password.
 * @class
 */
class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  }
  
/**
 * An array to store user objects.
 * @type {Array<Object>}
 */
  const users = [];
  
/**
 * Validates the security of a given password.
 * Helper function to validate password security
 * Password must be at least 8 characters long, contain at least 1 uppercase letter, and at least 1 number.
 * 
 * @param {string} password - The password to be validated.
 * @returns {boolean} - Returns true if the password meets the security requirements, otherwise false.
 */
const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/; // At least 8 characters, 1 uppercase letter, 1 number
    return passwordRegex.test(password);
};
  
/**
 * Authenticates a user based on the provided username and password.
 *
 * @param {string} username - The username of the user attempting to log in.
 * @param {string} password - The password of the user attempting to log in.
 * @returns {string|boolean} - Returns true if authentication is successful, 
 *                             otherwise returns an error message.
 */
  const login = (username, password) => {
    const user = users.find(user => user.username === username);
    if (!user) {
      return "Error: Username not found";
    }
    if (user.password !== password) {
      return "Error: Incorrect password";
    }
    return true;
  };
  
/**
 * Creates a new user with the given username and password.
 *
 * @param {string} username - The desired username for the new user.
 * @param {string} password - The desired password for the new user.
 * @returns {User|string} The newly created user object, or an error message if the username already exists or the password does not meet security requirements.
 */
  const createUser = (username, password) => {
    if (users.find(user => user.username === username)) {
      return "Error: Username already exists";
    }
    if (!isValidPassword(password)) {
      return "Error: Password does not meet security requirements";
    }
    const newUser = new User(username, password);
    users.push(newUser);
    return newUser;
  };

/**
 * Changes the password for an existing user.
 *
 * @param {User} user - The user object whose password is to be changed.
 * @param {string} oldPassword - The current password of the user.
 * @param {string} newPassword - The new password to be set for the user.
 * @returns {string|boolean} - Returns true if the password change is successful,
 *                             otherwise returns an error message.
 */
const changePassword = (user, oldPassword, newPassword) => {
    const existingUser = users.find(u => u.username === user.username);
    if (!existingUser) {
        return "Error: User not found";
    }
    if (existingUser.password !== oldPassword) {
        return "Error: Old password does not match";
    }
    if (oldPassword === newPassword) {
        return "Error: New password cannot be the same as old password";
    }
    if (!isValidPassword(newPassword)) {
        return "Error: New password does not meet security requirements";
    }
    existingUser.password = newPassword;
    return true;
};
  
  // Export functions
  module.exports = {
    createUser,
    login,
    changePassword,
    users, 
    // Export users for testing purposes
  };
  