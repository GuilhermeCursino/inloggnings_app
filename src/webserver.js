const express = require('express');
const bodyParser = require('body-parser');
const { createUser, login, changePassword, users } = require('./user');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

//---------------------------------------------------------------------
// Pre-populate users object with some test users
createUser('testuser1', 'Password1');
createUser('testuser2', 'Password2');
//---------------------------------------------------------------------

// Route för startsidan
app.get('/', (req, res) => {
  res.render('index');
});

// Route för registrering
app.get('/register', (req, res) => {
  res.render('register', { message: '' });
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const result = createUser(username, password);
  const message = typeof result === 'string' ? result : 'Användare skapad!';
  res.render('register', { message });
});

// Route för inloggning
app.get('/login', (req, res) => {
  res.render('login', { message: '' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const result = login(username, password);
  const message = result === true ? 'Inloggning lyckades!' : result;
  res.render('login', { message });
});

// Route för lösenordsändring
app.get('/change-password', (req, res) => {
  res.render('change-password', { message: '' });
});

app.post('/change-password', (req, res) => {
  const { username, oldPassword, newPassword } = req.body;
  const result = changePassword({ username }, oldPassword, newPassword);
  const message = result === true ? 'Lösenordet ändrades!' : result;
  res.render('change-password', { message });
});

// Starta servern
app.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port}`);
});
