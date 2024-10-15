/**
 * Imports the following functions and objects from the 'user' module:
 * - createUser: Function to create a new user.
 * - login: Function to log in a user.
 * - changePassword: Function to change a user's password.
 * - users: Object containing user data.
 */
const { createUser, login, changePassword, users } = require('./user');
const readline = require('readline');

/**
 * Readline Interface for handling input and output streams.
 * 
 * @constant {Interface} rl - The readline interface instance.
 * @property {ReadableStream} input - The input stream to listen for user input.
 * @property {WritableStream} output - The output stream to write responses.
 */
const { createInterface } = readline;
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Pre-populate the users object with some test users.
 * 
 * @function createUser - Function to create a new user.
 * @param {string} username - The username for the new user.
 * @param {string} password - The password for the new user.
 */
createUser("testuser1", "Password1");
createUser("testuser2", "Password2");

/**
 * Displays the main menu options to the user.
 */
const showMenu = () => {
  console.log("\nVälj ett alternativ:");
  console.log("1. Skapa ny användare");
  console.log("2. Logga in");
  console.log("3. Ändra lösenord");
  console.log("4. Avsluta");
};

/**
 * Main function to display the main menu and handle user input.
 */
const main = () => {
  showMenu();
  rl.question("Ange ditt val: ", (choice) => {
    switch (choice) {
      case '1':
        rl.question("Ange användarnamn: ", (username) => {
          rl.question("Ange lösenord: ", (password) => {
            const result = createUser(username, password);
            console.log(result);
            main();
          });
        });
        break;

      case '2':
        rl.question("Ange användarnamn: ", (username) => {
          rl.question("Ange lösenord: ", (password) => {
            const result = login(username, password);
            if (result === true) {
              console.log("Inloggning lyckades!");
            } else {
              console.log(result);
            }
            main();
          });
        });
        break;

      case '3':
        rl.question("Ange användarnamn: ", (username) => {
          rl.question("Ange gammalt lösenord: ", (oldPassword) => {
            rl.question("Ange nytt lösenord: ", (newPassword) => {
              const result = changePassword({ username }, oldPassword, newPassword);
              console.log(result);
              main();
            });
          });
        });
        break;

      case '4':
        rl.close();
        console.log("Avslutar programmet.");
        break;

      default:
        console.log("Ogiltigt val, försök igen.");
        main();
    }
  });
};

main();
