const router = require('express').Router()
const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const passport = require('passport')

router.post('/signup', (req, res, next) => {
  const { email, firstName, lastName, company, password } = req.body

  // validations
  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: 'Your password must be at least 8 characters.' })
  }

  if (email === '') {
    return res.status(400).json({ message: 'Please provide your email.' })
  }
  if (firstName === '') {
    return res.status(400).json({ message: 'Please provide your first name.' })
  }
  if (lastName === '') {
    return res.status(400).json({ message: 'Please provide your last name.' })
  }

  // validate that email
  const validEmail = (function (email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  })(email)

  if (!validEmail) {
    return res
      .status(400)
      .json({ message: 'Please provide a valid email address.' })
  }

  User.findOne({ email: email }).then((userFromDb) => {
    if (userFromDb !== null)
      return res.status(400).json({
        message: 'You already have an account with us. Please sign in.',
      })
    else {
      const salt = bcrypt.genSaltSync()
      const passwordHash = bcrypt.hashSync(password, salt)
      console.log('hello2')
      // create User
      User.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        company: company,
        passwordHash: passwordHash,
      })
        .then((createdUser) => {
          console.log('user created')

          // log in User
          req.login(createdUser, (err) => {
            if (err) {
              return res
                .status(500)
                .json({ message: 'Error while attempting to login' })
            } else {
              return res.status(200).json(createdUser)
            }
          })
        })
        .catch((err) => {
          res.json(err)
        })
    }
  })
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      // return res.status(400).json({ message: 'Error while logging in' })
      return next(err)
    }
    if (!user) {
      return res.status(400).json({ message: info.message })
    }
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error while logging in' })
      }
      return res.status(200).json(user)
    })
  })(req, res, next)
})

// // login with passport
// router.post('/login', function (req, res, next) {
//   passport.authenticate('local', function (err, user, info) {
//     if (err) {
//       return next(err)
//     }
//     if (!user) {
//       return res.render('login', { loginErrorMessage: info.message })
//     }
//     req.logIn(user, function (err) {
//       if (err) {
//         return next(err)
//       }
//       return res.redirect('/account')
//     })
//   })(req, res, next)
// })

// this checks if we have a logged in user -> returns this user as json or null
router.get('/loggedin', (req, res) => {
  console.log('this is the user from the session: ', req.user)
  // if we don't use passport but express session it would be: req.session.user
  res.json(req.user)
})

router.delete('/logout', (req, res) => {
  // req.session.destroy() if you are not using passport
  req.logout()
  res.status(200).json({ message: 'Successful Logout' })
})

module.exports = router
