const express = require('express');
const session = require('express-session');
const routes_1 = require('./controllers/api/');
const routes_2 = require('./controllers')
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3002;

const hbs = exphbs.create({});

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public/style.css'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/public')));

app.use(routes_1);
app.use(routes_2);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"))

});


