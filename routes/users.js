// /api/users/:id	GET	(empty)	Returns the specified user
// /api/users/:id	PUT	JSON	Edits the specified user
// /api/users/:id	DELETE	JSON	Delete specified user

const router = require('express').Router()
const mongoose = require('mongoose')
const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const passport = require('passport')

router.put('/:id', (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(500).send({ error: 'Logged out. Please log-in.' })
  }
  // check if the logged in user has permission to update
  if (!(req.params.id === req.session.passport.user)) {
    res
      .status(400)
      .json({ message: 'You are not allowed to update this profile.' })
    return
  }

  console.log('put')
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
  //   console.log(req.body)

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

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' })
    return
  }

  //   update
  const salt = bcrypt.genSaltSync()
  const passwordHash = bcrypt.hashSync(password, salt)
  User.findByIdAndUpdate(
    req.params.id,
    {
      firstName: firstName,
      lastName: lastName,
      company: company,
      passwordHash: passwordHash,
    },
    { new: true }
  )
    .then((updatedUser) => {
      console.log(updatedUser)
      res.json({
        message: `Updates saved!`,
      })
    })
    .catch((error) => {
      res.json(error)
    })
})

module.exports = router
