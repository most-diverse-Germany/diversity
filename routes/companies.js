const router = require('express').Router()
const Company = require('../models/Company.model')

router.get('/', (req, res, next) => {
  Company.find()
    .then((companies) => {
      res.status(200).json(companies)
    })
    .catch((err) => res.status(500).send({ error: err }))
})

router.get('/:id', (req, res, next) => {
  Company.findById(req.params.id).then((company) => {
    if (!company) {
      res.status(404).json(company)
    } else {
      res.status(200).json(company)
    }
  })
})

module.exports = router
