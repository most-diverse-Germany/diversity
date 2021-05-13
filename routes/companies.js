const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.status(200).json('Hello World!')
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router
