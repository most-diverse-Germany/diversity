const router = require('express').Router()
const Company = require('../models/Company.model')
const UserCompany = require('../models/UserCompany.model')

router.get('/', (req, res, next) => {
  Company.find()
    .then((companies) => {
      res.status(200).json(companies)
    })
    .catch((err) => res.status(500).send({ error: err }))
})

router.get('/top100', (req, res, next) => {
  Company.find()
    .then((companies) => {
      //THIS IS THE LOGIC TO CALCULATE THE TOP 100
      const filtered = companies
        .sort((a, b) => {
          const avgA =
            (a.diversity_total + a.growth_score + a.opportunity_score) / 3
          const avgB =
            (b.diversity_total + b.growth_score + b.opportunity_score) / 3
          return avgB - avgA
        })
        .splice(0, 100)

      res.status(200).json(filtered)
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
