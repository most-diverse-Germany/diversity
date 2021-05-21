// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config')

// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')

const app = express()

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app)

// session configuration

const session = require('express-session')
const MongoStore = require('connect-mongo')
const DB_URL = process.env.MONGODB_URI // <- this is correct: ATTENTION! must be changed from the ironlauncher template

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    saveUninitialized: false,
    resave: true,
    store: MongoStore.create({
      mongoUrl: DB_URL,
    }),
  })
)

// end of session configuration

// passport configuration
// http://www.passportjs.org/docs/configure/
const User = require('./models/User.model')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

// passport wants to store as little data as possible in the session so it only uses
// the id's (or someting else if we would want to implement that) and not the whole
// user object
// this method is used by passport to put the id of the user into the session
passport.serializeUser((user, done) => {
  done(null, user._id)
})

// this is used to retrieve the user by it's id (that is stored in the session)
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((dbUser) => {
      done(null, dbUser)
    })
    .catch((err) => {
      done(err)
    })
})

passport.use(
  new LocalStrategy(
    // By default, LocalStrategy expects to find credentials in parameters named username and password.
    // change parameters
    {
      usernameField: 'email',
    },

    (username, password, done) => {
      // console.log({ username })
      // attention emai: username
      User.findOne({ email: username })
        .then((dbUser) => {
          // console.log({ dbUser })
          if (dbUser === null) {
            // there is no user with this email
            done(null, false, { message: 'Wrong Credentials' })
          } else if (!bcrypt.compareSync(password, dbUser.passwordHash)) {
            // the password does not match
            console.log('password does not match')
            done(null, false, { message: 'Wrong Credentials' })
          } else {
            // everyhting correct - user should be logged in
            console.log('everything correct - user should be logged in')
            done(null, dbUser)
          }
        })
        .catch((err) => next(err))
    }
  )
)

app.use(passport.initialize())
app.use(passport.session())

// end of passport configuration

// 👇 Start handling routes here
// Contrary to the views version, all routes are controled from the routes/index.js
const allRoutes = require('./routes')
app.use('/api', allRoutes)

// currently db -> later api from imagine foundation
const companies = require('./routes/companies')
app.use('/api/companies', companies)

// companies created by users
const userCompanies = require('./routes/userCompanies')
app.use('/api/usercompanies', userCompanies)

const users = require('./routes/users')
app.use('/api/users', users)

const auth = require('./routes/auth')
app.use('/api/auth', auth)

const path = require('path')
app.use(express.static(path.join(__dirname, '/client/build')))

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + '/client/build/index.html')
})

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app
