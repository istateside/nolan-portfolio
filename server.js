const express = require('express');
const app     = express();
const path    = require('path');

const cookieParser  = require('cookie-parser');
const passport      = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const Sequelize      = require('sequelize');
const session        = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize      = new Sequelize('aubrey_dev', 'root', '');

sequelize.authenticate().then(
  function() { console.log("Fuck yeah! db connected."); },
  function() { console.log("Fuck! db error."); }
);

app.use(express.static(__dirname + '/build'));
app.use(session({
  secret: "thisisasecret",
  store: new SequelizeStore({db:sequelize}) ,
}));

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    const user = User.find( { where: { username: username, password: password } }).then(function(user) {
      return done(null, user);
    }, function() {
      return done(null, false, { message: "Bad login." });
    })
  }
));

const User = sequelize.define("User", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

sequelize.sync().then(function() {
  User.findOrCreate({
    where: { username: 'admin' },
    defaults: { password: 'password' }
  });
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/admin', passport.authenticate('local', {
  successRedirect: "/",
  failureRedirect: "/admin",
  failureFlash: true
}));

app.listen(3000, function()  {
  console.log("App listening on port 3000.");
});