const router = require('express').Router()
const Company = require('../models/Company.model')

// below works 👇
// router.get('/', (req, res, next) => {
//   res.status(200).json('Hello World!')
// })

router.get('/', (req, res, next) => {
  Company.find()
    .then((companies) => {
      res.status(200).json(companies)
    })
    .catch((err) => res.status(500).send({ error: err }))
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)



// const express = require('express');
// const router = express.Router();
// const Celebrity = require('../models/celebrity');

// router.get('/', (req, res, next) => {
//   Celebrity.find().then(celebrities => {
//     res.render('celebrities/index.hbs', { celebrities });
//   })
//     .catch(err => {
//       next(err);
//     });
// });

// router.get('/new', (req, res, next) => {
//   res.render('celebrities/new.hbs');
// });

// router.get('/:id', (req, res, next) => {
//   Company.findById(req.params.id)
//     .then(company => {
//       res.render('celebrities/show.hbs', { company });
//     })
//     .catch(err => {
//       next(err);
//     });
// });

router.get('/:id', (req, res, next) => {
  Company.findById(req.params.id)
    .then(company => {
      if (!company) {
        res.status(404).json(company);
      } else {
        res.status(200).json(company);
      }
    })
});

// router.post('/', (req, res, next) => {
//   const { name, occupation, catchPhrase } = req.body;
//   Celebrity.create({ name, occupation, catchPhrase })
//     .then(() => {
//       res.redirect('/celebrities');
//     })
//     .catch(err => {
//       next(err);
//     })
// });

// router.post('/:id', (req, res, next) => {
//   console.log(req.body);
//   const { celebrityname, occupation, catchPhrase } = req.body;
//   Celebrity.findByIdAndUpdate(req.params.id, { name: celebrityname, occupation: occupation, catchPhrase })
//     .then(() => {
//       res.redirect('/celebrities');
//     })
//     .catch(err => {
//       next(err);
//     });
// })

// router.post('/:id/delete', (req, res, next) => {
//   Celebrity.findOneAndDelete({ _id: req.params.id })
//     .then(() => {
//       res.redirect('/celebrities');
//     })
//     .catch(err => {
//       next(err);
//     })
// });

// router.get('/:id/edit', (req, res, next) => {
//   Celebrity.findById(req.params.id)
//     .then(celebrity => {
//       res.render('celebrities/edit', { celebrity });
//     })
//     .catch(err => {
//       next(err);
//     });
// });

module.exports = router;

