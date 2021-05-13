const router = require('express').Router();
const Company = require('../models/Company.model.js');

router.get('/', (req, res, next) => {

  console.log('hello');
  

  Company.find()
    .then(companies => {
      console.log(companies[0]);
      
      res.status(200).json(companies);
    })
    .catch(err => console.log(err)
    )
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router
