const router = require('express').Router()
const UserCompany = require('../models/UserCompany.model')
const fakeScoreApi = require('../fakeScoreApi/fakeScoreApi')

// /api/usercompanies POST	(empty)	Creates one userCompany
router.post('/', (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(500).send({ error: 'Logged out. Please log-in.' })
  }
  UserCompany.find({ owner: req.user._id }).then((results) => {
    if (results.length) {
      return res
        .status(500)
        .send({ error: 'You can only register one company' })
    } else {
      console.log('userCompany')
      const {
        // company_name,
        url_linkedin,
        // number_employees,
        // diversity_total,
        // growth_score,
        // opportunity_score,
      } = req.body
      const {
        company_name,
        number_employees,
        diversity_total,
        growth_score,
        opportunity_score,
      } = fakeScoreApi.fakeScoreApi(url_linkedin)
      UserCompany.create({
        company_name,
        url_linkedin,
        number_employees,
        diversity_total,
        growth_score,
        opportunity_score,
        owner: req.user._id,
      })
        .then((company) => {
          res.status(200).json(company)
        })
        .catch((err) => res.status(500).send({ error: err }))
    }
  })
})

// /api/usercompanies/ GET	(empty)	Returns all userCompanies
router.get('/', (req, res, next) => {
  UserCompany.find()
    .then((companies) => {
      res.status(200).json(companies)
    })
    .catch((err) => res.status(500).send({ error: err }))
})

// /api/usercompanies/user/:id GET	(empty)	Returns all userCompanies by Owner
router.get('/user/:id', (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(500).send({ error: 'Logged out. Please log-in.' })
  }
  UserCompany.find({ owner: req.user._id })
    .then((companies) => {
      res.status(200).json(companies)
    })
    .catch((err) => res.status(500).send({ error: err }))
})

// /api/usercompanies/:id	GET	(empty)	Returns the specified userCompany
router.get('/:id', (req, res, next) => {
  UserCompany.findById(req.params.id).then((company) => {
    if (!company) {
      res.status(404).json(company)
    } else {
      res.status(200).json(company)
    }
  })
})

// /api/usercompany/:id	PUT	JSON	Edits the specified userCompany
router.put('/:id', (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(500).send({ error: 'Logged out. Please log-in.' })
  }
  const {
    // company_name,
    url_linkedin,
    // number_employees,
    // diversity_total,
    // growth_score,
    // opportunity_score,
  } = req.body
  const {
    company_name,
    number_employees,
    diversity_total,
    growth_score,
    opportunity_score,
  } = fakeScoreApi.fakeScoreApi(url_linkedin)
  UserCompany.findByIdAndUpdate(
    req.params.id,
    {
      company_name,
      url_linkedin,
      number_employees,
      diversity_total,
      growth_score,
      opportunity_score,
      owner: req.user._id,
    },
    { new: true }
  )
    .then((updatedCompany) => {
      res.status(200).json(updatedCompany)
    })
    .catch((err) => res.status(500).send({ error: err }))
})

// /api/usercompany/:id	DELETE	JSON	Delete specified userCompany
router.delete('/:id', (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(500).send({ error: 'Logged out. Please log-in.' })
  }
  UserCompany.findByIdAndDelete({ _id: req.params.id })
    .then((company) => {
      res
        .status(200)
        .json({ message: `UserCompany ${company.company_name} removed.` })
    })
    .catch((err) => res.status(500).send({ error: err }))
})

module.exports = router
