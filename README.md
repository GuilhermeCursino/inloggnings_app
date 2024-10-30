# inloggnings_app

<!--
# node src/main.js to rum the application on the terminal    

# node src/webserver.js to run the aplication on the webserver on the http://localhost:3000

# npm test to run jest --coverage test use bash to run the test

$ npm test

> inloggnings_app@1.0.0 test
> jest --coverage

 PASS  tests/user.test.js
    √ createUser should create a new user (2 ms)
    √ createUser should not create a user with an existing username
    √ login should authenticate a user
    √ login should return error for invalid credentials
    √ changePassword should change the password (1 ms)
    √ changePassword should return error for invalid old password

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |   86.48 |    68.75 |     100 |   85.29 |                   
 user.js  |   86.48 |    68.75 |     100 |   85.29 | 42,62,81,87,90    
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.509 s, estimated 1 s
Ran all test suites.

-->