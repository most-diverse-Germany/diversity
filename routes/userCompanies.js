const router = require('express').Router()
const UserCompany = require('../models/UserCompany.model')

// /api/usercompany/ POST	(empty)	Creates one userCompany
router.post('/', (req, res, next) => {
  console.log('userCompany')
  const {
    company_name,
    url_linkedin,
    number_employees,
    diversity_score,
    growth_score,
    opportunity_score,
  } = req.body
  UserCompany.create({
    company_name,
    url_linkedin,
    number_employees,
    diversity_score,
    growth_score,
    opportunity_score,
  })
    .then((company) => {
      res.status(200).json(company)
    })
    .catch((err) => res.status(500).send({ error: err }))
})

// /api/usercompany/ GET	(empty)	Returns all userCompanies
router.get('/', (req, res, next) => {
  UserCompany.find()
    .then((companies) => {
      res.status(200).json(companies)
    })
    .catch((err) => res.status(500).send({ error: err }))
})

// /api/usercompany/:id	GET	(empty)	Returns the specified userCompany
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
  const {
    company_name,
    url_linkedin,
    number_employees,
    diversity_score,
    growth_score,
    opportunity_score,
  } = req.body
  UserCompany.findByIdAndUpdate(
    req.params.id,
    {
      company_name,
      url_linkedin,
      number_employees,
      diversity_score,
      growth_score,
      opportunity_score,
    },
    { new: true }
  )
    .then((updatedCompany) => {
      res.status(200).json(updatedCompany)
    })
    .catch((err) => res.status(500).send({ error: err }))
})

// // /api/usercompany/:id	DELETE	JSON	Delete specified userCompany
router.delete('/:id', (req, res, next) => {
  UserCompany.findByIdAndDelete({ _id: req.params.id })
    .then((company) => {
      res
        .status(200)
        .json({ message: `UserCompany ${company.company_name} removed.` })
    })
    .catch((err) => res.status(500).send({ error: err }))
})

module.exports = router
