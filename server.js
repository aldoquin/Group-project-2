const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const path = require('path');


// const User = require('./models/RegisterUser')

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3002;

// got this from the project video this is the helper const its empty as of now 
const hbs =exphbs.create({});

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars',hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public/style.css'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use(routes);




sequelize.sync({force: false}).then(()=>{
  app.listen(PORT, ()=> console.log("now listening"))
})


